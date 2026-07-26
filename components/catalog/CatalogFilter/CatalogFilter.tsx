'use client';

import { MapPin, X } from 'lucide-react';

import type { CatalogFilterProps } from '@/types/catalog';

import css from './CatalogFilter.module.css';

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
    return <aside className={css.sidebar}>Loading filters...</aside>;
  }

  return (
    <aside className={css.sidebar}>
      <form
        className={css.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <div className={css.field}>
          <label htmlFor="location" className={css.label}>
            Location
          </label>

          <div className={css.inputWrapper}>
            <input
              id="location"
              type="text"
              value={filters.location}
              placeholder="City"
              onChange={(e) => onChange('location', e.target.value)}
              className={css.input}
            />

            <MapPin className={css.mapIcon} size={20} />
          </div>
        </div>

        <h3 className={css.title}>Filters</h3>

        <div className={css.group}>
          <p className={css.groupTitle}>Camper form</p>

          {filterOptions?.forms.map((form) => (
            <label key={form} className={css.radioLabel}>
              <input
                type="radio"
                name="form"
                checked={filters.form === form}
                onChange={() => onChange('form', form)}
                className={css.radioInput}
              />

              <span className={css.customRadio} />

              {formatLabel(form)}
            </label>
          ))}
        </div>

        <div className={css.group}>
          <p className={css.groupTitle}>Engine</p>

          {filterOptions?.engines.map((engine) => (
            <label key={engine} className={css.radioLabel}>
              <input
                type="radio"
                name="engine"
                checked={filters.engine === engine}
                onChange={() => onChange('engine', engine)}
                className={css.radioInput}
              />

              <span className={css.customRadio} />

              {formatLabel(engine)}
            </label>
          ))}
        </div>

        <div className={css.group}>
          <p className={css.groupTitle}>Transmission</p>

          {filterOptions?.transmissions.map((transmission) => (
            <label key={transmission} className={css.radioLabel}>
              <input
                type="radio"
                name="transmission"
                checked={filters.transmission === transmission}
                onChange={() => onChange('transmission', transmission)}
                className={css.radioInput}
              />

              <span className={css.customRadio} />

              {formatLabel(transmission)}
            </label>
          ))}
        </div>

        <button type="submit" className={css.searchButton}>
          Search
        </button>

        <button type="button" onClick={onClear} className={css.clearButton}>
          <X className={css.closeIcon} size={20} />
          Clear filters
        </button>
      </form>
    </aside>
  );
}
