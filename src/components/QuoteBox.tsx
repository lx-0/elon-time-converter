import React from 'react';
import { Twitter, RefreshCw } from 'lucide-react';

interface QuoteBoxProps {
  quote: string;
  isLoading: boolean;
  onRefresh: () => void;
}

export function QuoteBox({ quote, isLoading, onRefresh }: QuoteBoxProps) {
  return (
    <div className="mt-8 p-6 bg-gray-700/50 rounded-lg relative">
      <blockquote className={`text-lg italic text-gray-300 ${isLoading ? 'opacity-50' : ''}`}>
        "{quote}"
      </blockquote>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-400">
          <Twitter className="w-4 h-4" />
          <span className="text-sm">@elonmusk, probably</span>
        </div>
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>
    </div>
  );
}