'use client';

import { Map } from 'lucide-react';

type Props = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function TextFilterField({
  id,
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="text-gray mb-10 flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>

      <div className="group relative">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="text-main w-full rounded-xl border-0 bg-white p-4 pr-5 pl-12 outline-none focus:placeholder:text-transparent"
        />

        <Map
          size={24}
          className="text-gray group-focus-within:text-main absolute top-4 left-5 transition-colors"
        />
      </div>
    </div>
  );
}
