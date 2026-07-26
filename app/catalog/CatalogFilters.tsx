'use client';

import { useState } from 'react';
import { Map, X } from 'lucide-react';
import { fetchServerFilters } from '@/lib/api/serverApi';

export const revalidate = 60 * 60 * 24; // 1 day

export type Filters = {
  location: string;
  form: string;
  engine: string;
  transmission: string;
};

export const emptyFilters: Filters = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
};

const filters = await fetchServerFilters();
const forms = filters.forms;
const engines = filters.engines;
const transmissions = filters.transmissions;

const formOptions = forms.map((form) => ({
  value: form,
  label: form
    .split('_')
    .map((word) => word[0]!.toUpperCase() + word.slice(1))
    .join(' '),
}));

const engineOptions = engines.map((engine) => ({
  value: engine,
  label: engine[0]!.toUpperCase() + engine.slice(1),
}));

const transmissionOptions = transmissions.map((transmission) => ({
  value: transmission,
  label: transmission[0]!.toUpperCase() + transmission.slice(1),
}));

type RadioGroupProps = {
  title: string;
  name: string;
  options: { value: string; label: string }[];
  selected: string;
  onSelect: (value: string) => void;
};

function RadioGroup({
  title,
  name,
  options,
  selected,
  onSelect,
}: RadioGroupProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-muted-foreground mb-3 text-sm">{title}</legend>
      {options.map(({ value, label }) => {
        const isSelected = selected === value;
        return (
          <label
            key={value}
            className="text-foreground flex cursor-pointer items-center gap-3 text-base"
          >
            <input
              type="radio"
              name={name}
              value={value}
              checked={isSelected}
              onChange={() => onSelect(value)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                isSelected ? 'border-foreground' : 'border-border'
              }`}
            >
              {isSelected ? (
                <span className="size-2.5 rounded-full bg-red-500" />
              ) : null}
            </span>
            {label}
          </label>
        );
      })}
    </fieldset>
  );
}

export function CatalogFilters({
  filters,
  onApply,
  onReset,
}: {
  filters: Filters;
  onApply: (filters: Filters) => void;
  onReset: () => void;
}) {
  const [draft, setDraft] = useState<Filters>(filters);

  function update(patch: Partial<Filters>) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  return (
    <form
      className="bg-muted flex w-full flex-col gap-8 rounded-2xl p-6 lg:w-90 lg:shrink-0"
      onSubmit={(event) => {
        event.preventDefault();
        onApply(draft);
      }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="text-muted-foreground text-sm">
          Location
        </label>
        <div className="relative">
          <Map
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City"
            value={draft.location}
            onChange={(event) => update({ location: event.target.value })}
            className="border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-cta h-14 w-full rounded-xl border pr-4 pl-12 text-base focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-foreground text-xl font-bold">Filters</h2>

        <RadioGroup
          title="Camper form"
          name="form"
          options={formOptions}
          selected={draft.form}
          onSelect={(value) => update({ form: value })}
        />
        <RadioGroup
          title="Engine"
          name="engine"
          options={engineOptions}
          selected={draft.engine}
          onSelect={(value) => update({ engine: value })}
        />
        <RadioGroup
          title="Transmission"
          name="transmission"
          options={transmissionOptions}
          selected={draft.transmission}
          onSelect={(value) => update({ transmission: value })}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="bg-cta hover:bg-cta-hover h-14 rounded-full text-base font-medium text-white"
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => {
            setDraft(emptyFilters);
            onReset();
          }}
          className="border-border bg-card text-foreground h-14 gap-2 rounded-full text-base font-medium"
        >
          <X className="size-4" aria-hidden="true" />
          Clear filters
        </button>
      </div>
    </form>
  );
}
