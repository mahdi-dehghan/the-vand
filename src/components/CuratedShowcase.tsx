import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS, Product } from '../data/products';
import { Lang, TranslationContent } from '../i18n/translations';
import { ProductCard } from './ProductCard';
import { Reveal } from './Reveal';

interface CuratedShowcaseProps {
  lang: Lang;
  t: TranslationContent['showcase'];
  onSelectProduct: (product: Product) => void;
  onViewAll: () => void;
}

export const CuratedShowcase: React.FC<CuratedShowcaseProps> = ({
  lang,
  t,
  onSelectProduct,
  onViewAll,
}) => {
  const isRtl = lang === 'fa';
  const [lead, second, ...rest] = FEATURED_PRODUCTS;

  return (
    <section
      id="curated-showcase"
      className="py-20 sm:py-28 lg:py-32 bg-[#F4F1EA] border-b border-[#24231F]/12"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        {/* Editorial Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#24231F]/12">
            <div>
              <span className="editorial-label block mb-3">{t.label}</span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-[#24231F]">
                {t.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm text-[#6C675F] leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onViewAll}
              className={`inline-flex items-center gap-2.5 self-start md:self-auto border border-[#24231F]/28 px-5 py-3 text-xs text-[#24231F] hover:bg-[#24231F] hover:text-[#F4F1EA] transition-colors duration-200 cursor-pointer ${
                isRtl ? 'text-[13px]' : 'uppercase tracking-[0.16em]'
              }`}
            >
              <span>{t.viewAll}</span>
              {isRtl ? (
                <ArrowLeft size={14} strokeWidth={1.35} />
              ) : (
                <ArrowRight size={14} strokeWidth={1.35} />
              )}
            </button>
          </div>
        </Reveal>

        {/* First Row: Asymmetric Lead Pairing (7 / 5) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {lead && (
            <Reveal className="lg:col-span-7">
              <ProductCard
                product={lead}
                lang={lang}
                onSelect={onSelectProduct}
                aspectClass="aspect-[4/5]"
                soldOutLabel={t.soldOut}
                limitedLabel={t.limited}
              />
            </Reveal>
          )}

          {second && (
            <Reveal delayMs={100} className="lg:col-span-5 lg:pt-16">
              <ProductCard
                product={second}
                lang={lang}
                onSelect={onSelectProduct}
                aspectClass="aspect-[3/4]"
                soldOutLabel={t.soldOut}
                limitedLabel={t.limited}
              />
            </Reveal>
          )}
        </div>

        {/* Second Row: Considered Quartet with Varied Vertical Rhythm */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12">
          {rest.map((product, index) => (
            <Reveal
              key={product.id}
              delayMs={index * 70}
              className={index % 2 === 1 ? 'lg:pt-8' : ''}
            >
              <ProductCard
                product={product}
                lang={lang}
                onSelect={onSelectProduct}
                aspectClass="aspect-[3/4]"
                soldOutLabel={t.soldOut}
                limitedLabel={t.limited}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
