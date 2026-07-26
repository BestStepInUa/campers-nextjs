import DetailPage from '@/components/DetailPage';
import { fetchCamperById } from '@/lib/api/api';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const camper = await fetchCamperById(id);
  return {
    title: camper.name,
    description: camper.description,
    openGraph: {
      type: 'website',
      url: `${process.env['NEXT_OG_APP_URL']}/campers/${id}`,
      title: camper.name,
      description: camper.description,
      siteName: 'TravelTrucks',
      images: [
        {
          url: camper.coverImage,
          width: 512,
          height: 512,
          alt: camper.name,
        },
      ],
    },
  };
}

export default async function CamperPage({ params }: Props) {
  const { id } = await params;

  const camper = await fetchCamperById(id);

  return (
    <main>
      <DetailPage camper={camper} />
    </main>
  );
}
