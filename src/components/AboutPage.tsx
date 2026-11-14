import React from 'react';
import { Lang, TranslationContent } from '../i18n/translations';

interface AboutPageProps {
  lang: Lang;
  t: TranslationContent['aboutPage'];
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, t }) => {
  const isRtl = lang === 'fa';

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F4F1EA]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#24231F]/12 items-end">
          <div className="lg:col-span-8">
            <span className="editorial-label block mb-3">{t.label}</span>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-[#24231F]">
              {t.title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-end">
            <span className="text-xs text-[#6C675F]">{t.foundedStamp}</span>
          </div>
        </div>

        {/* Visual Lead */}
        <div className="mt-10 sm:mt-14 aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#EAE5DB]">
          <img
            src="./images/vand/about-story.jpg"
            alt={
              isRtl
                ? 'داستان دِ وند — پیوند دوستی، طبیعت و آفرینش'
                : 'THE VAND — friendship, nature, and creation'
            }
            className="h-full w-full object-cover object-[center_35%]"
          />
        </div>

        {/* Full Story */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[#24231F]/12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl sm:text-4xl font-light leading-[1.3] text-[#24231F]">
              {t.storyHeading}
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-5">
            {t.storyParagraphs.map((para, i) => (
              <p
                key={i}
                className="text-sm sm:text-[15px] leading-[1.95] text-[#24231F]/82 font-light"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Practical FAQ & Contact */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="editorial-label block mb-3">{t.faqLabel}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-[#24231F]">
              {t.faqTitle}
            </h2>

            <div className="mt-10 pt-8 border-t border-[#24231F]/12 space-y-2.5 text-sm">
              <h3 className="editorial-label mb-3">{t.contactTitle}</h3>
              <p className="text-[#24231F]">{t.contactNote}</p>
              <p className="text-xs text-[#6C675F]">{t.hours}</p>
              <p className="pt-1">
                <a
                  href="https://wa.link/y9n1bk"
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  className="text-sm text-[#24231F] border-b border-[#24231F]/30 hover:border-[#24231F] transition-colors"
                >
                  +98 910 403 0043
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 divide-y divide-[#24231F]/12 border-y border-[#24231F]/12">
            {t.faqs.map((item, idx) => (
              <div key={idx} className="py-6">
                <h3 className="text-base font-medium text-[#24231F]">
                  {item.q}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.85] text-[#6C675F]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
