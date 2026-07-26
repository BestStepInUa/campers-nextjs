'use client';

import { X } from 'lucide-react';

type Props = {
  onClear: () => void;
};

export default function FilterActions({ onClear }: Props) {
  return (
    <>
      <button
        type="submit"
        className="bg-grey-green hover:bg-green-hover focus-visible:bg-green-hover active:bg-green-hover mb-4 flex w-full justify-center rounded-full py-4 tracking-[-0.01em] text-white transition-colors"
      >
        Search
      </button>

      <button
        type="button"
        onClick={onClear}
        className="border-gray-light hover:border-green-hover focus-visible:border-green-hover active:border-green-hover text-main flex w-full items-center justify-center gap-1 rounded-full border bg-white py-4 transition-colors"
      >
        <X size={20} />
        Clear filters
      </button>
    </>
  );
}
