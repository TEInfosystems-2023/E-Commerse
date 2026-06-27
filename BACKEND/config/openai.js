const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("AI object:", ai);

module.exports = ai;