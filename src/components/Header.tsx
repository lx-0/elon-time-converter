import React from 'react';
import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Rocket className="w-12 h-12 text-blue-400 animate-pulse" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Elon Time Converter™
      </h1>
      <p className="text-gray-400 text-lg">
        Converting optimistic promises to realistic timelines since 2024
      </p>
    </div>
  );
}