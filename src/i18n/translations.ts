import { CategorySlug } from '../data/products';

export type Lang = 'fa' | 'en';

export function formatToman(amount: number, lang: Lang): string {
  if (lang === 'fa') {
    return `${amount.toLocaleString('fa-IR')} تومان`;
  }
  return `${amount.toLocaleString('en-US')} T`;
}

export interface TranslationContent {
  meta: {
    brandName: string;
    conceptNote: string;
  };
  nav: {
    collection: string;
    looks: string;
    story: string;
    about: string;
    bag: string;
    langToggle: string;
    categories: Record<CategorySlug, string>;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    kicker: string;
    headlineLine1: string;
    headlineLine2: string;
    subcopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
    captionLeft: string;
    captionRight: string;
  };
  intro: {
    label: string;
    title: string;
    lead: string;
    body: string;
    linkLabel: string;
    detailTag: string;
  };
  showcase: {
    label: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewPiece: string;
    soldOut: string;
    limited: string;
  };
  story: {
    label: string;
    title: string;
    quote: string;
    paragraphs: string[];
    values: string[];
    readMore: string;
  };
  looks: {
    label: string;
    title: string;
    subtitle: string;
    piecesInLook: string;
    inspectPiece: string;
  };
  finalMoment: {
    label: string;
    headline: string;
    subline: string;
    cta: string;
  };
  collectionPage: {
    label: string;
    title: string;
    subtitle: string;
    sortLabel: string;
    sortFeatured: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    inStockOnly: string;
    showingCount: string;
    emptyState: string;
    resetFilters: string;
  };
  productPage: {
    backToCollection: string;
    homeCrumb: string;
    colorLabel: string;
    sizeLabel: string;
    oneSize: string;
    addToBag: string;
    addedToBag: string;
    soldOutBtn: string;
    openBag: string;
    detailsTitle: string;
    shippingTitle: string;
    shippingNote: string;
    relatedTitle: string;
    limitedBadge: string;
    inStockLabel: string;
    soldOutLabel: string;
  };
  aboutPage: {
    label: string;
    title: string;
    foundedStamp: string;
    storyHeading: string;
    storyParagraphs: string[];
    faqLabel: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    contactTitle: string;
    contactNote: string;
    hours: string;
  };
  bag: {
    title: string;
    emptyTitle: string;
    emptyBody: string;
    browseBtn: string;
    size: string;
    color: string;
    remove: string;
    subtotal: string;
    freeShippingUnlocked: string;
    freeShippingRemaining: string;
    demoNote: string;
    checkoutBtn: string;
    demoConfirmedTitle: string;
    demoConfirmedBody: string;
    demoRefLabel: string;
    continueBtn: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    categoriesTitle: string;
    connectTitle: string;
    newsletterTitle: string;
    newsletterNote: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    subscribedMsg: string;
    rights: string;
    prototypeDisclaimer: string;
    backToTop: string;
  };
}

