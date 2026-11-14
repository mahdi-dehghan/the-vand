import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Lang, TranslationContent } from '../i18n/translations';

interface HeroProps {
  lang: Lang;
  t: TranslationContent;
  onDiscoverCollection: () => void;
  onExploreStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  t,
  onDiscoverCollection,
  onExploreStory,
}) => {
  const isRtl = lang === 'fa';

  return (
    <section className="relative bg-[#F4F1EA] border-b border-[#24231F]/12">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 pt-6 sm:pt-10 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Typographic Opening Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 lg:py-4 order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#737765]" />
                <span
                  data-latin="true"
                  className="font-sans-ui text-[11px] uppercase tracking-[0.2em] text-[#6C675F]"
                >
                  {t.hero.kicker}
                </span>
              </div>

              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[66px] xl:text-[74px] font-light leading-[1.06] text-[#24231F]">
                <span className="block">{t.hero.headlineLine1}</span>
                <span className="block italic text-[#737765] mt-1 sm:mt-2">
                  {t.hero.headlineLine2}
                </span>
              </h1>

              <p className="mt-6 sm:mt-8 max-w-md text-sm sm:text-[15px] leading-[1.85] text-[#24231F]/76 font-light">
                {t.hero.subcopy}
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={onDiscoverCollection}
                  className={`inline-flex items-center gap-3 bg-[#24231F] text-[#F4F1EA] px-7 py-3.5 text-xs transition-colors duration-200 hover:bg-[#737765] cursor-pointer ${
                    isRtl ? 'text-[13px]' : 'uppercase tracking-[0.16em]'
                  }`}
                >
                  <span>{t.hero.ctaPrimary}</span>
                  {isRtl ? (
                    <ArrowLeft size={15} strokeWidth={1.35} />
                  ) : (
                    <ArrowRight size={15} strokeWidth={1.35} />
                  )}
                </button>

                <button
                  type="button"
                  onClick={onExploreStory}
                  className={`py-2 text-xs text-[#24231F]/78 border-b border-[#24231F]/30 hover:text-[#24231F] hover:border-[#24231F] transition-colors cursor-pointer ${
                    isRtl ? 'text-[13px]' : 'uppercase tracking-[0.16em]'
                  }`}
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Quiet Secondary Composition Inset (Desktop / Tablet) */}
            <div className="hidden sm:grid grid-cols-12 gap-5 items-end mt-12 pt-8 border-t border-[#24231F]/12">
              <div className="col-span-5 aspect-[4/5] overflow-hidden bg-[#EAE5DB]">
                <img
                  src="./images/vand/damavand-19.jpg"
                  alt={
                    isRtl
                      ? 'کیف پارچه‌ای کتان دِ وند در طبیعت دماوند'
                      : 'THE VAND water-repellent cotton tote in Damavand meadow'
                  }
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="col-span-7 flex flex-col justify-end pb-1">
                <p className="text-xs leading-relaxed text-[#6C675F]">
                  {t.hero.captionLeft}
                </p>
                <p className="mt-2 text-[11px] text-[#A8A197]">
                  {t.hero.captionRight}
                </p>
              </div>
            </div>
          </div>

          {/* Commanding Primary Editorial Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative h-[56vh] min-h-[380px] sm:h-[68vh] lg:h-[78vh] max-h-[820px] w-full overflow-hidden bg-[#EAE5DB]">
              <img
                src="./images/vand/hero-editorial-1.webp"
                alt={
                  isRtl
                    ? 'پیراهن لینن سفید دِ وند در نور روز'
                    : 'THE VAND white 100% linen shirt in soft natural daylight'
                }
                className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
            {/* Mobile Caption Strip */}
            <div className="sm:hidden mt-3 flex items-center justify-between text-[11px] text-[#6C675F]">
              <span>{t.hero.captionLeft}</span>
              <span>{t.hero.captionRight}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
