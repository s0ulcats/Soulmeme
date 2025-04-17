'use client';

import { cn } from '@/utils/tw-merge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Table' },
    { href: '/list', label: 'List' },
  ];

  return (
    <nav className="border-b py-4">
      <div className="flex justify-center">
        <div className="inline-flex bg-muted rounded-full p-1 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-full transition-all',
                pathname === item.href
                  ? 'bg-primary text-white shadow'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
