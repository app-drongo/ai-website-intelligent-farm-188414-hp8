'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Leaf, Cpu } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'SmartFarm AI',
  brandIcon: 'leaf',
  navItems: [
    { label: 'Hero', href: '#hero' },
    { label: 'Features', href: '#features' },
  ],
  ctaText: 'Get Started',
  ctaHref: '/contact',
  mobileMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
    setIsOpen(false);
  };

  const renderIcon = () => {
    if (config.brandIcon === 'cpu') {
      return <Cpu className="h-8 w-8" />;
    }
    return <Leaf className="h-8 w-8" />;
  };

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="text-primary">{renderIcon()}</div>
            <span className="text-xl font-bold text-foreground">
              <span data-editable="brandName">{config.brandName}</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {config.navItems.map((item, idx) => (
                <li key={idx} role="none">
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    data-editable-href={`navItems[${idx}].href`}
                    data-href={item.href}
                    role="menuitem"
                  >
                    <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                  </Button>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground hover:bg-accent"
                  aria-label={config.mobileMenuLabel}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card text-card-foreground w-80">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="text-primary">{renderIcon()}</div>
                    <span className="text-xl font-bold">
                      <span data-editable="brandName">{config.brandName}</span>
                    </span>
                  </div>
                </div>

                <nav
                  className="flex flex-col space-y-4"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
                  {config.navItems.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      onClick={() => handleNavClick(item.href)}
                      className="justify-start text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      data-editable-href={`navItems[${idx}].href`}
                      data-href={item.href}
                    >
                      <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                    </Button>
                  ))}

                  <div className="pt-4 border-t border-border">
                    <Button
                      onClick={handleCtaClick}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                    >
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
}
