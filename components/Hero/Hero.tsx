import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      <Image
        src="/camper-hero.png"
        width={1440}
        height={689}
        alt="Yellow vintage campervan parked beside a lake at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="relative flex w-full flex-col items-start gap-10 px-10 pt-49">
        <div className="text-inputs flex flex-col gap-4 font-semibold text-pretty">
          <h1 className="text-5xl leading-8">Campers of your dreams</h1>
          <p className="text-2xl font-medium">
            You can find everything you want in our catalog
          </p>
        </div>
        <Link
          href="/catalog"
          className="bg-grey-green hover:bg-green-hover duration-main ease-main rounded-full px-15 py-4 text-base font-medium tracking-[-0.01em] text-white [transition:background-color_var(--main-transition)]"
        >
          View Now
        </Link>
      </div>
    </section>
  );
}
