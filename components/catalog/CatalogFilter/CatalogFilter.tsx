'use client';

import { MapPin, X } from 'lucide-react';

import type { CatalogFilterProps } from '@/types/catalog';

function formatLabel(value: string) {
  return value
    .split('_')
    .map((word) => word[0]!.toUpperCase() + word.slice(1))
    .join(' ');
}

export default function CatalogFilter({
  filters,
  filterOptions,
  isLoading,
  onChange,
  onSearch,
  onClear,
}: CatalogFilterProps) {
  if (isLoading) {
    return (
      <aside className="bg-inputs scrollbar-hidden sticky top-12 max-h-[calc(100vh-48px)] self-start overflow-y-auto rounded-[20px] px-6">
        Loading filters...
      </aside>
    );
  }

  return (
    <aside className="bg-inputs scrollbar-hidden sticky top-12 max-h-[calc(100vh-48px)] self-start overflow-y-auto rounded-[20px] px-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <div className="text-gray mb-10 flex flex-col gap-2">
          <label htmlFor="location">Location</label>

          <div className="group relative">
            <input
              id="location"
              type="text"
              value={filters.location}
              placeholder="City"
              onChange={(e) => onChange('location', e.target.value)}
              className="text-main w-full rounded-xl border-0 p-4 pr-5 pl-12 outline-none focus:outline-none focus:placeholder:text-transparent"
            />

            <MapPin
              className="text-gray group-focus-within:text-main absolute top-4 left-5 transition-colors"
              size={20}
            />
          </div>
        </div>

        <h3 className="text-main mb-6 text-xl leading-6 font-semibold">
          Filters
        </h3>

        <div className="mb-6 last:mb-12">
          <p className="text-gray mb-2">Camper form</p>

          {filterOptions?.forms.map((form) => (
            <label
              key={form}
              className="text-main mb-2 flex cursor-pointer items-center gap-2 select-none"
            >
              <input
                type="radio"
                name="form"
                checked={filters.form === form}
                onChange={() => onChange('form', form)}
                className="clip-hidden sr-only absolute"
              />

              <span className="border-text after:bg-text flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform after:h-3.5 after:w-3.5 after:scale-0 after:rounded-full after:transition-transform after:content-[''] peer-checked:after:scale-100" />

              {formatLabel(form)}
            </label>
          ))}
        </div>

        <div className="mb-6 last:mb-12">
          <p className="text-gray mb-2">Engine</p>

          {filterOptions?.engines.map((engine) => (
            <label
              key={engine}
              className="text-main mb-2 flex cursor-pointer items-center gap-2 select-none"
            >
              <input
                type="radio"
                name="engine"
                checked={filters.engine === engine}
                onChange={() => onChange('engine', engine)}
                className="clip-hidden sr-only absolute"
              />

              <span className="border-text after:bg-text flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform after:h-3.5 after:w-3.5 after:scale-0 after:rounded-full after:transition-transform after:content-[''] peer-checked:after:scale-100" />

              {formatLabel(engine)}
            </label>
          ))}
        </div>

        <div className="mb-6 last:mb-12">
          <p className="text-gray mb-2">Transmission</p>

          {filterOptions?.transmissions.map((transmission) => (
            <label
              key={transmission}
              className="text-main mb-2 flex cursor-pointer items-center gap-2 select-none"
            >
              <input
                type="radio"
                name="transmission"
                checked={filters.transmission === transmission}
                onChange={() => onChange('transmission', transmission)}
                className="clip-hidden sr-only absolute"
              />

              <span className="border-text after:bg-text flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform after:h-3.5 after:w-3.5 after:scale-0 after:rounded-full after:transition-transform after:content-[''] peer-checked:after:scale-100" />

              {formatLabel(transmission)}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="bg-grey-green hover:bg-green-hover focus:bg-green-hover active:bg-green-hover mb-4 flex w-full justify-center rounded-full px-0 py-4 tracking-[-0.01em] text-white transition-colors"
        >
          Search
        </button>

        <button
          type="button"
          onClick={onClear}
          className="border-gray-light hover:bg-green-hover focus:bg-green-hover active:bg-green-hover flex w-full items-center justify-center gap-1 rounded-full border bg-white py-4 transition-colors"
        >
          <X className="text-main" size={20} />
          Clear filters
        </button>
      </form>
    </aside>
  );
}
