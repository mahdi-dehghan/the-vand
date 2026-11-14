import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Lang, TranslationContent } from '../i18n/translations';
import { Reveal } from './Reveal';

interface CollectionIntroProps {
  lang: Lang;
  t: TranslationContent['intro'];
  onBrowseAll: () => void;
}

export const CollectionIntro: React.FC<CollectionIntroProps> = ({
  lang,
  t,
  onBrowseAll,
}) => {
  const isRtl = lang === 'fa';

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F4F1EA] border-b border-[#24231F]/12">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Large Tactile Fabric Detail Image */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE5DB]">
                <img
                  src="./images/vand/prod-4589-1.webp"
                  alt={
                    isRtl
                      ? 'پیراهن‌های لینن تاشده دِ وند با لیبل Promise to Slow'
                      : 'Folded THE VAND linen shirts displaying woven Promise to Slow label'
                  }
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 text-[11px] text-[#6C675F]">{t.detailTag}</p>
            </Reveal>
          </div>

          {/* Offset Editorial Prose + Contrasting Scale Portrait */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-between">
            <Reveal delayMs={100}>
              <span className="editorial-label block mb-4">{t.label}</span>
              <h2 className="font-display text-3xl sm:text-5xl font-light leading-[1.16] text-[#24231F]">
                {t.title}
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-[1.9] text-[#24231F]/80 font-light">
                {t.lead}
              </p>
              <p className="mt-4 text-sm leading-[1.85] text-[#6C675F]">
                {t.body}
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onBrowseAll}
                  className={`inline-flex items-center gap-2.5 pb-1.5 border-b border-[#24231F] text-xs text-[#24231F] hover:text-[#737765] hover:border-[#737765] transition-colors cursor-pointer ${
                    isRtl ? 'text-[13px]' : 'uppercase tracking-[0.16em]'
                  }`}
                >
                  <span>{t.linkLabel}</span>
                  {isRtl ? (
                    <ArrowLeft size={14} strokeWidth={1.4} />
                  ) : (
                    <ArrowRight size={14} strokeWidth={1.4} />
                  )}
                </button>
              </div>
            </Reveal>

            <Reveal delayMs={180} className="mt-12 lg:mt-16">
              <div className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-7 sm:col-span-6 aspect-[4/5] overflow-hidden bg-[#EAE5DB]">
                  <img
                    src="./images/vand/studio-24.jpg"
                    alt={
                      isRtl
                        ? 'پرتره استودیویی با پیراهن آبی دِ وند'
                        : 'Editorial portrait in THE VAND navy shirt'
                    }
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="col-span-5 sm:col-span-6 pb-2 border-t border-[#24231F]/15 pt-3">
                  <span className="text-[11px] leading-relaxed text-[#6C675F] block">
                    {isRtl
                      ? '۱۰۰٪ لینن · تن‌خور طبیعی'
                      : '100% Linen · Breathable Weave'}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
