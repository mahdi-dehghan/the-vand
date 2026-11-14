import React, { useMemo, useState } from 'react';
import { CategorySlug, Product, PRODUCTS } from '../data/products';
import { Lang, TranslationContent } from '../i18n/translations';
import { ProductCard } from './ProductCard';

type SortOption = 'featured' | 'price-asc' | 'price-desc';

interface CollectionPageProps {
  lang: Lang;
  t: TranslationContent;
  activeCategory: CategorySlug;
  onChangeCategory: (category: CategorySlug) => void;
  onSelectProduct: (product: Product) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  lang,
  t,
  activeCategory,
  onChangeCategory,
  onSelectProduct,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories: CategorySlug[] = [
    'all',
    'shirts',
    'tops',
    'outerwear',
    'bags',
    'socks',
  ];

  const filteredProducts = useMemo(() => {
    let list =
      activeCategory === 'all'
        ? [...PRODUCTS]
        : PRODUCTS.filter((p) => p.category === activeCategory);

    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [activeCategory, inStockOnly, sortBy]);

  const cp = t.collectionPage;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F4F1EA] min-h-[75vh]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        {/* Page Header */}
        <div className="pb-10 border-b border-[#24231F]/12">
          <span className="editorial-label block mb-3">{cp.label}</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#24231F]">
                {activeCategory === 'all'
                  ? cp.title
                  : t.nav.categories[activeCategory]}
              </h1>
              <p className="mt-3 max-w-xl text-sm text-[#6C675F] leading-relaxed">
                {cp.subtitle}
              </p>
            </div>

            <span className="text-xs text-[#6C675F]">
              {lang === 'fa'
                ? `${filteredProducts.length.toLocaleString('fa-IR')} ${cp.showingCount}`
                : `${filteredProducts.length} ${cp.showingCount}`}
            </span>
          </div>
        </div>

        {/* Category Filter Tabs + Sort & Stock Controls */}
        <div className="py-6 border-b border-[#24231F]/12 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div
            role="tablist"
            aria-label={t.footer.categoriesTitle}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onChangeCategory(cat)}
                  className={`px-4 py-2 text-xs transition-colors duration-200 border cursor-pointer ${
                    active
                      ? 'bg-[#24231F] text-[#F4F1EA] border-[#24231F]'
                      : 'bg-transparent text-[#24231F]/78 border-[#24231F]/20 hover:border-[#24231F]'
                  }`}
                >
                  {t.nav.categories[cat]}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <label className="inline-flex items-center gap-2.5 text-xs text-[#24231F]/80 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="h-3.5 w-3.5 accent-[#24231F] cursor-pointer"
              />
              <span>{cp.inStockOnly}</span>
            </label>

            <div className="flex items-center gap-2.5">
              <label
                htmlFor="collection-sort"
                className="text-xs text-[#6C675F]"
              >
                {cp.sortLabel}
              </label>
              <select
                id="collection-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-[#EAE5DB]/60 border border-[#24231F]/20 px-3 py-1.5 text-xs text-[#24231F] focus:outline-none focus:border-[#24231F] cursor-pointer"
              >
                <option value="featured">{cp.sortFeatured}</option>
                <option value="price-asc">{cp.sortPriceAsc}</option>
                <option value="price-desc">{cp.sortPriceDesc}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-2xl text-[#24231F]">
              {cp.emptyState}
            </p>
            <button
              type="button"
              onClick={() => {
                setInStockOnly(false);
                onChangeCategory('all');
              }}
              className="mt-6 border border-[#24231F] px-6 py-2.5 text-xs text-[#24231F] hover:bg-[#24231F] hover:text-[#F4F1EA] transition-colors cursor-pointer"
            >
              {cp.resetFilters}
            </button>
          </div>
        ) : (
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                onSelect={onSelectProduct}
                soldOutLabel={t.showcase.soldOut}
                limitedLabel={t.showcase.limited}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
