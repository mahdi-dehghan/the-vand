import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Lang, TranslationContent } from '../i18n/translations';
import { Reveal } from './Reveal';

interface BrandStoryProps {
  lang: Lang;
  t: TranslationContent['story'];
  onReadMore: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({
  lang,
  t,
  onReadMore,
}) => {
  const isRtl = lang === 'fa';

  return (
    <section
      id="brand-story"
      className="py-20 sm:py-28 lg:py-36 bg-[#EAE5DB]/70 border-b border-[#24231F]/12"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        {/* Wide Editorial Group Photograph */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
            <div className="lg:col-span-8">
              <span className="editorial-label block mb-4">{t.label}</span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-light leading-[1.14] text-[#24231F]">
                {t.title}
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
              {t.values.map((val) => (
                <span
                  key={val}
                  className="border border-[#24231F]/18 bg-[#F4F1EA]/70 px-3 py-1 text-[11px] text-[#24231F]/80"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-[#EAE5DB]">
            <img
              src="./images/vand/about-story.jpg"
              alt={
                isRtl
                  ? 'چهار دوست با تی‌شرت‌های ساده دِ وند در نور روز'
                  : 'Four friends wearing THE VAND everyday cotton tees under soft sunlight'
              }
              loading="lazy"
              className="h-full w-full object-cover object-[center_35%]"
            />
          </div>
        </Reveal>

        {/* Offset Quote + Narrative + Intimate Home Portrait */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-[34px] italic font-light leading-[1.4] text-[#24231F] border-s-2 border-[#A96852] ps-5 sm:ps-7">
              “{t.quote}”
            </blockquote>

            <div className="mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden bg-[#EAE5DB]">
              <img
                src="./images/vand/prod-2224-1.jpg"
                alt={
                  isRtl
                    ? 'پولوشرت سبز تیره دِ وند در فضای صمیمی خانه'
                    : 'THE VAND Deep Forest Green poloshirt in an intimate domestic room'
                }
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delayMs={120} className="lg:col-span-6 lg:col-start-7 flex flex-col gap-5 pt-2">
            {t.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-[15px] leading-[1.95] text-[#24231F]/80 font-light"
              >
                {p}
              </p>
            ))}

            <div className="pt-6 border-t border-[#24231F]/14 mt-4">
              <button
                type="button"
                onClick={onReadMore}
                className={`inline-flex items-center gap-2.5 text-xs text-[#24231F] hover:text-[#737765] transition-colors cursor-pointer ${
                  isRtl ? 'text-[13px]' : 'uppercase tracking-[0.16em]'
                }`}
              >
                <span>{t.readMore}</span>
                {isRtl ? (
                  <ArrowLeft size={14} strokeWidth={1.35} />
                ) : (
                  <ArrowRight size={14} strokeWidth={1.35} />
                )}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
