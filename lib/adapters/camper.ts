import type { CamperListItemDto } from '@/lib/api/api';

import type { Camper } from '@/types/camper';

export function toCamper(camper: CamperListItemDto): Camper {
  return {
    id: camper.id,

    name: camper.name,

    price: camper.price,

    rating: camper.rating,

    totalReviews: camper.totalReviews,

    location: camper.location,

    description: camper.description,

    form: camper.form,

    transmission: camper.transmission,

    engine: camper.engine,

    length: camper.length,

    width: camper.width,

    height: camper.height,

    tank: camper.tank,

    consumption: camper.consumption,

    amenities: camper.amenities,

    coverImage: camper.coverImage,
  };
}
