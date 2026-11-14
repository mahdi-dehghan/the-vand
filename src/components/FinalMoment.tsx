import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Lang, TranslationContent } from '../i18n/translations';
import { Reveal } from './Reveal';

interface FinalMomentProps {
  lang: Lang;
  t: TranslationContent['finalMoment'];
  onEnterCollection: () => void;
}

export const FinalMoment: React.FC<FinalMomentProps> = ({
  lang,
  t,
  onEnterCollection,
}) => {
  const isRtl = lang === 'fa';

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F4F1EA]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <Reveal className="lg:col-span-4">
            <div className="aspect-[3/4] w-full overflow-hidden bg-[#EAE5DB]">
              <img
                src="./images/vand/apadana-5.jpg"
                alt={
                  isRtl
                    ? 'ترنچ‌کت و بافتنی یقه اسکی دِ وند در فضای باز'
                    : 'THE VAND outerwear and wool turtleneck in quiet natural motion'
                }
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delayMs={100} className="lg:col-span-4 text-center px-2 sm:px-6 py-4">
            <span
              data-latin="true"
              className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#737765] block mb-4"
            >
              {t.label}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light leading-[1.3] text-[#24231F]">
              {t.headline}
            </h2>
            <p className="mt-4 text-sm text-[#6C675F] leading-relaxed">
              {t.subline}
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={onEnterCollection}
                className={`inline-flex items-center gap-3 bg-[#24231F] text-[#F4F1EA] px-7 py-3.5 text-xs hover:bg-[#737765] transition-colors duration-200 cursor-pointer ${
                  isRtl ? 'text-[13px]' : 'uppercase tracking-[0.16em]'
                }`}
              >
                <span>{t.cta}</span>
                {isRtl ? (
                  <ArrowLeft size={14} strokeWidth={1.35} />
                ) : (
                  <ArrowRight size={14} strokeWidth={1.35} />
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delayMs={160} className="lg:col-span-4">
            <div className="aspect-[3/4] w-full overflow-hidden bg-[#EAE5DB]">
              <img
                src="./images/vand/damavand-31.jpg"
                alt={
                  isRtl
                    ? 'تی‌شرت پنبه‌ای دِ وند در طبیعت دماوند'
                    : 'THE VAND 100% cotton basic t-shirt photographed in Damavand'
                }
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
