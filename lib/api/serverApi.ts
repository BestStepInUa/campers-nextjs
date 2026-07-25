import { nextServer } from './api';

interface CamperListItemDto {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: 'automatic' | 'manual';
  engine: 'diesel' | 'petrol' | 'hybrid' | 'electric';
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

export interface CamperQueryParams {
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
  page?: number;
  perPage?: number;
}

export const fetchServerCampers = (
  params: CamperQueryParams = {}
): Promise<CamperListResponseDto> => {
  return nextServer<CamperListResponseDto>('/campers', {
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
