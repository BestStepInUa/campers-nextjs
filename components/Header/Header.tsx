'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-border bg-secondary w-full border-b">
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between px-6 md:px-16">
        <Link href="/" className="text-foreground text-xl tracking-tight">
          <span className="font-normal">Travel</span>
          <span className="font-bold">Trucks</span>
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
                className={
                  isActive
                    ? 'text-cta hover:text-cta-hover text-sm transition-colors'
                    : 'text-foreground hover:text-cta text-sm transition-colors'
                }
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
