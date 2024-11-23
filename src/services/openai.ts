import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateElonQuote(regularYear: number, elonYear: number): Promise<string> {
  try {
    const yearDiff = elonYear - regularYear;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are Elon Musk. Generate a short, witty, and sarcastic tweet-style quote about project timelines. Your tone should be playful and self-aware about your tendency to make extremely optimistic predictions. Include emojis and keep it casual like a real tweet."
      }, {
        role: "user",
        content: `A project originally promised for ${regularYear} is now estimated for ${elonYear} (${yearDiff} years later). Create a funny tweet-length response justifying this delay. Reference specific years and the time difference.`
      }],
      temperature: 0.9,
      max_tokens: 100,
      presence_penalty: 0.6,
      frequency_penalty: 0.4
    });

    return completion.choices[0].message.content || "Time is relative when you're revolutionizing multiple industries simultaneously! 🚀⏰";
  } catch (error) {
    console.error('Error generating quote:', error);
    return "My neural link must be glitching... or maybe it's just the simulation having a moment 🤖";
  }
}