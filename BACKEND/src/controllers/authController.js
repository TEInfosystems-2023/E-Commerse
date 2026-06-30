const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user.id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
    );
};

const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
transporter.verify(function (error, success) {
    if (error) {
        console.log("MAIL ERROR:", error);
    } else {
        console.log("MAIL READY");
    }
});
// REGISTER
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exists = await pool.query(
            "SELECT id FROM users WHERE email = $1",
            [email]
        );

        if (exists.rows.length > 0) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = crypto.randomBytes(32).toString("hex");

        const result = await pool.query(
            `INSERT INTO users
      (name, email, password, verification_token, is_verified)
      VALUES ($1, $2, $3, $4, false)
      RETURNING id, name, email`,
            [name, email, hashedPassword, verificationToken]
        );

        const verifyLink = `https://e-commerse-production-387e.up.railway.app/api/verify-email/${verificationToken}`;
        
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Verify Your Email",
            html: `
        <h2>Welcome to DMART</h2>
        <p>Click the button below to verify your email.</p>
        <a href="${verifyLink}" style="padding:10px 20px;background:#0d6efd;color:#fff;text-decoration:none;border-radius:5px;">
          Verify Email
        </a>
      `,
        });

        res.status(201).json({
            message: "Registration successful. Please verify your email.",
            user: result.rows[0],
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: err.message,
        });
    }
};

// LOGIN
exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const result = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const user = result.rows[0];

        if (!user.is_verified) {
            return res.status(403).json({
                message: "Please verify your email first.",
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        await pool.query(
            "UPDATE users SET refresh_token=$1 WHERE id=$2",
            [refreshToken, user.id]
        );

        const { password: _, refresh_token, ...safeUser } = user;

        res.json({
            message: "Login successful",
            user: safeUser,
            accessToken,
            refreshToken,
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Server Error",
        });

    }
};

exports.verifyEmail = async (req, res) => {
    try {
        const { token } = req.params;

        const result = await pool.query(
            "SELECT * FROM users WHERE verification_token = $1",
            [token]
        );

        if (result.rows.length === 0) {
            return res.status(400).send("Invalid verification link");
        }

        await pool.query(
            `UPDATE users
       SET is_verified = true,
           verification_token = NULL
       WHERE verification_token = $1`,
            [token]
        );

        res.send("Email verified successfully. You can now login.");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};