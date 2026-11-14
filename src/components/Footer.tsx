import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { CategorySlug } from '../data/products';
import { TranslationContent } from '../i18n/translations';
import { BrandWordmark } from './BrandWordmark';
import { RouteView } from './Header';

interface FooterProps {
  t: TranslationContent;
  onNavigate: (next: RouteView, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const categories: CategorySlug[] = [
    'all',
    'shirts',
    'tops',
    'outerwear',
    'bags',
    'socks',
  ];

  return (
    <footer className="bg-[#EAE5DB] text-[#24231F] border-t border-[#24231F]/12 pt-16 sm:pt-20 pb-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        {/* Top Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#24231F]/12">
          {/* Brand Signature & Prototype Newsletter */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'home' })}
              className="text-[#24231F] cursor-pointer"
              aria-label="THE VAND"
            >
              <BrandWordmark className="h-[17px] w-auto" />
            </button>
            <p className="mt-3 text-xs text-[#6C675F]">{t.footer.tagline}</p>

            <div className="mt-8 max-w-sm">
              <p className="text-sm font-medium text-[#24231F]">
                {t.footer.newsletterTitle}
              </p>
              <p className="mt-1.5 text-xs text-[#6C675F] leading-relaxed">
                {t.footer.newsletterNote}
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.emailPlaceholder}
                    aria-label={t.footer.emailPlaceholder}
                    className="flex-1 min-w-0 bg-[#F4F1EA] border border-[#24231F]/20 px-3.5 py-2.5 text-xs text-[#24231F] placeholder:text-[#6C675F] focus:border-[#24231F] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#24231F] text-[#F4F1EA] px-5 py-2.5 text-xs hover:bg-[#737765] transition-colors duration-200 cursor-pointer"
                  >
                    {t.footer.subscribeBtn}
                  </button>
                </form>
              ) : (
                <p className="mt-4 text-xs text-[#737765]">
                  {t.footer.subscribedMsg}
                </p>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="editorial-label mb-4">{t.footer.navTitle}</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#24231F]/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'collection', category: 'all' })}
                  className="hover:text-[#737765] transition-colors cursor-pointer"
                >
                  {t.nav.collection}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'home' }, 'styled-together')}
                  className="hover:text-[#737765] transition-colors cursor-pointer"
                >
                  {t.nav.looks}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'home' }, 'brand-story')}
                  className="hover:text-[#737765] transition-colors cursor-pointer"
                >
                  {t.nav.story}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'about' })}
                  className="hover:text-[#737765] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h3 className="editorial-label mb-4">{t.footer.categoriesTitle}</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 text-sm text-[#24231F]/80">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'collection', category: cat })}
                    className="hover:text-[#737765] transition-colors cursor-pointer"
                  >
                    {t.nav.categories[cat]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect (Real Social & WhatsApp Links from thevand.co) */}
          <div className="lg:col-span-2">
            <h3 className="editorial-label mb-4">{t.footer.connectTitle}</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#24231F]/80">
              <li>
                <a
                  href="https://www.instagram.com/thevand.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#737765] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/thevand_co"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#737765] transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.link/y9n1bk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#737765] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-xs text-[#6C675F]" dir="ltr">
                +98 910 403 0043
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Prototype Row */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6C675F]">
          <div className="flex flex-wrap items-center gap-3">
            <span>{t.footer.rights}</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.prototypeDisclaimer}</span>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-[#24231F]/80 hover:text-[#737765] transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={13} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
};
