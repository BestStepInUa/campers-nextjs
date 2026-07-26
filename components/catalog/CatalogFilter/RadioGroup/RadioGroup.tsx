'use client';

import type { FilterValues } from '@/types/catalog';

type RadioGroupProps = {
  title: string;
  name: keyof Pick<FilterValues, 'form' | 'engine' | 'transmission'>;
  options: string[];
  value: string;
  onChange: (field: keyof FilterValues, value: string) => void;
};

function formatLabel(value: string) {
  return value
    .split('_')
    .map((word) => word[0]!.toUpperCase() + word.slice(1))
    .join(' ');
}

export default function RadioGroup({
  title,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="mb-6">
      <p className="text-gray mb-2">{title}</p>

      {options.map((option) => (
        <label
          key={option}
          className="group mb-2 flex cursor-pointer items-center gap-2 last:mb-0"
        >
          <input
            type="radio"
            name={name}
            checked={value === option}
            onChange={() => onChange(name, option)}
            className="peer sr-only"
          />

          <span className="border-text flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors">
            <span className="bg-text h-3.5 w-3.5 scale-0 rounded-full transition-transform group-has-[input:checked]:scale-100" />
          </span>

          {formatLabel(option)}
        </label>
      ))}
    </div>
  );
}
