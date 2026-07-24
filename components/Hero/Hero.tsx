import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] w-full overflow-hidden">
      <Image
        src="/camper-hero.png"
        width={1440}
        height={689}
        loading="eager"
        alt="Yellow vintage campervan parked beside a lake at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="xs:pt-8 xs:px-6 xs:gap-4 relative flex w-full flex-col items-start gap-2 px-5 pt-2 sm:gap-6 sm:px-7 sm:pt-10 md:gap-7 md:px-8 md:pt-20 lg:gap-8 lg:px-9 lg:pt-30 xl:gap-10 xl:px-10 xl:pt-49">
        <div className="text-inputs flex flex-col gap-0 font-semibold text-pretty sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4">
          <h1 className="text-xl leading-8 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Campers of your dreams
          </h1>
          <p className="text-xs font-medium sm:text-sm md:text-base lg:text-xl xl:text-2xl">
            You can find everything you want in our catalog
          </p>
        </div>
        <Link
          href="/catalog"
          className="bg-grey-green hover:bg-green-hover duration-main ease-main lx:py-4 rounded-full px-4 py-2 text-sm font-medium tracking-[-0.01em] text-white [transition:background-color_var(--main-transition)] md:px-10 md:py-3 md:text-base xl:px-15"
        >
          View Now
        </Link>
      </div>
    </section>
  );
}
