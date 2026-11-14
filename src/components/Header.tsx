import React, { useEffect, useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { CategorySlug } from '../data/products';
import { Lang, TranslationContent } from '../i18n/translations';
import { BrandWordmark } from './BrandWordmark';

export type RouteView =
  | { page: 'home' }
  | { page: 'collection'; category: CategorySlug }
  | { page: 'product'; productId: string }
  | { page: 'about' };

interface HeaderProps {
  lang: Lang;
  t: TranslationContent;
  route: RouteView;
  bagCount: number;
  onNavigate: (next: RouteView, sectionId?: string) => void;
  onToggleLang: () => void;
  onOpenBag: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  t,
  route,
  bagCount,
  onNavigate,
  onToggleLang,
  onOpenBag,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const solidHeader = scrolled || route.page !== 'home' || mobileOpen;

  const navItems: {
    key: string;
    label: string;
    active: boolean;
    action: () => void;
  }[] = [
    {
      key: 'collection',
      label: t.nav.collection,
      active: route.page === 'collection' || route.page === 'product',
      action: () => onNavigate({ page: 'collection', category: 'all' }),
    },
    {
      key: 'looks',
      label: t.nav.looks,
      active: false,
      action: () => onNavigate({ page: 'home' }, 'styled-together'),
    },
    {
      key: 'story',
      label: t.nav.story,
      active: false,
      action: () => onNavigate({ page: 'home' }, 'brand-story'),
    },
    {
      key: 'about',
      label: t.nav.about,
      active: route.page === 'about',
      action: () => onNavigate({ page: 'about' }),
    },
  ];

  const categoryQuickLinks: CategorySlug[] = [
    'all',
    'shirts',
    'tops',
    'outerwear',
    'bags',
    'socks',
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        solidHeader
          ? 'bg-[#F4F1EA]/94 backdrop-blur-md border-b border-[#24231F]/12'
          : 'bg-[#F4F1EA]/70 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 h-16 sm:h-[74px] flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <button
          type="button"
          onClick={() => {
            setMobileOpen(false);
            onNavigate({ page: 'home' });
          }}
          className="text-[#24231F] hover:opacity-75 transition-opacity cursor-pointer py-1"
          aria-label="THE VAND Home"
        >
          <BrandWordmark className="h-[15px] sm:h-[17px] w-auto" />
        </button>

        {/* Quiet Desktop Navigation */}
        <nav
          aria-label={lang === 'fa' ? 'ناوبری اصلی' : 'Primary navigation'}
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={item.action}
              className={`relative py-1.5 text-xs transition-colors duration-200 cursor-pointer ${
                lang === 'en' ? 'uppercase tracking-[0.16em]' : 'text-[13px]'
              } ${
                item.active
                  ? 'text-[#24231F] font-medium'
                  : 'text-[#24231F]/72 hover:text-[#24231F]'
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`absolute bottom-0 inset-x-0 h-px bg-[#24231F] transition-transform duration-200 origin-center ${
                  item.active ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Controls: Language Toggle, Bag, Mobile Trigger */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={onToggleLang}
            className="border border-[#24231F]/22 px-3 py-1.5 text-[11px] sm:text-xs text-[#24231F] hover:border-[#24231F] hover:bg-[#EAE5DB] transition-colors duration-200 cursor-pointer"
            aria-label={
              lang === 'fa' ? 'Switch language to English' : 'تغییر زبان به فارسی'
            }
          >
            {t.nav.langToggle}
          </button>

          <button
            type="button"
            onClick={onOpenBag}
            className="inline-flex items-center gap-2 py-1.5 text-xs text-[#24231F] hover:text-[#737765] transition-colors duration-200 cursor-pointer"
            aria-label={
              lang === 'fa'
                ? `${t.nav.bag} (${bagCount})`
                : `${t.nav.bag} (${bagCount})`
            }
          >
            <ShoppingBag size={16} strokeWidth={1.35} />
            <span
              className={`hidden sm:inline ${
                lang === 'en' ? 'uppercase tracking-[0.14em]' : 'text-[13px]'
              }`}
            >
              {t.nav.bag}
            </span>
            <span className="inline-flex min-w-[20px] h-5 items-center justify-center border border-[#24231F]/22 px-1.5 text-[11px] font-medium">
              {lang === 'fa' ? bagCount.toLocaleString('fa-IR') : bagCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-1.5 text-[#24231F] cursor-pointer"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.35} />
            ) : (
              <Menu size={20} strokeWidth={1.35} />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#24231F]/12 bg-[#F4F1EA] px-5 py-7 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  item.action();
                }}
                className="flex items-center justify-between py-3.5 border-b border-[#24231F]/10 text-base text-[#24231F] text-start cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#6C675F]" aria-hidden="true">
                  {lang === 'fa' ? '←' : '→'}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-6">
            <p className="editorial-label mb-3">{t.footer.categoriesTitle}</p>
            <div className="flex flex-wrap gap-2">
              {categoryQuickLinks.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onNavigate({ page: 'collection', category: cat });
                  }}
                  className="border border-[#24231F]/18 px-3 py-1.5 text-xs text-[#24231F] hover:bg-[#EAE5DB] transition-colors cursor-pointer"
                >
                  {t.nav.categories[cat]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
