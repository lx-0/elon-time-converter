export const elonQuotes = [
  `Just a minor temporal recalibration! In Elon Time™, delays are actually speed upgrades 🚀`,
  `When I said "next year," I was clearly using Mars years. Simple conversion error! 🌍➡️🔴`,
  `Time is just a social construct invented by non-visionaries. We operate on quantum timelines! 🤓`,
  `Reality is adapting to match our optimistic projections... it's just taking longer than expected 🤷‍♂️`,
  `The laws of physics are more like guidelines anyway... especially deadlines! ⏰✨`,
];

export const calculateElonTime = (year: number): number => {
  // More realistic delay calculation based on historical patterns
  const baseDelay = Math.floor(Math.random() * 3) + 2; // 2-4 years base delay
  const optimismFactor = Math.floor((year - 2024) / 2); // Additional delay for future projects
  return year + baseDelay + optimismFactor;
};

export const calculateRealTime = (elonYear: number): number => {
  // Inverse calculation with reality adjustment
  const totalDelay = elonYear - 2024;
  const realYears = Math.max(2024, Math.floor(2024 + totalDelay / 3));
  return realYears;
};