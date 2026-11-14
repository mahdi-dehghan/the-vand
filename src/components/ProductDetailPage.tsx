import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { formatToman, Lang, TranslationContent } from '../i18n/translations';
import { ProductCard } from './ProductCard';

interface ProductDetailPageProps {
  product: Product;
  lang: Lang;
  t: TranslationContent;
  onBackToCollection: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToBag: (product: Product, size: string, colorId: string) => void;
  onOpenBag: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  lang,
  t,
  onBackToCollection,
  onSelectProduct,
  onAddToBag,
  onOpenBag,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColorId, setSelectedColorId] = useState(
    product.colors[0]?.id || 'default'
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0] || t.productPage.oneSize
  );
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    setActiveImageIdx(0);
    setSelectedColorId(product.colors[0]?.id || 'default');
    setSelectedSize(product.sizes[0] || t.productPage.oneSize);
    setJustAdded(false);
  }, [product.id, t.productPage.oneSize]);

  const isRtl = lang === 'fa';
  const pp = t.productPage;
  const activeColor =
    product.colors.find((c) => c.id === selectedColorId) || product.colors[0];

  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  const fallbackRelated =
    related.length >= 3
      ? related
      : [
          ...related,
          ...PRODUCTS.filter(
            (p) => p.id !== product.id && p.category !== product.category
          ).slice(0, 3 - related.length),
        ];

  const handleAdd = () => {
    if (!product.inStock) return;
    onAddToBag(product, selectedSize, selectedColorId);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2600);
  };

  const activeIsPackshot = product.packshotIndex?.includes(activeImageIdx);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#F4F1EA]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        {/* Breadcrumb / Back Navigation */}
        <div className="pb-6 sm:pb-8 flex items-center justify-between gap-4 border-b border-[#24231F]/12">
          <button
            type="button"
            onClick={onBackToCollection}
            className="inline-flex items-center gap-2 text-xs text-[#24231F]/78 hover:text-[#24231F] transition-colors cursor-pointer"
          >
            {isRtl ? (
              <ArrowRight size={14} strokeWidth={1.4} />
            ) : (
              <ArrowLeft size={14} strokeWidth={1.4} />
            )}
            <span>{pp.backToCollection}</span>
          </button>

          <span className="text-xs text-[#6C675F]">
            {t.nav.categories[product.category]}
          </span>
        </div>

        {/* Main Split Editorial Layout */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE5DB]">
              <img
                src={product.images[activeImageIdx] || product.images[0]}
                alt={product.name[lang]}
                style={{ objectPosition: product.focalPoint || 'center center' }}
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  activeIsPackshot ? 'mix-blend-multiply p-8 sm:p-12 object-contain' : ''
                }`}
              />
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {product.images.map((img, idx) => {
                  const active = idx === activeImageIdx;
                  const isPack = product.packshotIndex?.includes(idx);
                  return (
                    <button
                      key={`${product.id}-thumb-${idx}`}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      aria-label={`${product.name[lang]} ${idx + 1}`}
                      className={`aspect-[3/4] overflow-hidden bg-[#EAE5DB] border transition-colors cursor-pointer ${
                        active
                          ? 'border-[#24231F]'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        style={{
                          objectPosition: product.focalPoint || 'center center',
                        }}
                        className={`h-full w-full object-cover ${
                          isPack ? 'mix-blend-multiply p-2 object-contain' : ''
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Product Details Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {product.limitedEdition && (
                <span className="border border-[#A96852]/40 bg-[#A96852]/10 px-2.5 py-0.5 text-[11px] text-[#A96852]">
                  {pp.limitedBadge}
                </span>
              )}
              <span
                className={`text-[11px] ${
                  product.inStock ? 'text-[#737765]' : 'text-[#6C675F]'
                }`}
              >
                {product.inStock ? pp.inStockLabel : pp.soldOutLabel}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-light leading-[1.18] text-[#24231F]">
              {product.name[lang]}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-[#6C675F]">
              {product.subtitle[lang]}
            </p>

            <div className="mt-5 pb-6 border-b border-[#24231F]/12">
              <span className="text-lg sm:text-xl font-medium text-[#24231F]">
                {product.priceMax
                  ? `${formatToman(product.price, lang)} – ${formatToman(product.priceMax, lang)}`
                  : formatToman(product.price, lang)}
              </span>
            </div>

            <p className="mt-6 text-sm leading-[1.9] text-[#24231F]/82 font-light">
              {product.description[lang]}
            </p>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div className="mt-7">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="text-[#6C675F]">{pp.colorLabel}</span>
                  <span className="font-medium text-[#24231F]">
                    {activeColor?.name[lang]}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {product.colors.map((c) => {
                    const active = c.id === selectedColorId;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedColorId(c.id)}
                        title={c.name[lang]}
                        aria-label={c.name[lang]}
                        aria-pressed={active}
                        className={`p-1 border transition-colors cursor-pointer ${
                          active
                            ? 'border-[#24231F]'
                            : 'border-transparent hover:border-[#24231F]/30'
                        }`}
                      >
                        <span
                          style={{ backgroundColor: c.hex }}
                          className="block h-6 w-6 rounded-full border border-[#24231F]/20"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs mb-2.5">
                <span className="text-[#6C675F]">{pp.sizeLabel}</span>
                <span className="font-medium text-[#24231F]">
                  {product.sizes.length === 0 ? pp.oneSize : selectedSize}
                </span>
              </div>

              {product.sizes.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((sz) => {
                    const active = sz === selectedSize;
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        aria-pressed={active}
                        className={`py-2.5 text-xs border transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#24231F] text-[#F4F1EA] border-[#24231F]'
                            : 'bg-transparent text-[#24231F] border-[#24231F]/22 hover:border-[#24231F]'
                        }`}
                      >
                        {lang === 'fa'
                          ? sz.replace('1', '۱').replace('2', '۲').replace('3', '۳').replace('4', '۴')
                          : sz}
                      </button>
                    );
                  })}
                </div>
              )}

              {product.sizeNote && (
                <p className="mt-2.5 text-xs text-[#6C675F] leading-relaxed">
                  {product.sizeNote[lang]}
                </p>
              )}
            </div>

            {/* Primary Add-to-Bag Action */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                disabled={!product.inStock}
                onClick={handleAdd}
                className={`w-full py-4 text-xs transition-colors duration-200 flex items-center justify-center gap-2 ${
                  !product.inStock
                    ? 'bg-[#EAE5DB] text-[#6C675F] cursor-not-allowed'
                    : justAdded
                    ? 'bg-[#737765] text-[#F4F1EA] cursor-pointer'
                    : 'bg-[#24231F] text-[#F4F1EA] hover:bg-[#737765] cursor-pointer'
                } ${isRtl ? 'text-[13px]' : 'uppercase tracking-[0.16em]'}`}
              >
                {justAdded ? (
                  <>
                    <Check size={15} />
                    <span>{pp.addedToBag}</span>
                  </>
                ) : (
                  <span>{product.inStock ? pp.addToBag : pp.soldOutBtn}</span>
                )}
              </button>

              {justAdded && (
                <button
                  type="button"
                  onClick={onOpenBag}
                  className="w-full py-3 border border-[#24231F]/28 text-xs text-[#24231F] hover:bg-[#EAE5DB] transition-colors cursor-pointer"
                >
                  {pp.openBag}
                </button>
              )}
            </div>

            {/* Material, Care & Delivery Accordion/Blocks */}
            <div className="mt-9 pt-7 border-t border-[#24231F]/12 space-y-6">
              {product.details[lang].length > 0 && (
                <div>
                  <h2 className="editorial-label mb-3">{pp.detailsTitle}</h2>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#24231F]/80 leading-relaxed">
                    {product.details[lang].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-[#737765] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-5 border-t border-[#24231F]/10">
                <h2 className="editorial-label mb-2">{pp.shippingTitle}</h2>
                <p className="text-xs text-[#6C675F] leading-relaxed">
                  {pp.shippingNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {fallbackRelated.length > 0 && (
          <div className="mt-20 sm:mt-28 pt-12 border-t border-[#24231F]/12">
            <h2 className="font-display text-2xl sm:text-4xl font-light text-[#24231F] mb-10">
              {pp.relatedTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fallbackRelated.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  lang={lang}
                  onSelect={onSelectProduct}
                  soldOutLabel={t.showcase.soldOut}
                  limitedLabel={t.showcase.limited}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
