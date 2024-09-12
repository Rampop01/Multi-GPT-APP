import OpenAI from "openai";
// require("dotenv").config();
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;

console.log(API_KEY, "API_KEY");

const openai = new OpenAI({ apiKey: API_KEY });

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    console.log(prompt, "prompt");

    try {
      const gptResponse = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct", // Updated model name
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
      });

      res.status(200).json({ data: gptResponse.choices[0].text });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

// Test request
let prompt = "Once upon a time";
let req = { method: "POST", body: { prompt } };
let res = {
  status: (code) => {
    console.log(`Status: ${code}`);
    return res;
  },
  json: (data) => console.log(data),
};
await handler(req, res);
