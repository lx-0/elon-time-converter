import React, { useState, useCallback } from "react";
import { Calendar, ArrowRightLeft, Twitter } from "lucide-react";
import { Header } from "./components/Header";
import { TimeInput } from "./components/TimeInput";
import { QuoteBox } from "./components/QuoteBox";
import {
  elonQuotes,
  calculateElonTime,
  calculateRealTime,
} from "./utils/timeCalculations";
import { generateElonQuote } from "./services/openai";

function App() {
  const [regularYear, setRegularYear] = useState<number>(2024);
  const [elonYear, setElonYear] = useState<number>(2024);
  const [quote, setQuote] = useState<string>(elonQuotes[0]);
  const [isLoadingQuote, setIsLoadingQuote] = useState<boolean>(false);

  const generateNewQuote = useCallback(
    async (regular: number, elon: number) => {
      setIsLoadingQuote(true);
      try {
        const newQuote = await generateElonQuote(regular, elon);
        setQuote(newQuote);
      } catch (error) {
        setQuote(elonQuotes[Math.floor(Math.random() * elonQuotes.length)]);
      } finally {
        setIsLoadingQuote(false);
      }
    },
    [],
  );

  const handleRegularYearChange = async (year: number) => {
    const newElonYear = calculateElonTime(year);
    setRegularYear(year);
    setElonYear(newElonYear);
    await generateNewQuote(year, newElonYear);
  };

  const handleElonYearChange = async (year: number) => {
    const newRegularYear = calculateRealTime(year);
    setElonYear(year);
    setRegularYear(newRegularYear);
    await generateNewQuote(newRegularYear, year);
  };

  const handleRefreshQuote = () => {
    generateNewQuote(regularYear, elonYear);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Header />

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <TimeInput
                label="Regular Earth Time"
                icon={Calendar}
                value={regularYear}
                onChange={handleRegularYearChange}
              />

              <div className="flex justify-center">
                <ArrowRightLeft className="w-8 h-8 text-purple-400 animate-pulse" />
              </div>

              <TimeInput
                label="Elon Time"
                icon={Twitter}
                value={elonYear}
                onChange={handleElonYearChange}
              />
            </div>

            <QuoteBox
              quote={quote}
              isLoading={isLoadingQuote}
              onRefresh={handleRefreshQuote}
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              * Results may vary. Not financial advice. May or may not include
              trips to Mars.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Created by{" "}
              <a
                href="https://github.com/lx-0/elon-time-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                @lx-0
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
