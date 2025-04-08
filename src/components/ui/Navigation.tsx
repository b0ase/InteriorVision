'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Interior Vision</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === '/portfolio' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/services" 
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === '/services' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === '/contact' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 