'use client';

import { useCallback, useState } from 'react';

import type { FilterValues } from '@/types/catalog';

const initialFilters: FilterValues = {
  location: '',
  form: '',
  transmission: '',
  engine: '',
};

export function useCatalogFilters() {
  const [filters, setFilters] = useState<FilterValues>(initialFilters);

  const [appliedFilters, setAppliedFilters] =
    useState<FilterValues>(initialFilters);

  const changeFilter = useCallback(
    (field: keyof FilterValues, value: string) => {
      setFilters((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const search = useCallback(() => {
    setAppliedFilters((prev) => {
      if (
        prev.location === filters.location &&
        prev.form === filters.form &&
        prev.engine === filters.engine &&
        prev.transmission === filters.transmission
      ) {
        return prev;
      }

      return filters;
    });
  }, [filters]);

  const clear = useCallback(() => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
  }, []);

  return {
    filters,
    appliedFilters,
    changeFilter,
    search,
    clear,
  };
}