export const translations: Record<Lang, TranslationContent> = {
  en: {
    meta: {
      brandName: 'THE VAND',
      conceptNote: 'Digital Concept Presentation',
    },
    nav: {
      collection: 'Collection',
      looks: 'Styled Together',
      story: 'Story',
      about: 'About & FAQ',
      bag: 'Bag',
      langToggle: 'فارسی',
      categories: {
        all: 'All Pieces',
        shirts: 'Shirts',
        tops: 'Tops & T-Shirts',
        outerwear: 'Coats & Knitwear',
        bags: 'Bags',
        socks: 'Socks',
      },
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      kicker: 'THE VAND · PROMISE TO SLOW',
      headlineLine1: 'The Art of',
      headlineLine2: 'Everyday Dressing',
      subcopy:
        'Independent contemporary essentials crafted from honest natural fabrics — designed for quiet confidence, personal rhythm, and lasting wear.',
      ctaPrimary: 'Discover the Collection',
      ctaSecondary: 'Our Story',
      captionLeft: 'Natural Linen · 100% Cotton · Water-Repellent Gabardine',
      captionRight: 'Est. Summer 1402 / 2023',
    },
    intro: {
      label: '01 · The Collection',
      title: 'Thoughtful garments made to live with you.',
      lead: 'From breathable 100% linen shirts to double-layer TC cotton carryalls and limited-edition trench coats, every piece begins with comfort and proportion.',
      body: 'Rather than chasing seasonal excess, The Vand shapes an intimate wardrobe of enduring staples — understated silhouettes, tactile fabrics, and quiet finishing details.',
      linkLabel: 'Browse All Pieces',
      detailTag: 'Woven Neck Label · Promise to Slow',
    },
    showcase: {
      label: '02 · Selected Edit',
      title: 'Curated Wardrobe Pieces',
      subtitle:
        'Six foundational garments and everyday objects from the current catalog.',
      viewAll: 'View Full Collection',
      viewPiece: 'Inspect Piece',
      soldOut: 'Sold Out',
      limited: 'Limited Edition',
    },
    story: {
      label: '03 · A Sense of Belonging',
      title: 'Born from friendship, family, nature, art, and creation.',
      quote:
        'Our aim is not merely to manufacture products, but to create garments worthy of being worn.',
      paragraphs: [
        'In the summer of 1402, creating became our daily promise, and The Vand was born. From the first day, we chose to anchor our work in values and authenticity before anything else.',
        'The foremost value of The Vand is the human bond uniting our team — a connection rooted in love for family, friendship, nature, art, and creation.',
        'Every garment is crafted to remain simple yet striking, faithful to quality, gentle on the skin, and mindful of nature — extending even to reusable packaging designed to stay in daily life.',
      ],
      values: ['Family', 'Friendship', 'Nature', 'Art', 'Creation'],
      readMore: 'Read Full Story & Shipping FAQ',
    },
    looks: {
      label: '04 · Styled Together',
      title: 'Considered Pairings',
      subtitle:
        'Complete looks from our visual archives. Select any piece in a look to explore its material details, colors, and sizing.',
      piecesInLook: 'Pieces in this look',
      inspectPiece: 'View piece',
    },
    finalMoment: {
      label: 'Promise to Slow',
      headline: 'Simple, eye-catching garments loyal to quality and longevity.',
      subline: 'Explore the complete bilingual catalog or discover everyday essentials.',
      cta: 'Enter the Collection',
    },
    collectionPage: {
      label: 'Catalog',
      title: 'The Collection',
      subtitle:
        'Contemporary everyday garments and carryalls in natural linen, combed cotton, wool blends, and water-repellent canvas.',
      sortLabel: 'Sort',
      sortFeatured: 'Curated Order',
      sortPriceAsc: 'Price: Low to High',
      sortPriceDesc: 'Price: High to Low',
      inStockOnly: 'In Stock Only',
      showingCount: 'pieces',
      emptyState: 'No pieces match the selected filter.',
      resetFilters: 'Show All Pieces',
    },
    productPage: {
      backToCollection: 'Back to Collection',
      homeCrumb: 'Home',
      colorLabel: 'Color',
      sizeLabel: 'Size',
      oneSize: 'One Size',
      addToBag: 'Add to Bag',
      addedToBag: 'Added to Bag',
      soldOutBtn: 'Currently Sold Out',
      openBag: 'Open Bag',
      detailsTitle: 'Material & Care',
      shippingTitle: 'Delivery Information',
      shippingNote:
        'Tehran dispatch via Tapsi Pack or Alopeyk; Iran-wide delivery via Mahex / Chapar. Free shipping on orders above 4,500,000 T.',
      relatedTitle: 'From the Same Edit',
      limitedBadge: 'Limited Edition',
      inStockLabel: 'Available',
      soldOutLabel: 'Sold Out',
    },
    aboutPage: {
      label: 'Brand & Practice',
      title: 'About THE VAND',
      foundedStamp: 'Founded Summer 1402 (2023) · Tehran',
      storyHeading: 'A marriage of love, friendship, nature, art, and creation.',
      storyParagraphs: [
        'In the summer of 1402 (2023), we decided that creation would become our daily calling, and The Vand began. We resolved to ground our work in values and originality above all else.',
        'Our first and lasting value is the bond that brings our team together — a connection born of love for family, friendship, nature, art, and making things with care.',
        'At The Vand, every stage of production and every small detail is entrusted to dedicated specialists so what reaches you meets the expectations of the most discerning wearer. Our purpose is not simply to produce goods, but to craft garments worthy of the body.',
        'Garments that are striking in their simplicity, loyal to material quality, comfort, and care for nature. Paying tribute to the natural world, we drew on our love of art to design packaging meant to remain useful and reduce waste.',
      ],
      faqLabel: 'Practical Details',
      faqTitle: 'Shipping & Care Questions',
      faqs: [
        {
          q: 'How are orders dispatched?',
          a: 'Orders are scheduled for dispatch on Saturdays, Sundays, and Tuesdays between 10:00 and 16:00.',
        },
        {
          q: 'How does shipping work within Tehran?',
          a: 'Orders within Tehran are dispatched via Alopeyk or Tapsi Pack courier tariffs. Orders over 4,500,000 T qualify for complimentary shipping.',
        },
        {
          q: 'Do you ship to other cities across Iran?',
          a: 'Yes. Intercity orders are sent via Mahex / Chapar freight according to parcel weight and dimensions, with free delivery above 4,500,000 T.',
        },
        {
          q: 'How should Trench Coats and Chunky Knits be cared for?',
          a: 'The Vand Trench Coat is Dry Clean Only — allow damp coats to air-dry away from direct heat on a shaped hanger. Chunky rib knits should be worn gently away from sharp jewelry.',
        },
      ],
      contactTitle: 'Direct Contact',
      contactNote: 'WhatsApp & customer support',
      hours: 'Saturday to Thursday · 10:00 – 18:00',
    },
    bag: {
      title: 'Shopping Bag',
      emptyTitle: 'Your bag is currently empty.',
      emptyBody: 'Explore the collection to select shirts, knitwear, trench coats, or everyday carryalls.',
      browseBtn: 'Explore Collection',
      size: 'Size',
      color: 'Color',
      remove: 'Remove',
      subtotal: 'Subtotal',
      freeShippingUnlocked: 'Eligible for complimentary shipping (over 4,500,000 T)',
      freeShippingRemaining: 'away from complimentary shipping',
      demoNote:
        'Concept Prototype: Checkout demonstrates cart and order summary flow only. No real payment is processed.',
      checkoutBtn: 'Preview Checkout Summary',
      demoConfirmedTitle: 'Demo Order Recorded',
      demoConfirmedBody:
        'This interactive prototype does not process live transactions. In production, this step connects to payment and dispatch.',
      demoRefLabel: 'Prototype Reference',
      continueBtn: 'Return to Boutique',
    },
    footer: {
      tagline: 'The Art of Everyday Dressing · Promise to Slow',
      navTitle: 'Explore',
      categoriesTitle: 'Categories',
      connectTitle: 'Connect',
      newsletterTitle: 'Journal & Releases',
      newsletterNote: 'Receive quiet notes on new editions and seasonal releases (prototype preview).',
      emailPlaceholder: 'Your email address',
      subscribeBtn: 'Join',
      subscribedMsg: 'Recorded for this concept preview.',
      rights: '© THE VAND · Editorial Digital Concept',
      prototypeDisclaimer: 'Interactive Design Prototype',
      backToTop: 'Back to top',
    },
  },
  fa: {
    meta: {
      brandName: 'دِ وند',
      conceptNote: 'نسخه نمایشی کانسپت دیجیتال',
    },
    nav: {
      collection: 'محصولات',
      looks: 'ست پیشنهادی',
      story: 'داستان ما',
      about: 'درباره وند و ارسال',
      bag: 'سبد خرید',
      langToggle: 'English',
      categories: {
        all: 'تمامی محصولات',
        shirts: 'پیراهن',
        tops: 'تاپ و تی‌شرت',
        outerwear: 'ژاکت، ترنچ و بافتنی',
        bags: 'کیف پارچه‌ای',
        socks: 'جوراب',
      },
      menuOpen: 'باز کردن منو',
      menuClose: 'بستن منو',
    },
    hero: {
      kicker: 'THE VAND · PROMISE TO SLOW',
      headlineLine1: 'هنرِ پوشش',
      headlineLine2: 'روزمره‌ی سنجیده',
      subcopy:
        'تن‌پوش‌هایی ساده، خوش‌فرم و ماندگار از الیاف طبیعی؛ آفریده‌شده برای آرامش، اصالت شخصی و همراهی در روزهای عادی.',
      ctaPrimary: 'مشاهده مجموعه',
      ctaSecondary: 'درباره‌ی وند',
      captionLeft: 'لینن طبیعی · پنبه ۱۰۰٪ · کتان آب‌گریز',
      captionRight: 'آغاز از تابستان ۱۴۰۲',
    },
    intro: {
      label: '۰۱ · مجموعه',
      title: 'خلق تن‌پوش‌هایی که لایق تن باشند.',
      lead: 'از پیراهن‌های ۱۰۰٪ لینن و تی‌شرت‌های پنبه‌ای تا کیف‌های کتان آب‌گریز و ترنچ‌کت‌های ادیشن محدود، هر قطعه با توجه به راحتی و تناسب فرم شکل می‌گیرد.',
      body: 'به‌جای شتاب و فراوانیِ فصلی، دِ وند بر ساخت کمدی آرام از قطعات همیشگی تمرکز دارد؛ خط‌هایی ساده، بافت‌هایی ملموس و جزئیاتی که در گذر زمان ارزشمند می‌مانند.',
      linkLabel: 'مشاهده همه محصولات',
      detailTag: 'لیبل بافته · Promise to Slow',
    },
    showcase: {
      label: '۰۲ · گزیده ویرایش',
      title: 'انتخاب‌های منتخب کلکسیون',
      subtitle:
        'شش قطعه اصلی از مجموعه فعلی دِ وند در دسته‌بندی‌های پیراهن، ترنچ‌کت، بافتنی، کیف و تی‌شرت.',
      viewAll: 'مشاهده کل مجموعه',
      viewPiece: 'بررسی جزئیات',
      soldOut: 'تمام شد',
      limited: 'ادیشن محدود',
    },
    story: {
      label: '۰۳ · حسِ پیوند',
      title: 'پیوندی از خانواده، دوستی، طبیعت، هنر و آفرینش.',
      quote:
        'هدف تیم دِ وند تولید محصول نیست، بلکه خلق تن‌پوش‌هایی‌ست که لایق تن باشند.',
      paragraphs: [
        'در تابستان ۱۴۰۲ تصمیم گرفتیم که آفریدن قرار روزهای بی‌قراری‌مان شود و دِ وند آغاز شد. برآن شدیم که قرارهایمان را بر این اصل استوار کنیم که پیش و بیش از هر چیز خالق و قدردان ارزش‌ها باشد.',
        'نخستین ارزش دِ وند پیوندی‌ست که اعضای تیم را هم‌نشین و هم‌مسیر کرده است؛ پیوندی که از عشق به خانواده، دوستی، طبیعت، هنر و آفرینش آغاز شده است.',
        'تن‌پوش‌هایی که در نهایت سادگی چشم‌گیر باشند و به کیفیت، تن‌دوستی و مراقبت از طبیعت وفادار بمانند؛ حتی در طراحی بسته‌بندی‌هایی که در چرخه‌ی مصرف باقی بمانند.',
      ],
      values: ['خانواده', 'دوستی', 'طبیعت', 'هنر', 'آفرینش'],
      readMore: 'داستان کامل و راهنمای ارسال',
    },
    looks: {
      label: '۰۴ · ست پیشنهادی',
      title: 'ترکیب‌های هماهنگ',
      subtitle:
        'لوک‌های کامل از آرشیو تصویری وند. با انتخاب هر قطعه می‌توانید جزئیات جنس، رنگ و سایز آن را ببینید.',
      piecesInLook: 'قطعات این استایل',
      inspectPiece: 'مشاهده محصول',
    },
    finalMoment: {
      label: 'Promise to Slow',
      headline: 'زیبایی در سادگی، و وفاداری به کیفیت و ماندگاری.',
      subline: 'تمامی دسته‌بندی‌ها و قطعات کلکسیون دِ وند را کاوش کنید.',
      cta: 'ورود به فروشگاه مجموعه',
    },
    collectionPage: {
      label: 'فهرست کلکسیون',
      title: 'تمامی محصولات',
      subtitle:
        'پوشاک و کیف‌های روزمره دِ وند با الیاف لینن، پنبه، ترکیب پشم و کتان آب‌گریز.',
      sortLabel: 'مرتب‌سازی',
      sortFeatured: 'چیدمان منتخب',
      sortPriceAsc: 'ارزان‌ترین به گران‌ترین',
      sortPriceDesc: 'گران‌ترین به ارزان‌ترین',
      inStockOnly: 'فقط موجودها',
      showingCount: 'محصول',
      emptyState: 'محصولی با این فیلتر یافت نشد.',
      resetFilters: 'نمایش همه محصولات',
    },
    productPage: {
      backToCollection: 'بازگشت به مجموعه',
      homeCrumb: 'خانه',
      colorLabel: 'رنگ',
      sizeLabel: 'سایز',
      oneSize: 'تک‌سایز',
      addToBag: 'افزودن به سبد خرید',
      addedToBag: 'به سبد اضافه شد',
      soldOutBtn: 'در حال حاضر ناموجود',
      openBag: 'مشاهده سبد خرید',
      detailsTitle: 'جنس و نگهداری',
      shippingTitle: 'شرایط ارسال',
      shippingNote:
        'ارسال سفارش‌ها در روزهای شنبه، یکشنبه و سه‌شنبه بین ساعت ۱۰ تا ۱۶ انجام می‌شود. سفارش‌های بالای ۴,۵۰۰,۰۰۰ تومان رایگان ارسال می‌شوند.',
      relatedTitle: 'دیگر قطعات هماهنگ',
      limitedBadge: 'ادیشن محدود',
      inStockLabel: 'موجود',
      soldOutLabel: 'تمام شد',
    },
    aboutPage: {
      label: 'درباره برند',
      title: 'درباره‌ی دِ وند',
      foundedStamp: 'تأسیس تابستان ۱۴۰۲ · تهران',
      storyHeading: 'پیوندی که از عشق به خانواده، دوستی، طبیعت، هنر و آفرینش آغاز شد.',
      storyParagraphs: [
        'در تابستان ۱۴۰۲ تصمیم گرفتیم که آفریدن قرار روزهای بی‌قراری‌مان شود و دِ وند آغاز شد. بر آن شدیم که قرارهایمان با دِ وند را بر این اصل استوار کنیم که پیش و بیش از هرچیز خالق و قدردان ارزش‌ها باشد.',
        'نخستین ارزش دِ وند، پیوندی‌ست که اعضای تیم دِ وند را هم‌نشین و هم‌مسیر کرده است. پیوندی که از عشق به خانواده، دوستی، طبیعت، هنر و آفرینش آغاز شده و تا بی‌نهایت ادامه خواهد داشت.',
        'در دِ وند تمام مراحل کار، حتا جزئیات به دست افراد متخصص سپرده می‌شود و امیدواریم آنچه که به دست شما می‌رسد، انتظار و رضایت دقیق‌ترین مشتریان را نیز پاسخگو باشد. هدف تیم دِ وند تولید محصول نیست بلکه خلق تن‌پوش‌هایی‌ست که لایق تن باشند.',
        'تن‌پوش‌هایی که در نهایت سادگی، چشم‌گیر باشند و به کیفیت، تن‌دوستی و مراقبت از طبیعت وفادار بمانند. در راستای ادای دین به طبیعت، از علاقه‌مان به هنر یاری گرفتیم و جزئیات بسته‌بندی را به گونه‌ای طراحی کردیم که ارزشمند شوند و در حد امکان در چرخه‌ی مصرف باقی بمانند.',
      ],
      faqLabel: 'پرسش‌های متداول',
      faqTitle: 'نحوه ارسال و نگهداری',
      faqs: [
        {
          q: 'زمان‌بندی ارسال سفارش‌ها چگونه است؟',
          a: 'سفارش‌های ثبت‌شده در روزهای شنبه، یکشنبه و سه‌شنبه بین ساعت ۱۰ تا ۱۶ ارسال خواهند شد.',
        },
        {
          q: 'روند ارسال در تهران چگونه است؟',
          a: 'سفارش‌های تهران از طریق الوپیک یا تپسی‌پک ارسال می‌شوند و سفارش‌های بالای ۴,۵۰۰,۰۰۰ تومان به صورت رایگان ارسال می‌گردند.',
        },
        {
          q: 'ارسال به دیگر شهرهای ایران چگونه انجام می‌شود؟',
          a: 'کلیه سفارش‌های شهرستان توسط شرکت باربری ماهکس ارسال می‌شوند و سفارش‌های بالای ۴,۵۰۰,۰۰۰ تومان رایگان خواهند بود.',
        },
        {
          q: 'نکات نگهداری از ترنچ کت و پلیور بافتنی چیست؟',
          a: 'ترنچ کت تنها با شست‌وشوی خشک (Dry Clean) نگهداری شود و دور از حرارت مستقیم روی چوب‌لباسی قرار گیرد. پلیور بافت درشت نیازمند مراقبت بیشتر در برابر تماس با زیورآلات است.',
        },
      ],
      contactTitle: 'ارتباط مستقیم',
      contactNote: 'پشتیبانی واتساپ دِ وند',
      hours: 'شنبه تا پنج‌شنبه · ۱۰:۰۰ تا ۱۸:۰۰',
    },
    bag: {
      title: 'سبد خرید',
      emptyTitle: 'سبد خرید شما خالی است.',
      emptyBody: 'از میان پیراهن‌های لینن، ترنچ‌کت، بافتنی و کیف‌های روزمره انتخاب کنید.',
      browseBtn: 'مشاهده مجموعه',
      size: 'سایز',
      color: 'رنگ',
      remove: 'حذف',
      subtotal: 'جمع کل',
      freeShippingUnlocked: 'سفارش شما شامل ارسال رایگان (بالای ۴,۵۰۰,۰۰۰ تومان) است.',
      freeShippingRemaining: 'تا ارسال رایگان باقی مانده است',
      demoNote:
        'نسخه کانسپت: ثبت سفارش در این پیش‌نمایش تنها جهت نمایش تجربه سبد خرید است و پرداخت واقعی انجام نمی‌شود.',
      checkoutBtn: 'پیش‌نمایش ثبت سفارش',
      demoConfirmedTitle: 'پیش‌نمایش سفارش ثبت شد',
      demoConfirmedBody:
        'این نسخه یک کانسپت طراحی تعاملی است و تراکنش واقعی بانکی انجام نمی‌دهد.',
      demoRefLabel: 'کد مرجع نمایشی',
      continueBtn: 'بازگشت به فروشگاه',
    },
    footer: {
      tagline: 'هنرِ پوشش روزمره · Promise to Slow',
      navTitle: 'بخش‌ها',
      categoriesTitle: 'دسته‌بندی‌ها',
      connectTitle: 'ارتباط',
      newsletterTitle: 'خبرنامه و ادیشن‌های تازه',
      newsletterNote: 'اطلاع از مجموعه‌ها و رنگ‌های تازه (پیش‌نمایش کانسپت).',
      emailPlaceholder: 'ایمیل شما',
      subscribeBtn: 'عضویت',
      subscribedMsg: 'در این نسخه نمایشی ثبت شد.',
      rights: '© THE VAND · کانسپت دیجیتال',
      prototypeDisclaimer: 'نسخه پروتوتایپ تعاملی',
      backToTop: 'بازگشت به بالا',
    },
  },
};
