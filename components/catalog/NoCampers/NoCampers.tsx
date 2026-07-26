import Image from 'next/image';
import { X } from 'lucide-react';

interface Props {
  onResetFilters: () => void;
  onViewAll: () => void;
}

export default function NoCampers({ onResetFilters, onViewAll }: Props) {
  return (
    <div className="bg-inputs flex flex-col items-center rounded-2xl px-50 pt-0 pb-40.25">
      <Image
        src="/catalog/no-campers.png"
        alt="No Campers Found"
        width={488}
        height={463}
        className="mb-5.25"
      />
      <h2 className="text-main mb-4 text-2xl leading-[1.33] font-semibold">
        No campers found
      </h2>
      <p className="text-main mb-10.75 font-medium">
        We couldn`t find any campers that match your filters. <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onResetFilters}
          className="border-gray-light hover:border-green-hover focus-visible:border-green-hover active:border-green-hover inline-flex items-center justify-center gap-1 rounded-full border bg-white px-9.5 py-4 transition-colors"
        >
          <X className="text-main" size={20} />
          Clear filters
        </button>
        <button
          type="button"
          onClick={onViewAll}
          className="bg-grey-green hover:bg-green-hover focus-visible:bg-green-hover active:bg-green-hover inline-flex items-center justify-center rounded-full px-8 py-4 tracking-[-0.01em] text-white transition-colors"
        >
          View all campers
        </button>
      </div>
    </div>
  );
}
