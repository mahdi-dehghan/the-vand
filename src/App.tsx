import { useCallback, useEffect, useState } from 'react';
import { CategorySlug, Product, PRODUCTS } from './data/products';
import { Lang, translations } from './i18n/translations';
import { Header, RouteView } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionIntro } from './components/CollectionIntro';
import { CuratedShowcase } from './components/CuratedShowcase';
import { BrandStory } from './components/BrandStory';
import { StyledTogether } from './components/StyledTogether';
import { FinalMoment } from './components/FinalMoment';
import { CollectionPage } from './components/CollectionPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { AboutPage } from './components/AboutPage';
import { BagDrawer, BagItem } from './components/BagDrawer';
import { Footer } from './components/Footer';

const VALID_CATEGORIES: CategorySlug[] = [
  'all',
  'shirts',
  'tops',
  'outerwear',
  'bags',
  'socks',
];

function parseHashRoute(): RouteView {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash || hash === '/') return { page: 'home' };

  const parts = hash.split('/').filter(Boolean);
  if (parts[0] === 'collection') {
    const cat = (parts[1] as CategorySlug) || 'all';
    return {
      page: 'collection',
      category: VALID_CATEGORIES.includes(cat) ? cat : 'all',
    };
  }
  if (parts[0] === 'product' && parts[1]) {
    const exists = PRODUCTS.some((p) => p.id === parts[1]);
    if (exists) return { page: 'product', productId: parts[1] };
    return { page: 'collection', category: 'all' };
  }
  if (parts[0] === 'about') {
    return { page: 'about' };
  }
  return { page: 'home' };
}

function toHash(route: RouteView): string {
  if (route.page === 'home') return '#/';
  if (route.page === 'collection') {
    return route.category === 'all'
      ? '#/collection'
      : `#/collection/${route.category}`;
  }
  if (route.page === 'product') return `#/product/${route.productId}`;
  if (route.page === 'about') return '#/about';
  return '#/';
}

export function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [route, setRoute] = useState<RouteView>(() => parseHashRoute());
  const [bagOpen, setBagOpen] = useState(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([]);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.title =
      lang === 'fa'
        ? 'THE VAND — هنر پوشش روزمره'
        : 'THE VAND — The Art of Everyday Dressing';
  }, [lang]);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((next: RouteView, sectionId?: string) => {
    const nextHash = toHash(next);
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setRoute(next);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const handleSelectProduct = (product: Product) => {
    navigate({ page: 'product', productId: product.id });
  };

  const handleAddToBag = (
    product: Product,
    size: string,
    colorId: string
  ) => {
    setBagItems((prev) => {
      const idx = prev.findIndex(
        (i) =>
          i.product.id === product.id &&
          i.size === size &&
          i.colorId === colorId
      );
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { product, size, colorId, qty: 1 }];
    });
  };

  const handleUpdateQty = (index: number, delta: number) => {
    setBagItems((prev) =>
      prev
        .map((item, i) =>
          i === index ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemoveItem = (index: number) => {
    setBagItems((prev) => prev.filter((_, i) => i !== index));
  };

  const bagCount = bagItems.reduce((sum, item) => sum + item.qty, 0);

  const activeProduct =
    route.page === 'product'
      ? PRODUCTS.find((p) => p.id === route.productId) || PRODUCTS[0]
      : null;

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#24231F] flex flex-col">
      <Header
        lang={lang}
        t={t}
        route={route}
        bagCount={bagCount}
        onNavigate={navigate}
        onToggleLang={toggleLang}
        onOpenBag={() => setBagOpen(true)}
      />

      <main className="flex-1">
        {route.page === 'home' && (
          <>
            <Hero
              lang={lang}
              t={t}
              onDiscoverCollection={() =>
                navigate({ page: 'collection', category: 'all' })
              }
              onExploreStory={() => navigate({ page: 'home' }, 'brand-story')}
            />

            <CollectionIntro
              lang={lang}
              t={t.intro}
              onBrowseAll={() =>
                navigate({ page: 'collection', category: 'all' })
              }
            />

            <CuratedShowcase
              lang={lang}
              t={t.showcase}
              onSelectProduct={handleSelectProduct}
              onViewAll={() =>
                navigate({ page: 'collection', category: 'all' })
              }
            />

            <BrandStory
              lang={lang}
              t={t.story}
              onReadMore={() => navigate({ page: 'about' })}
            />

            <StyledTogether
              lang={lang}
              t={t.looks}
              onSelectProduct={handleSelectProduct}
            />

            <FinalMoment
              lang={lang}
              t={t.finalMoment}
              onEnterCollection={() =>
                navigate({ page: 'collection', category: 'all' })
              }
            />
          </>
        )}

        {route.page === 'collection' && (
          <CollectionPage
            lang={lang}
            t={t}
            activeCategory={route.category}
            onChangeCategory={(category) =>
              navigate({ page: 'collection', category })
            }
            onSelectProduct={handleSelectProduct}
          />
        )}

        {route.page === 'product' && activeProduct && (
          <ProductDetailPage
            product={activeProduct}
            lang={lang}
            t={t}
            onBackToCollection={() =>
              navigate({
                page: 'collection',
                category: activeProduct.category,
              })
            }
            onSelectProduct={handleSelectProduct}
            onAddToBag={handleAddToBag}
            onOpenBag={() => setBagOpen(true)}
          />
        )}

        {route.page === 'about' && (
          <AboutPage lang={lang} t={t.aboutPage} />
        )}
      </main>

      <Footer t={t} onNavigate={navigate} />

      <BagDrawer
        open={bagOpen}
        lang={lang}
        t={t.bag}
        items={bagItems}
        onClose={() => setBagOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveItem}
        onClear={() => setBagItems([])}
        onBrowseCollection={() =>
          navigate({ page: 'collection', category: 'all' })
        }
      />
    </div>
  );
}

export default App;
