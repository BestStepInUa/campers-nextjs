import type { CamperListItemDto, FiltersResponseDto } from '@/lib/api/api';

export interface FilterValues {
  location: string;
  form: string;
  transmission: string;
  engine: string;
}

export const initialFilters: FilterValues = {
  location: '',
  form: '',
  transmission: '',
  engine: '',
};

export interface CatalogFilterProps {
  filters: FilterValues;

  filterOptions?: FiltersResponseDto;

  isLoading: boolean;

  onChange: (field: keyof FilterValues, value: string) => void;

  onSearch: () => void;

  onClear: () => void;
}

export interface CatalogViewProps {
  campers: CamperListItemDto[];

  hasMore: boolean;

  isLoading: boolean;

  isFetching: boolean;

  onLoadMore: () => void;
}
