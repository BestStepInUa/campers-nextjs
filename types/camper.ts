export type CamperForm =
  'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';

export type Transmission = 'automatic' | 'manual';

export type Engine = 'diesel' | 'petrol' | 'hybrid' | 'electric';

export interface Camper {
  id: string;
  name: string;
  price: number;

  rating: number;
  totalReviews: number;

  location: string;
  description: string;

  form: CamperForm;

  transmission: Transmission;
  engine: Engine;

  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  amenities: string[];

  coverImage: string;
}
