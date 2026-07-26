import Image from 'next/image';
import Link from 'next/link';
import { Map, Star, CarFront, SlidersVertical, Fuel } from 'lucide-react';

import { Camper } from '@/types/camper';

interface CamperProps {
  camper: Camper;
}

export default function CatalogCard({ camper }: CamperProps) {
  const imgSrc = camper.coverImage || '/catalog/camper-default.png';

  const formatText = (text: string) => {
    if (!text) return '';
    const replaced = text.replace('_', ' ');
    return replaced.charAt(0).toUpperCase() + replaced.slice(1);
  };

  return (
    <li className="bg-inputs flex max-w-222 gap-6 rounded-2xl p-6 pr-24.25">
      <Image
        src={imgSrc}
        alt={camper.name}
        width={219}
        height={240}
        className="h-60 max-h-60 w-54.75 rounded-2xl object-cover"
      />

      <div>
        <div className="mb-2 flex justify-between gap-19">
          <h3 className="text-main text-2xl leading-[1.33] font-semibold">
            {camper.name}
          </h3>
          <span className="text-main text-2xl leading-[1.33] font-semibold">
            <span>€</span>
            {Math.trunc(camper.price)}
          </span>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="text-main flex items-center gap-1">
            <Star className="text-rating" size={16} />
            <span>{camper.rating}</span>
          </div>

          <div className="text-main flex items-center gap-1">
            <Map size={16} />
            <span>{camper.location}</span>
          </div>
        </div>

        <p className="mb-6 w-123.5 truncate">{camper.description}</p>

        <ul className="mb-6! flex gap-2">
          <li className="text-main bg-badges flex items-center gap-2 rounded-full px-4.5 py-3 font-medium mix-blend-multiply">
            <Fuel size={20} />
            <span>{formatText(camper.engine)}</span>
          </li>
          <li className="text-main bg-badges flex items-center gap-2 rounded-full px-4.5 py-3 font-medium mix-blend-multiply">
            <SlidersVertical size={20} />
            <span>{formatText(camper.transmission)}</span>
          </li>
          <li className="text-main bg-badges flex items-center gap-2 rounded-full px-4.5 py-3 font-medium mix-blend-multiply">
            <CarFront size={20} />
            <span>{formatText(camper.form)}</span>
          </li>
        </ul>

        <Link
          href={`/catalog/${camper.id}`}
          className="bg-grey-green hover:bg-green-hover focus-visible:bg-green-hover active:bg-green-hover inline-flex items-center justify-center rounded-full px-[43.5px] py-4 font-medium tracking-[-0.01em] text-white transition-colors"
          aria-label="Show more"
        >
          Show more
        </Link>
      </div>
    </li>
  );
}
