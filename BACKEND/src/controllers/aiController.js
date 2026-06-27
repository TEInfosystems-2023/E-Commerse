const ai = require("../../config/openai");

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are a smart AI assistant for an e-commerce website.

User: ${message}`,
            },
          ],
        },
      ],
    });

    res.status(200).json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};