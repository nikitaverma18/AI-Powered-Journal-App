require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

const generationConfig = {
  temperature: 2,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

async function analyzeSentiment(text) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [
          { text: `Analyze the sentiment of the following text and classify it as POSITIVE, NEGATIVE, or NEUTRAL: "${text}"` },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(text);
  return result.response.text();
}

module.exports = { analyzeSentiment };
