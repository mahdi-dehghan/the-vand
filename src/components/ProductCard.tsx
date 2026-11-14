import React from 'react';
import { Product } from '../data/products';
import { formatToman, Lang } from '../i18n/translations';

interface ProductCardProps {
  product: Product;
  lang: Lang;
  onSelect: (product: Product) => void;
  aspectClass?: string;
  soldOutLabel: string;
  limitedLabel: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  onSelect,
  aspectClass = 'aspect-[3/4]',
  soldOutLabel,
  limitedLabel,
}) => {
  const primaryImg = product.images[0];
  const secondaryImg = product.images.length > 1 ? product.images[1] : null;
  const primaryIsPackshot = product.packshotIndex?.includes(0);
  const secondaryIsPackshot = product.packshotIndex?.includes(1);

  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={() => onSelect(product)}
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#EAE5DB] text-start cursor-pointer focus-visible:outline-1`}
      >
        <img
          src={primaryImg}
          alt={product.name[lang]}
          loading="lazy"
          style={{ objectPosition: product.focalPoint || 'center center' }}
          className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
            primaryIsPackshot ? 'mix-blend-multiply p-4 sm:p-6 object-contain' : ''
          }`}
        />

        {secondaryImg && (
          <img
            src={secondaryImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{ objectPosition: product.focalPoint || 'center center' }}
            className={`absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 bg-[#EAE5DB] ${
              secondaryIsPackshot ? 'mix-blend-multiply p-4 sm:p-6 object-contain' : ''
            }`}
          />
        )}

        {(product.limitedEdition || !product.inStock) && (
          <div className="absolute top-3 start-3 flex flex-wrap gap-1.5 pointer-events-none">
            {product.limitedEdition && (
              <span className="bg-[#F4F1EA]/92 px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase text-[#24231F]">
                {limitedLabel}
              </span>
            )}
            {!product.inStock && (
              <span className="bg-[#24231F]/84 px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase text-[#F4F1EA]">
                {soldOutLabel}
              </span>
            )}
          </div>
        )}
      </button>

      <div className="pt-3.5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="text-start text-[15px] leading-snug font-normal text-[#24231F] group-hover:text-[#737765] transition-colors cursor-pointer"
          >
            {product.name[lang]}
          </button>
          <p className="mt-1 text-xs text-[#6C675F] truncate">
            {product.subtitle[lang]}
          </p>
        </div>

        <div className="shrink-0 text-end">
          <span className="text-[13px] font-medium text-[#24231F] whitespace-nowrap">
            {product.priceMax
              ? `${formatToman(product.price, lang)} – ${formatToman(product.priceMax, lang)}`
              : formatToman(product.price, lang)}
          </span>
          {product.colors.length > 0 && (
            <div className="mt-2 flex items-center justify-end gap-1.5">
              {product.colors.slice(0, 5).map((c) => (
                <span
                  key={c.id}
                  title={c.name[lang]}
                  style={{ backgroundColor: c.hex }}
                  className="h-2.5 w-2.5 rounded-full border border-[#24231F]/20"
                />
              ))}
              {product.colors.length > 5 && (
                <span className="text-[10px] text-[#6C675F]" dir="ltr">
                  +{product.colors.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
