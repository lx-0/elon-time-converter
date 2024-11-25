export async function generateElonQuote(
  regularYear: number,
  elonYear: number,
): Promise<string> {
  try {
    const response = await fetch("http://localhost:3000/api/generate-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ regularYear, elonYear }),
    });
    if (!response.ok) {
      throw new Error("Failed to generate quote");
    }
    const data = await response.json();
    return (
      data.quote ||
      "Time is relative when you're revolutionizing multiple industries simultaneously! 🚀⏰"
    );
  } catch (error) {
    console.error("Error generating quote:", error);
    return "My neural link must be glitching... or maybe it's just the simulation having a moment 🤖";
  }
}
