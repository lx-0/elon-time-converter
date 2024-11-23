import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimeInputProps {
  label: string;
  icon: LucideIcon;
  value: number;
  onChange: (value: number) => void;
}

export function TimeInput({ label, icon: Icon, value, onChange }: TimeInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value === '' ? 2024 : Math.max(2024, Math.min(2100, parseInt(e.target.value) || 2024));
    onChange(val);
  };

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 text-lg font-medium">
        <Icon className="w-5 h-5 text-blue-400" />
        {label}
      </label>
      <input
        type="number"
        min="2024"
        max="2100"
        value={value}
        onChange={handleChange}
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
      />
    </div>
  );
}