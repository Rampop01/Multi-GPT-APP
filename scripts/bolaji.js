import dotenv from "dotenv";

dotenv.config();

// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";

module.exports = {
  async generateData(prompt) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
  },
};
