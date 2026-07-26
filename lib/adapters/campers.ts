import type { InfiniteData } from '@tanstack/react-query';

import type { CamperListResponseDto } from '@/lib/api/api';

import type { Camper } from '@/types/camper';

import { toCamper } from './camper';

export interface CatalogData {
  campers: Camper[];
  total: number;
  totalPages: number;
}

export function toCatalogData(
  data: InfiniteData<CamperListResponseDto>
): CatalogData {
  const lastPage = data.pages.at(-1);

  return {
    campers: data.pages.flatMap((page) => page.campers.map(toCamper)),

    total: lastPage?.total ?? 0,

    totalPages: lastPage?.totalPages ?? 0,
  };
}
