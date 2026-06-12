const openai = require('../../config/openai');

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are a smart AI assistant for an e-commerce website.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    res.status(200).json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};