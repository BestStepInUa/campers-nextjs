'use client';

import { useState } from 'react';
import { type FilterValues, initialFilters } from '@/types/catalog';

export function useCatalogFilters() {
  const [draftFilters, setDraftFilters] =
    useState<FilterValues>(initialFilters);

  const [appliedFilters, setAppliedFilters] =
    useState<FilterValues>(initialFilters);

  const change = <K extends keyof FilterValues>(
    field: K,
    value: FilterValues[K]
  ) => {
    setDraftFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const apply = () => {
    setAppliedFilters(draftFilters);
  };

  const clear = () => {
    setDraftFilters(initialFilters);
    setAppliedFilters(initialFilters);
  };

  return {
    draftFilters,
    appliedFilters,
    change,
    apply,
    clear,
  };
}
