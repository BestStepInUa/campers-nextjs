import { createApi } from './createApi';

const BACKEND_URL = `${process.env['NEXT_BACKEND_API_URL']}/api`;
export const api = createApi(BACKEND_URL);

type formType = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
type transmissionType = 'automatic' | 'manual';
type engineType = 'diesel' | 'petrol' | 'hybrid' | 'electric';

export interface CamperListItemDto {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: formType;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: transmissionType;
  engine: engineType;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
}

export interface CamperListResponseDto {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItemDto[];
}

interface CamperQueryParams {
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
  page?: number;
  perPage?: number;
}

export const fetchCampers = (
  params: CamperQueryParams = {}
): Promise<CamperListResponseDto> => {
  return api<CamperListResponseDto>('/campers', {
    params: {
      page: params.page ?? 1,
      perPage: params.perPage ?? 5,
      location: params.location,
      form: params.form,
      transmission: params.transmission,
      engine: params.engine,
    },
  });
};

export interface FiltersResponseDto {
  forms: formType[];
  transmissions: transmissionType[];
  engines: engineType[];
}

export const fetchFilters = (): Promise<FiltersResponseDto> => {
  return api<FiltersResponseDto>('/campers/filters', {
    next: {
      revalidate: 60 * 60 * 24, // 1 day
    },
  });
};
