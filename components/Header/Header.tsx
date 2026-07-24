'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-border bg-inputs border-badges w-full border-b px-7">
      <div className="mx-auto flex h-10 w-full max-w-360 items-center justify-start gap-16 xs:gap-30 sm:gap-50 md:gap-60 lg:gap-70 xl:gap-112.5 sm:h-12 md:h-14 lg:h-16 xl:h-18">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={95.2}
            height={11.2}
            alt="TravelTrucks Logo"
            className="min-w-[95.2px] min-h-[11.2px] sm:h-[12.8px] sm:w-[108.8px] md:h-[14.4px] md:w-[122.4px] lg:h-4 lg:w-34"
          />
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'text-center text-sm md:text-base font-medium',
                  isActive
                    ? 'text-grey-green hover:text-main [transition:color_var(--main-transition)]'
                    : 'text-main hover:text-grey-green [transition:color_var(--main-transition)]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
