import type { FilterValues } from '@/types/catalog';

export const QUERY_KEYS = {
  campers: {
    all: ['campers'] as const,

    list: (filters: FilterValues) =>
      [...QUERY_KEYS.campers.all, filters] as const,

    filters: ['campers', 'filters'] as const,
  },
} as const;
