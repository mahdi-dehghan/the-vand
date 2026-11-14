import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { STYLED_LOOKS } from '../data/looks';
import { Product, PRODUCTS } from '../data/products';
import { formatToman, Lang, TranslationContent } from '../i18n/translations';
import { Reveal } from './Reveal';

interface StyledTogetherProps {
  lang: Lang;
  t: TranslationContent['looks'];
  onSelectProduct: (product: Product) => void;
}

export const StyledTogether: React.FC<StyledTogetherProps> = ({
  lang,
  t,
  onSelectProduct,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isRtl = lang === 'fa';
  const currentLook = STYLED_LOOKS[activeIndex];
  const lookProducts = currentLook.productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  return (
    <section
      id="styled-together"
      className="py-20 sm:py-28 lg:py-36 bg-[#F4F1EA] border-b border-[#24231F]/12"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#24231F]/12 items-end">
            <div className="lg:col-span-7">
              <span className="editorial-label block mb-3">{t.label}</span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-[#24231F]">
                {t.title}
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm text-[#6C675F] leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Look Selector + Piece Breakdown */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between">
            {/* Look Tabs */}
            <div className="flex flex-wrap gap-2 pb-7 border-b border-[#24231F]/12">
              {STYLED_LOOKS.map((look, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={look.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`px-4 py-2 text-xs transition-colors duration-200 border cursor-pointer ${
                      active
                        ? 'bg-[#24231F] text-[#F4F1EA] border-[#24231F]'
                        : 'bg-transparent text-[#24231F]/75 border-[#24231F]/20 hover:border-[#24231F]'
                    }`}
                  >
                    <span data-latin="true" className="font-sans-ui">
                      {look.number}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Look Narrative */}
            <div className="py-7 border-b border-[#24231F]/12">
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#24231F]">
                {currentLook.title[lang]}
              </h3>
              <p className="mt-2.5 text-sm text-[#24231F]/80">
                {currentLook.caption[lang]}
              </p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#6C675F]">
                {currentLook.note[lang]}
              </p>
            </div>

            {/* Individual Pieces Featured in This Look */}
            <div className="pt-7">
              <span className="editorial-label block mb-4">
                {t.piecesInLook}
              </span>
              <div className="divide-y divide-[#24231F]/12 border-y border-[#24231F]/12">
                {lookProducts.map((piece) => {
                  const isPackshot = piece.packshotIndex?.includes(0);
                  return (
                    <button
                      key={piece.id}
                      type="button"
                      onClick={() => onSelectProduct(piece)}
                      className="w-full py-4 flex items-center justify-between gap-4 text-start group hover:bg-[#EAE5DB]/55 px-2 -mx-2 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="h-16 w-12 shrink-0 bg-[#EAE5DB] overflow-hidden">
                          <img
                            src={piece.images[0]}
                            alt={piece.name[lang]}
                            loading="lazy"
                            style={{
                              objectPosition: piece.focalPoint || 'center center',
                            }}
                            className={`h-full w-full object-cover ${
                              isPackshot ? 'mix-blend-multiply p-1 object-contain' : ''
                            }`}
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-sm text-[#24231F] group-hover:text-[#737765] transition-colors truncate">
                            {piece.name[lang]}
                          </span>
                          <span className="block mt-1 text-xs text-[#6C675F]">
                            {formatToman(piece.price, lang)}
                          </span>
                        </div>
                      </div>

                      <span className="shrink-0 inline-flex items-center gap-1.5 text-xs text-[#24231F]/70 group-hover:text-[#24231F] transition-colors">
                        <span className="hidden sm:inline">{t.inspectPiece}</span>
                        {isRtl ? (
                          <ArrowLeft size={14} strokeWidth={1.35} />
                        ) : (
                          <ArrowRight size={14} strokeWidth={1.35} />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Primary Look Photograph */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE5DB]">
              <img
                key={currentLook.id}
                src={currentLook.image}
                alt={currentLook.caption[lang]}
                style={{
                  objectPosition: currentLook.focalPoint || 'center center',
                }}
                className="h-full w-full object-cover animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
