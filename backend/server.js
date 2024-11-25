const express = require("express");
const cors = require("cors");
const path = require("path");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "../dist")));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/generate-quote", async (req, res) => {
  try {
    const { regularYear, elonYear } = req.body;
    const yearDiff = elonYear - regularYear;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Elon Musk. Generate a short, witty, and sarcastic tweet-style quote about project timelines. Your tone should be playful and self-aware about your tendency to make extremely optimistic predictions. Include emojis and keep it casual like a real tweet.",
        },
        {
          role: "user",
          content: `A project originally promised for ${regularYear} is now estimated for ${elonYear} (${yearDiff} years later). Create a funny tweet-length response justifying this delay. Reference specific years and the time difference.`,
        },
      ],
      temperature: 0.9,
      max_tokens: 100,
      presence_penalty: 0.6,
      frequency_penalty: 0.4,
    });

    res.json({ quote: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate quote" });
  }
});

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
