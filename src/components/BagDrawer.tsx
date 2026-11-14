import React, { useEffect, useState } from 'react';
import { Check, Minus, Plus, X } from 'lucide-react';
import { Product } from '../data/products';
import { formatToman, Lang, TranslationContent } from '../i18n/translations';

export interface BagItem {
  product: Product;
  size: string;
  colorId: string;
  qty: number;
}

interface BagDrawerProps {
  open: boolean;
  lang: Lang;
  t: TranslationContent['bag'];
  items: BagItem[];
  onClose: () => void;
  onUpdateQty: (index: number, delta: number) => void;
  onRemove: (index: number) => void;
  onClear: () => void;
  onBrowseCollection: () => void;
}

const FREE_SHIPPING_THRESHOLD = 4500000;

export const BagDrawer: React.FC<BagDrawerProps> = ({
  open,
  lang,
  t,
  items,
  onClose,
  onUpdateQty,
  onRemove,
  onClear,
  onBrowseCollection,
}) => {
  const [demoRef, setDemoRef] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDemoRef(null);
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const remainingForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal
  );
  const progressPct = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  const handleClose = () => {
    setDemoRef(null);
    onClose();
  };

  const handleDemoCheckout = () => {
    const code = `TV-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
    setDemoRef(code);
    onClear();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
      onClick={handleClose}
      className="fixed inset-0 z-50 bg-[#24231F]/45 backdrop-blur-[2px] flex justify-end animate-fade-in"
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md h-full bg-[#F4F1EA] text-[#24231F] border-s border-[#24231F]/16 flex flex-col justify-between animate-drawer-slide"
      >
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-[#24231F]/12 flex items-center justify-between">
          <h2 className="font-display text-2xl font-normal text-[#24231F]">
            {t.title}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label={lang === 'fa' ? 'بستن سبد خرید' : 'Close bag'}
            className="p-1.5 text-[#24231F]/75 hover:text-[#24231F] transition-colors cursor-pointer"
          >
            <X size={19} strokeWidth={1.35} />
          </button>
        </div>

        {/* Free Shipping Indicator */}
        {items.length > 0 && !demoRef && (
          <div className="px-6 py-3.5 bg-[#EAE5DB]/65 border-b border-[#24231F]/10">
            <p className="text-[11px] text-[#24231F]/80">
              {remainingForFreeShipping === 0
                ? t.freeShippingUnlocked
                : `${formatToman(remainingForFreeShipping, lang)} ${t.freeShippingRemaining}`}
            </p>
            <div className="mt-2 h-1 w-full bg-[#24231F]/12 overflow-hidden">
              <div
                style={{ width: `${progressPct}%` }}
                className="h-full bg-[#737765] transition-all duration-300"
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {demoRef ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-3">
              <div className="h-11 w-11 rounded-full border border-[#737765] flex items-center justify-center text-[#737765] mb-5">
                <Check size={18} strokeWidth={1.5} />
              </div>
              <span className="editorial-label mb-1.5">{t.demoRefLabel}</span>
              <span
                dir="ltr"
                data-latin="true"
                className="text-xs tracking-[0.16em] bg-[#EAE5DB] border border-[#24231F]/18 px-3 py-1 mb-5 text-[#24231F]"
              >
                {demoRef}
              </span>
              <h3 className="font-display text-3xl font-light text-[#24231F]">
                {t.demoConfirmedTitle}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#6C675F]">
                {t.demoConfirmedBody}
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-8 border border-[#24231F] px-6 py-3 text-xs text-[#24231F] hover:bg-[#24231F] hover:text-[#F4F1EA] transition-colors cursor-pointer"
              >
                {t.continueBtn}
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <p className="font-display text-2xl font-light text-[#24231F]">
                {t.emptyTitle}
              </p>
              <p className="mt-2.5 text-xs text-[#6C675F] leading-relaxed max-w-xs">
                {t.emptyBody}
              </p>
              <button
                type="button"
                onClick={() => {
                  handleClose();
                  onBrowseCollection();
                }}
                className="mt-7 bg-[#24231F] text-[#F4F1EA] px-6 py-3 text-xs hover:bg-[#737765] transition-colors cursor-pointer"
              >
                {t.browseBtn}
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#24231F]/12">
              {items.map((item, idx) => {
                const colorObj = item.product.colors.find(
                  (c) => c.id === item.colorId
                );
                const isPackshot = item.product.packshotIndex?.includes(0);

                return (
                  <div
                    key={`${item.product.id}-${item.size}-${item.colorId}`}
                    className="py-5 flex gap-4"
                  >
                    <div className="h-26 w-20 shrink-0 bg-[#EAE5DB] overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name[lang]}
                        className={`h-full w-full object-cover ${
                          isPackshot ? 'mix-blend-multiply p-1.5 object-contain' : ''
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm text-[#24231F] leading-snug">
                            {item.product.name[lang]}
                          </h3>
                          <span className="text-xs font-medium text-[#24231F] shrink-0 whitespace-nowrap">
                            {formatToman(item.product.price * item.qty, lang)}
                          </span>
                        </div>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#6C675F]">
                          <span>
                            {t.size}:{' '}
                            <strong className="font-medium text-[#24231F]">
                              {lang === 'fa'
                                ? item.size
                                    .replace('1', '۱')
                                    .replace('2', '۲')
                                    .replace('3', '۳')
                                    .replace('4', '۴')
                                : item.size}
                            </strong>
                          </span>
                          {colorObj && (
                            <span>
                              {t.color}: {colorObj.name[lang]}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-[#24231F]/20">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(idx, -1)}
                            aria-label={
                              lang === 'fa' ? 'کاهش تعداد' : 'Decrease quantity'
                            }
                            className="p-1.5 hover:bg-[#EAE5DB] transition-colors cursor-pointer"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-xs">
                            {lang === 'fa'
                              ? item.qty.toLocaleString('fa-IR')
                              : item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(idx, 1)}
                            aria-label={
                              lang === 'fa' ? 'افزایش تعداد' : 'Increase quantity'
                            }
                            className="p-1.5 hover:bg-[#EAE5DB] transition-colors cursor-pointer"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(idx)}
                          className="text-[11px] text-[#6C675F] hover:text-[#A96852] underline underline-offset-4 transition-colors cursor-pointer"
                        >
                          {t.remove}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Subtotal & Demo Checkout */}
        {items.length > 0 && !demoRef && (
          <div className="p-6 border-t border-[#24231F]/12 bg-[#EAE5DB]/65">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs text-[#6C675F]">{t.subtotal}</span>
              <span className="font-display text-2xl text-[#24231F]">
                {formatToman(subtotal, lang)}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#6C675F] mb-4">
              {t.demoNote}
            </p>
            <button
              type="button"
              onClick={handleDemoCheckout}
              className="w-full bg-[#24231F] text-[#F4F1EA] py-3.5 text-xs hover:bg-[#737765] transition-colors duration-200 cursor-pointer"
            >
              {t.checkoutBtn}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
