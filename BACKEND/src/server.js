const dotenv = require("dotenv");
dotenv.config();

require("./db");

const http = require("http");
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const apiRoutes = require("./routes");
const aiRoutes = require("./routes/aiRoutes");
const { initSocket } = require("./socket");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Static Folder
app.use(
  "/images",
  express.static(path.join(__dirname, "..", "public", "images"))
);

// API Routes
app.use("/api", apiRoutes);
app.use("/api/ai", aiRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "E-commerce backend is running.",
  });
});

// Create Server
const server = http.createServer(app);

// Socket Initialization
initSocket(server);

// Error Handling
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use.`
    );
    process.exit(1);
  }

  throw error;
});

// Start Server
server.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});