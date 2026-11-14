export type CategorySlug =
  | 'all'
  | 'shirts'
  | 'tops'
  | 'outerwear'
  | 'bags'
  | 'socks';

export interface ProductColor {
  id: string;
  hex: string;
  name: {
    fa: string;
    en: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  category: Exclude<CategorySlug, 'all'>;
  name: {
    fa: string;
    en: string;
  };
  subtitle: {
    fa: string;
    en: string;
  };
  price: number;
  priceMax?: number;
  inStock: boolean;
  featured?: boolean;
  limitedEdition?: boolean;
  description: {
    fa: string;
    en: string;
  };
  details: {
    fa: string[];
    en: string[];
  };
  colors: ProductColor[];
  sizes: string[];
  sizeNote?: {
    fa: string;
    en: string;
  };
  images: string[];
  packshotIndex?: number[];
  focalPoint?: string;
}

const COLORS = {
  white: { id: 'white', hex: '#F6F4EF', name: { fa: 'سفید', en: 'White' } },
  ivory: { id: 'ivory', hex: '#EAE5DA', name: { fa: 'استخوانی', en: 'Ivory' } },
  cream: { id: 'cream', hex: '#E8DFC8', name: { fa: 'کرم', en: 'Cream' } },
  black: { id: 'black', hex: '#232220', name: { fa: 'مشکی', en: 'Black' } },
  charcoal: { id: 'charcoal', hex: '#444340', name: { fa: 'زغالی', en: 'Charcoal' } },
  gray: { id: 'gray', hex: '#8F9193', name: { fa: 'طوسی', en: 'Gray' } },
  navy: { id: 'navy-blue', hex: '#222F44', name: { fa: 'سرمه‌ای', en: 'Navy Blue' } },
  darkBlue: { id: 'dark-blue', hex: '#1E314E', name: { fa: 'آبی تیره', en: 'Dark Blue' } },
  skyBlue: { id: 'sky-blue', hex: '#A9C4DD', name: { fa: 'آبی آسمانی', en: 'Sky Blue' } },
  prussianBlue: { id: 'prussian-blue', hex: '#2B4C6B', name: { fa: 'آبی پروس', en: 'Prussian Blue' } },
  vandBlue: { id: 'the-vand-blue', hex: '#1A44A8', name: { fa: 'آبی دِ وند', en: 'THE VAND Blue' } },
  darkTeal: { id: 'dark-teal', hex: '#264E5C', name: { fa: 'آبی کله‌غازی', en: 'Dark Teal Blue' } },
  sageGreen: { id: 'sage-green', hex: '#B4BFA6', name: { fa: 'سبز روشن', en: 'Sage Green' } },
  pastelGreen: { id: 'pastel-green', hex: '#BAC7B4', name: { fa: 'سبز پاستلی', en: 'Pastel Green' } },
  forestGreen: { id: 'deep-forest-green', hex: '#2C4137', name: { fa: 'سبز تیره', en: 'Deep Forest Green' } },
  tortilla: { id: 'tortilla-brown', hex: '#A28574', name: { fa: 'نسکافه‌ای', en: 'Tortilla Brown' } },
  darkBrown: { id: 'dark-brown', hex: '#4B3A32', name: { fa: 'قهوه‌ای تیره', en: 'Dark Brown' } },
  maroon: { id: 'maroon-red', hex: '#5D2429', name: { fa: 'قرمز بلوطی', en: 'Maroon Red' } },
  crimson: { id: 'crimson', hex: '#7C232A', name: { fa: 'زرشکی', en: 'Crimson' } },
  lightSalmon: { id: 'light-salmon', hex: '#E0A899', name: { fa: 'گلبهی', en: 'Light Salmon' } },
  babyPink: { id: 'baby-pink', hex: '#E5CED0', name: { fa: 'صورتی روشن', en: 'Baby Pink' } },
  balletPink: { id: 'ballet-pink', hex: '#DEC1C5', name: { fa: 'صورتی باله', en: 'Ballet Pink' } },
};

export const PRODUCTS: Product[] = [
  {
    id: 'trench-coat-dark-teal',
    slug: 'trench-coat-dark-teal-blue',
    category: 'outerwear',
    name: {
      fa: 'ترنچ کت | آبی کله‌غازی',
      en: 'Trench Coat | Dark Teal Blue',
    },
    subtitle: {
      fa: 'پارچه آب‌گریز · آستری کج‌راه مشکی · ادیشن محدود',
      en: 'Water-repellent shell · Black twill lining · Limited Edition',
    },
    price: 8800000,
    inStock: true,
    featured: true,
    limitedEdition: true,
    description: {
      fa: 'ترنچ‌کت دِ وند با پارچه آب‌گریز و آستری کج‌راه مشکی طراحی شده تا در برابر تغییرات هوا مقاوم و در عین حال سبک و راحت باشد. دوخت نوار زرشکی در داخل، جزئیاتی ظریف و متمایز به آن افزوده است. مدل کت کلاسیک و یونی‌سکس است و بسته‌شدن دکمه‌ها از چپ به راست طراحی شده است.',
      en: 'Crafted from water-repellent fabric with a black twill lining, designed to stay refined through changing weather. Subtle burgundy piping inside adds a distinctive touch. A classic, unisex silhouette with button closure on the left side.',
    },
    details: {
      fa: [
        'پارچه آب‌گریز با آستری کج‌راه مشکی',
        'نوار دوزی زرشکی ظریف در بخش داخلی',
        'الگوی کلاسیک و یونی‌سکس',
        'فقط شست‌وشوی خشک (Dry Clean Only)',
      ],
      en: [
        'Water-repellent outer fabric with black twill lining',
        'Subtle internal burgundy piping detail',
        'Classic unisex silhouette',
        'Dry clean only; air dry away from direct heat',
      ],
    },
    colors: [COLORS.darkTeal],
    sizes: ['1', '2'],
    sizeNote: {
      fa: 'الگوی آزاد یونی‌سکس — سایز ۱ و ۲ متناسب با پوشش چندلایه.',
      en: 'Relaxed unisex cut — Sizes 1 & 2 tailored for easy layering.',
    },
    images: [
      './images/vand/prod-3471-1.jpg',
      './images/vand/prod-3471-2.jpg',
      './images/vand/prod-3471-3.jpg',
    ],
    packshotIndex: [1],
    focalPoint: 'center 18%',
  },
  {
    id: 'ladies-linen-shirt',
    slug: 'ladies-long-sleeve-linen-shirt',
    category: 'shirts',
    name: {
      fa: 'پیراهن زنانه آستین بلند لینن',
      en: 'Ladies Long Sleeve Linen Shirt',
    },
    subtitle: {
      fa: '۱۰۰٪ لینن طبیعی · فرم استاندارد و راحت',
      en: '100% natural linen · Standard relaxed fit',
    },
    price: 4900000,
    inStock: true,
    featured: true,
    description: {
      fa: 'پیراهن آستین بلند لینن؛ انتخابی کلاسیک و راحت برای استایل روزمره و رسمی‌تر. دوخته‌شده از پارچه صددرصد لیننِ نرم و مقاوم، مناسب برای تمام فصول و قابل ترکیب با شلوارهای جین و پارچه‌ای.',
      en: 'A classic and comfortable long-sleeve linen shirt designed for everyday and understated formal dressing. Tailored from soft, durable 100% linen suited to every season.',
    },
    details: {
      fa: [
        'جنس: پارچه ۱۰۰٪ لینن، نرم و مقاوم',
        'آستین بلند مناسب استفاده در تمام فصول',
        'فرم استاندارد و راحت',
        'سبک کژوال و کلاسیک',
      ],
      en: [
        'Material: 100% soft, breathable linen',
        'Long sleeves suited for year-round wear',
        'Standard, comfortable everyday silhouette',
        'Pairs effortlessly with denim or tailored trousers',
      ],
    },
    colors: [COLORS.white, COLORS.skyBlue, COLORS.navy],
    sizes: ['1', '2'],
    images: [
      './images/vand/hero-editorial-1.webp',
      './images/vand/prod-4589-1.webp',
    ],
    focalPoint: 'center 25%',
  },
  {
    id: 'men-linen-shirt',
    slug: 'men-long-sleeve-linen-shirt',
    category: 'shirts',
    name: {
      fa: 'پیراهن مردانه آستین بلند لینن',
      en: 'Men Long Sleeve Linen Shirt',
    },
    subtitle: {
      fa: '۱۰۰٪ لینن طبیعی · تن‌خور رها و کلاسیک',
      en: '100% natural linen · Classic everyday drape',
    },
    price: 4900000,
    inStock: true,
    featured: true,
    description: {
      fa: 'پیراهن مردانه آستین بلند لینن؛ انتخابی ماندگار برای روزهای عادی و موقعیت‌های نیمه‌رسمی. بافت طبیعی لینن در کنار برش متعادل، حس سبکی و آرامش را در تمام طول روز حفظ می‌کند.',
      en: 'A timeless long-sleeve linen shirt cut for effortless daily movement and relaxed tailoring. Breathable linen texture meets clean, balanced proportions.',
    },
    details: {
      fa: [
        'جنس: پارچه ۱۰۰٪ لینن، نرم و مقاوم',
        'آستین بلند، مناسب تمام فصول',
        'فرم استاندارد و راحت',
        'عرضه‌شده در سه رنگ سفید، آبی آسمانی و سرمه‌ای',
      ],
      en: [
        'Material: 100% soft, durable linen',
        'Long sleeves for all-season layering',
        'Standard, comfortable tailored fit',
        'Available in White, Sky Blue, and Navy Blue',
      ],
    },
    colors: [COLORS.skyBlue, COLORS.white, COLORS.navy],
    sizes: ['1', '2', '3'],
    images: [
      './images/vand/prod-4514-2.webp',
      './images/vand/prod-4514-3.webp',
      './images/vand/prod-4514-1.webp',
    ],
    focalPoint: 'center 18%',
  },
  {
    id: 'chunky-knit-sweater',
    slug: 'chunky-knit-sweater',
    category: 'outerwear',
    name: {
      fa: 'پلیور یقه گرد بافتنی',
      en: 'Chunky Knit Sweater',
    },
    subtitle: {
      fa: 'بافت ریب درشت · شیارهای عمودی حجیم',
      en: 'Chunky vertical rib knit · Autumn & winter layering',
    },
    price: 5200000,
    inStock: false,
    featured: true,
    description: {
      fa: 'پلیور یقه گرد با بافت ریب درشت و شیارهای عمودی برجسته. طراحی‌شده برای استایل روزمره و پوشش چندلایه در پاییز و زمستان.',
      en: 'A bold, voluminous pullover knitted in a chunky vertical rib structure. Designed for effortless everyday wear and winter layering.',
    },
    details: {
      fa: [
        'نوع بافت: ریب درشت با شیارهای عمودی',
        'مناسب فصول پاییز و زمستان',
        'به‌دلیل بافت درشت با لطافت پوشیده شود و از تماس با اشیای تیز دور بماند',
      ],
      en: [
        'Chunky rib knit with pronounced vertical texture',
        'Suited for autumn and winter layering',
        'Handle gently; avoid contact with sharp jewelry',
      ],
    },
    colors: [COLORS.prussianBlue, COLORS.gray, COLORS.crimson],
    sizes: ['1', '2'],
    images: [
      './images/vand/prod-3368-1.jpg',
      './images/vand/prod-3368-2.jpg',
      './images/vand/prod-3368-3.jpg',
    ],
    focalPoint: 'center 25%',
  },
  {
    id: 'tote-bag-tortilla',
    slug: 'tote-bag-tortilla-brown',
    category: 'bags',
    name: {
      fa: 'کیف پارچه‌ای | نسکافه‌ای',
      en: 'Tote Bag | Tortilla Brown',
    },
    subtitle: {
      fa: 'کتان تی‌سی آب‌گریز · دوخت دولایه · ۳۰×۴۰ سانتی‌متر',
      en: 'Water-repellent TC cotton · Double-layer · 30 × 40 cm',
    },
    price: 3500000,
    inStock: true,
    featured: true,
    description: {
      fa: 'کیف پارچه‌ای روزمره با پارچه کتان تی‌سی آب‌گریز و دوخت دولایه مستحکم. دارای یک جیب داخلی و یک جیب خارجی، قابل جمع‌شدن درون جیب خود و مناسب برای حمل وسایل ضروری روزانه.',
      en: 'A practical, durable everyday tote crafted from water-repellent TC cotton with reinforced double-layer stitching. Features one inner pocket and one outer pocket, packing neatly away when not in use.',
    },
    details: {
      fa: [
        'جنس: پارچه کتان تی‌سی آب‌گریز',
        'دوخت دولایه با یک جیب داخلی و یک جیب خارجی',
        'ابعاد ۳۰ در ۴۰ سانتی‌متر با ۷ سانتی‌متر عطف',
        'قابل شست‌وشو با دست یا ماشین؛ از اتو کشیدن خودداری شود',
      ],
      en: [
        'Water-repellent TC cotton canvas',
        'Reinforced double-layer construction; 1 inner + 1 outer pocket',
        'Dimensions: 30 × 40 cm with 7 cm gusset; packable',
        'Hand or machine washable; do not iron',
      ],
    },
    colors: [COLORS.tortilla],
    sizes: [],
    sizeNote: {
      fa: 'تک‌سایز — ۳۰ × ۴۰ سانتی‌متر با ۷ سانتی‌متر عطف.',
      en: 'One Size — 30 × 40 cm with 7 cm base gusset.',
    },
    images: [
      './images/vand/damavand-19.jpg',
      './images/vand/prod-3871-1.jpeg',
      './images/vand/prod-3871-2.jpeg',
    ],
    packshotIndex: [1, 2],
    focalPoint: 'center 55%',
  },
  {
    id: 'basic-cotton-tshirt',
    slug: '100-cotton-basic-tshirt',
    category: 'tops',
    name: {
      fa: 'تی‌شرت بیسیک ۱۰۰٪ پنبه',
      en: '100% Cotton Basic T-Shirt',
    },
    subtitle: {
      fa: '۱۰۰٪ پنبه · فرم باکس‌فیت آزاد و روزمره',
      en: '100% cotton · Relaxed box-fit silhouette',
    },
    price: 2900000,
    inStock: true,
    featured: true,
    description: {
      fa: 'تی‌شرت بیسیک مدل باکس‌فیت؛ انتخابی ساده و کاربردی برای استایل روزمره. برش کمی آزاد و مربعی این تی‌شرت آزادی حرکت و راحتی کامل را در تمام روز فراهم می‌کند.',
      en: 'A simple, essential everyday piece in a relaxed box-fit cut. Crafted from 100% cotton with a slightly square silhouette for complete ease of movement.',
    },
    details: {
      fa: [
        'جنس: ۱۰۰٪ پنبه طبیعی مناسب استفاده روزانه',
        'فرم باکس‌فیت کمی آزاد و راحت',
        'عرضه‌شده در رنگ‌های متنوع فصلی و خنثی',
      ],
      en: [
        'Material: 100% breathable cotton',
        'Box-fit silhouette with generous everyday drape',
        'Available across eight signature muted shades',
      ],
    },
    colors: [
      COLORS.sageGreen,
      COLORS.white,
      COLORS.cream,
      COLORS.black,
      COLORS.navy,
      COLORS.darkBlue,
      COLORS.maroon,
      COLORS.lightSalmon,
    ],
    sizes: ['1', '2', '3', '4'],
    images: [
      './images/vand/prod-438-1.jpg',
      './images/vand/damavand-31.jpg',
      './images/vand/prod-438-2.jpeg',
    ],
    focalPoint: 'center 20%',
  },
  {
    id: 'trench-coat-black',
    slug: 'trench-coat-black',
    category: 'outerwear',
    name: {
      fa: 'ترنچ کت | مشکی',
      en: 'Trench Coat | Black',
    },
    subtitle: {
      fa: 'پارچه آب‌گریز · آستری کج‌راه مشکی · ادیشن محدود',
      en: 'Water-repellent shell · Black twill lining · Limited Edition',
    },
    price: 9000000,
    inStock: true,
    limitedEdition: true,
    description: {
      fa: 'ترنچ‌کت کلاسیک دِ وند در رنگ مشکی با پارچه آب‌گریز، آستری کج‌راه و دوخت نوار زرشکی در داخل. طراحی یونی‌سکس با برش رها برای روزهای بارانی و پاییزی.',
      en: 'The Vand Trench Coat in deep black, crafted from water-repellent fabric with a black twill lining and subtle internal burgundy piping. Classic unisex proportions.',
    },
    details: {
      fa: [
        'پارچه آب‌گریز با آستری کج‌راه مشکی',
        'نوار زرشکی داخلی',
        'الگوی یونی‌سکس با بسته شدن از چپ به راست',
        'شست‌وشوی خشک (Dry Clean Only)',
      ],
      en: [
        'Water-repellent outer shell with black twill lining',
        'Signature internal burgundy piping',
        'Unisex silhouette with left-side button closure',
        'Dry clean only',
      ],
    },
    colors: [COLORS.black],
    sizes: ['1', '2'],
    images: [
      './images/vand/prod-3465-1.jpg',
      './images/vand/prod-3465-2.jpg',
      './images/vand/prod-3465-3.jpg',
    ],
    packshotIndex: [2],
    focalPoint: 'center 16%',
  },
  {
    id: 'wool-jersey-turtleneck',
    slug: 'wool-jersey-turtleneck',
    category: 'outerwear',
    name: {
      fa: 'یقه اسکی پشمی',
      en: 'Wool Jersey Turtleneck',
    },
    subtitle: {
      fa: '۷۰٪ پنبه · ۳۰٪ پشم · سجاف کشباف ریب',
      en: '70% cotton · 30% wool · Ribbed knit hem',
    },
    price: 5400000,
    inStock: true,
    description: {
      fa: 'بافت یقه اسکی نرم از ترکیب ۷۰ درصد پنبه و ۳۰ درصد پشم با لبه‌های کشباف. طراحی‌شده برای گرمای ملایم، تنفس‌پذیری و ترکیب‌پذیری بی‌دردسر زیر ترنچ‌کت و پیراهن.',
      en: 'Fine wool-and-cotton blend turtleneck finished with a ribbed knit hem. Balanced warmth and breathable softness designed to layer seamlessly beneath outerwear.',
    },
    details: {
      fa: [
        'ترکیب الیاف: ۷۰٪ پنبه، ۳۰٪ پشم',
        'بافت نرم جرسی با سرآستین و لبه کشباف',
        'مناسب پوشش لایه‌ای پاییز و زمستان',
      ],
      en: [
        'Composition: 70% Cotton, 30% Wool',
        'Ribbed knit collar, cuffs, and hem',
        'Warm yet breathable everyday knit',
      ],
    },
    colors: [COLORS.darkBrown, COLORS.gray, COLORS.vandBlue, COLORS.tortilla],
    sizes: ['1', '2'],
    images: [
      './images/vand/prod-424-1.jpg',
      './images/vand/prod-424-2.jpg',
      './images/vand/prod-424-3.jpg',
    ],
    focalPoint: 'center 22%',
  },
  {
    id: 'long-sleeve-striped-shirt',
    slug: 'long-sleeve-striped-shirt',
    category: 'shirts',
    name: {
      fa: 'پیراهن آستین بلند راه‌راه',
      en: 'Long Sleeve Striped Shirt',
    },
    subtitle: {
      fa: 'پنبه کج‌راه باکیفیت · خط‌دار کلاسیک',
      en: 'High-quality cotton twill · Classic fine stripes',
    },
    price: 5600000,
    inStock: true,
    description: {
      fa: 'پیراهن آستین بلند راه‌راه از پنبه کج‌راه نرم و مقاوم. برش استاندارد و راحت برای استفاده روزانه یا استایل رسمی‌تر در تمام فصول.',
      en: 'Tailored from soft, durable cotton twill in classic fine stripes. A balanced standard fit suited to both casual mornings and structured tailoring.',
    },
    details: {
      fa: [
        'جنس: پنبه کج‌راه باکیفیت، نرم و مقاوم',
        'فرم استاندارد و راحت',
        'قابل ترکیب با شلوارهای جین و پارچه‌ای',
      ],
      en: [
        'Material: Soft, durable cotton twill',
        'Standard comfortable fit',
        'Classic stripe pattern for year-round wear',
      ],
    },
    colors: [COLORS.skyBlue, COLORS.tortilla],
    sizes: ['1', '2', '3'],
    images: [
      './images/vand/prod-2739-1.jpg',
      './images/vand/prod-2739-2.jpg',
      './images/vand/prod-2739-3.jpg',
    ],
    focalPoint: 'center 22%',
  },
  {
    id: 'long-sleeve-poloshirt',
    slug: 'long-sleeve-poloshirt',
    category: 'shirts',
    name: {
      fa: 'پولوشرت آستین بلند',
      en: 'Long Sleeve Poloshirt',
    },
    subtitle: {
      fa: 'بافت لطیف روزمره · یقه کلاسیک',
      en: 'Soft everyday knit · Classic collared neckline',
    },
    price: 4600000,
    inStock: true,
    description: {
      fa: 'پولوشرت آستین بلند با برش راحت و یقه کلاسیک، در دو رنگ سبز تیره و نسکافه‌ای برای پوشش روزانه و استایل مینیمال.',
      en: 'Long-sleeve collared poloshirt in rich muted tones, offering an understated bridge between casual knitwear and structured shirting.',
    },
    details: {
      fa: [
        'یقه کلاسیک بدون دکمه یا دکمه‌دار مینیمال',
        'آستین بلند با تن‌خور راحت',
        'رنگ‌ها: سبز تیره و نسکافه‌ای',
      ],
      en: [
        'Relaxed collared silhouette',
        'Long sleeves for transitional weather',
        'Colors: Deep Forest Green and Winter Twig',
      ],
    },
    colors: [COLORS.forestGreen, COLORS.tortilla],
    sizes: ['1', '2', '3'],
    images: [
      './images/vand/prod-2224-1.jpg',
      './images/vand/prod-2224-2.jpg',
      './images/vand/prod-2224-3.jpg',
    ],
    focalPoint: 'center 20%',
  },
  {
    id: 'long-sleeve-tshirt',
    slug: 'long-sleeve-tshirt',
    category: 'tops',
    name: {
      fa: 'تی‌شرت آستین بلند',
      en: 'Long Sleeve T-Shirt',
    },
    subtitle: {
      fa: 'پارچه دورو پنبه · ریلکس فیت',
      en: 'Double-knit cotton · Relaxed fit',
    },
    price: 4600000,
    inStock: true,
    description: {
      fa: 'تی‌شرت آستین بلند ریلکس‌فیت با پارچه دورو پنبه‌ای باکیفیت. سبک، راحت و طراحی‌شده برای پوشش تکی یا لایه‌ای.',
      en: 'Crafted from high-quality double-knit cotton in a relaxed fit with generous sleeves. Ideal worn alone or layered under outerwear.',
    },
    details: {
      fa: [
        'جنس: پارچه دورو پنبه باکیفیت',
        'آستین بلند و آزاد برای راحتی کامل',
        'فرم ریلکس‌فیت مناسب پوشش لایه‌ای',
      ],
      en: [
        'Material: High-quality double-knit cotton',
        'Loose long sleeves for unrestricted comfort',
        'Relaxed fit suited for solo or layered styling',
      ],
    },
    colors: [COLORS.ivory, COLORS.forestGreen, COLORS.black],
    sizes: ['1', '2', '3', '4'],
    images: [
      './images/vand/prod-3489-1.jpg',
      './images/vand/prod-3489-2.jpg',
      './images/vand/prod-3489-3.jpg',
    ],
    focalPoint: 'center 20%',
  },
  {
    id: 'winter-scarf',
    slug: 'winter-scarf',
    category: 'outerwear',
    name: {
      fa: 'شال گردن بافتنی',
      en: 'Winter Scarf',
    },
    subtitle: {
      fa: 'بافت ریب درشت · لیبل بافته THE VAND',
      en: 'Chunky ribbed knit · Woven THE VAND label',
    },
    price: 2800000,
    inStock: true,
    description: {
      fa: 'شال گردن بافتنی هماهنگ با پلیور ریب درشت دِ وند، با ابعاد بلند برای پیچیدن راحت و گرمای زمستانی.',
      en: 'Generously proportioned ribbed knit scarf designed to pair seamlessly with the Chunky Knit Sweater and Trench Coat.',
    },
    details: {
      fa: [
        'بافت ریب عمودی هماهنگ با پلیور بافتنی',
        'رنگ‌ها: طوسی و آبی پروس',
        'دارای لیبل بافته‌شده THE VAND · PROMISE TO SLOW',
      ],
      en: [
        'Pronounced vertical rib knit texture',
        'Colors: Gray and Prussian Blue',
        'Finished with woven THE VAND · PROMISE TO SLOW label',
      ],
    },
    colors: [COLORS.gray, COLORS.prussianBlue],
    sizes: [],
    sizeNote: {
      fa: 'تک‌سایز',
      en: 'One Size',
    },
    images: [
      './images/vand/prod-2210-1.jpg',
      './images/vand/prod-2210-2.jpg',
      './images/vand/prod-2210-3.jpg',
    ],
    focalPoint: 'center 30%',
  },
  {
    id: 'tote-bag-navy',
    slug: 'tote-bag-navy-blue',
    category: 'bags',
    name: {
      fa: 'کیف پارچه‌ای | سرمه‌ای',
      en: 'Tote Bag | Navy Blue',
    },
    subtitle: {
      fa: 'کتان تی‌سی آب‌گریز · ۳۰×۴۰ سانتی‌متر',
      en: 'Water-repellent TC cotton · 30 × 40 cm',
    },
    price: 3500000,
    inStock: true,
    description: {
      fa: 'کیف پارچه‌ای سرمه‌ای از کتان تی‌سی آب‌گریز با دوخت دولایه، بندهای شانه‌ای مقاوم، جیب داخلی و خارجی و قابلیت جمع‌شدن.',
      en: 'Navy blue everyday tote bag in water-repellent TC cotton with double-layer seams, internal and external pockets, and packable construction.',
    },
    details: {
      fa: [
        'کتان تی‌سی آب‌گریز با دوخت دولایه',
        'ابعاد ۳۰ × ۴۰ سانتی‌متر با ۷ سانتی‌متر عطف',
        'جیب داخلی و خارجی + بند جمع‌کننده لبه بالایی',
      ],
      en: [
        'Water-repellent TC cotton, double-layer stitched',
        '30 × 40 cm with 7 cm gusset',
        'One inner pocket, one outer pocket, top drawcord',
      ],
    },
    colors: [COLORS.navy],
    sizes: [],
    images: ['./images/vand/prod-3861-1.jpeg'],
    packshotIndex: [0],
  },
  {
    id: 'tote-bag-blue',
    slug: 'tote-bag-blue',
    category: 'bags',
    name: {
      fa: 'کیف پارچه‌ای | آبی',
      en: 'Tote Bag | Blue',
    },
    subtitle: {
      fa: 'کتان تی‌سی آب‌گریز · آبی دِ وند',
      en: 'Water-repellent TC cotton · Signature Blue',
    },
    price: 3500000,
    inStock: true,
    description: {
      fa: 'کیف پارچه‌ای آبی با بافت کتان تی‌سی آب‌گریز، دوخت دولایه و طراحی کاربردی برای حمل کتاب، لپ‌تاپ و وسایل روزمره.',
      en: 'Signature blue everyday tote crafted from water-repellent TC cotton with reinforced double-layer stitching and dual pockets.',
    },
    details: {
      fa: [
        'پارچه کتان تی‌سی آب‌گریز',
        'ابعاد ۳۰ × ۴۰ سانتی‌متر با ۷ سانتی‌متر عطف',
        'قابل شست‌وشو؛ از اتو کشیدن خودداری شود',
      ],
      en: [
        'Water-repellent TC cotton',
        '30 × 40 cm with 7 cm gusset; packable',
        'Washable; do not iron',
      ],
    },
    colors: [COLORS.vandBlue],
    sizes: [],
    images: ['./images/vand/prod-3782-1.jpg'],
    packshotIndex: [0],
  },
  {
    id: 'tote-bag-black',
    slug: 'tote-bag-black',
    category: 'bags',
    name: {
      fa: 'کیف پارچه‌ای | مشکی',
      en: 'Tote Bag | Black',
    },
    subtitle: {
      fa: 'کتان تی‌سی آب‌گریز · دوخت دولایه',
      en: 'Water-repellent TC cotton · Double-layer',
    },
    price: 3500000,
    inStock: false,
    description: {
      fa: 'نسخه مشکی کیف پارچه‌ای دِ وند؛ طراحی مینیمال با جیب داخلی و خارجی و پارچه آب‌گریز مناسب استفاده روزانه.',
      en: 'Black edition of The Vand packable tote bag in water-repellent TC cotton with double-layer reinforcement.',
    },
    details: {
      fa: [
        'کتان تی‌سی آب‌گریز',
        'ابعاد ۳۰ × ۴۰ × ۷ سانتی‌متر',
        'یک جیب داخلی و یک جیب خارجی',
      ],
      en: [
        'Water-repellent TC cotton',
        '30 × 40 cm with 7 cm gusset',
        'Inner and outer pockets',
      ],
    },
    colors: [COLORS.black],
    sizes: [],
    images: [
      './images/vand/prod-1433-1.jpg',
      './images/vand/prod-1433-2.jpg',
      './images/vand/prod-1433-3.jpeg',
    ],
    focalPoint: 'center 45%',
  },
  {
    id: 'tote-bag-pink',
    slug: 'tote-bag-pink',
    category: 'bags',
    name: {
      fa: 'کیف پارچه‌ای | صورتی',
      en: 'Tote Bag | Pink',
    },
    subtitle: {
      fa: 'کتان تی‌سی آب‌گریز · صورتی روشن',
      en: 'Water-repellent TC cotton · Baby Pink',
    },
    price: 800000,
    inStock: false,
    description: {
      fa: 'کیف پارچه‌ای صورتی روشن از کتان تی‌سی آب‌گریز با دوخت دولایه، سبک و قابل تا شدن.',
      en: 'Baby pink edition of the packable TC cotton tote bag with double-layer seams and front pocket.',
    },
    details: {
      fa: [
        'پارچه کتان تی‌سی آب‌گریز',
        'ابعاد ۳۰ × ۴۰ × ۷ سانتی‌متر',
      ],
      en: [
        'Water-repellent TC cotton',
        '30 × 40 cm with 7 cm gusset',
      ],
    },
    colors: [COLORS.babyPink],
    sizes: [],
    images: [
      './images/vand/prod-3001-1.jpg',
      './images/vand/prod-3001-2.jpeg',
      './images/vand/prod-3001-3.jpeg',
    ],
    focalPoint: 'center 35%',
  },
  {
    id: 'crop-basic-tshirt',
    slug: 'crop-basic-tshirt',
    category: 'tops',
    name: {
      fa: 'کراپ تی‌شرت بیسیک',
      en: 'Crop Basic T-Shirt',
    },
    subtitle: {
      fa: '۱۰۰٪ پنبه · فرم کوتاه با لبه آستین برگردان',
      en: '100% cotton · Cropped cut with rolled cuffs',
    },
    price: 1600000,
    priceMax: 2500000,
    inStock: true,
    description: {
      fa: 'تی‌شرت بیسیک کراپ؛ انتخابی ساده و کاربردی از پنبه صددرصد طبیعی با فرم کوتاه و لبه آستین برگردان برای استایل روزمره.',
      en: 'Cropped everyday basic tee made from 100% cotton with subtle rolled sleeve hems for effortless daily styling.',
    },
    details: {
      fa: [
        'جنس: ۱۰۰٪ پنبه مناسب استفاده روزانه',
        'فرم کوتاه با لبه آستین مدل برگردان',
      ],
      en: [
        'Material: 100% breathable cotton',
        'Cropped silhouette with cuffed sleeves',
      ],
    },
    colors: [
      COLORS.white,
      COLORS.black,
      COLORS.cream,
      COLORS.sageGreen,
      COLORS.navy,
      COLORS.darkBlue,
      COLORS.maroon,
      COLORS.lightSalmon,
    ],
    sizes: ['1', '2'],
    images: [
      './images/vand/prod-4072-1.jpeg',
      './images/vand/prod-4072-2.jpeg',
      './images/vand/prod-4072-3.jpg',
    ],
    focalPoint: 'center 25%',
  },
  {
    id: 'basic-top',
    slug: '100-cotton-basic-top',
    category: 'tops',
    name: {
      fa: 'تاپ بیسیک ۱۰۰٪ پنبه',
      en: '100% Cotton Basic Top',
    },
    subtitle: {
      fa: 'ریب ظریف ۱۰۰٪ پنبه · لطیف و تنفس‌پذیر',
      en: '100% cotton fine rib · Soft & breathable',
    },
    price: 2000000,
    inStock: true,
    description: {
      fa: 'تاپ بیسیک دوخته‌شده از پارچه ریب ظریف ۱۰۰٪ پنبه با کشسانی طبیعی و لطافت بالا برای پوشش روزمره و لایه‌بندی زیر پیراهن.',
      en: 'Made from 100% cotton fine rib — soft, breathable, and naturally stretchy. Essential for everyday layering or solo wear.',
    },
    details: {
      fa: [
        'جنس: ۱۰۰٪ پنبه ریب ظریف',
        'نرم، تنفس‌پذیر و دارای کشسانی طبیعی',
      ],
      en: [
        '100% cotton fine rib knit',
        'Naturally stretchy, soft, and breathable',
      ],
    },
    colors: [COLORS.black, COLORS.white],
    sizes: ['1', '2', '3'],
    images: [
      './images/vand/prod-3219-1.jpg',
      './images/vand/prod-3219-2.jpg',
      './images/vand/prod-3219-3.jpg',
    ],
    focalPoint: 'center 22%',
  },
  {
    id: 'basic-crop-top',
    slug: '100-cotton-basic-crop-top',
    category: 'tops',
    name: {
      fa: 'کراپ تاپ بیسیک ۱۰۰٪ پنبه',
      en: '100% Cotton Basic Crop Top',
    },
    subtitle: {
      fa: 'ریب ظریف ۱۰۰٪ پنبه · تن‌خور لطیف',
      en: '100% cotton fine rib · Cropped length',
    },
    price: 1700000,
    inStock: true,
    description: {
      fa: 'کراپ تاپ بیسیک از پارچه ریب ظریف صددرصد پنبه، نرم و تنفس‌پذیر، مناسب برای پوشیدن روزانه و ست‌شدن با شومیز لینن.',
      en: 'Cropped fine-rib tank made from 100% cotton — soft, breathable, and naturally flexible for everyday dressing.',
    },
    details: {
      fa: [
        'جنس: ۱۰۰٪ پنبه ریب ظریف',
        'نرم و مناسب استفاده روزمره',
      ],
      en: [
        '100% cotton fine rib',
        'Soft, breathable, and naturally stretchy',
      ],
    },
    colors: [COLORS.white, COLORS.black],
    sizes: ['1', '2', '3'],
    images: [
      './images/vand/prod-3220-1.jpg',
      './images/vand/prod-3220-2.jpg',
      './images/vand/prod-3220-3.jpg',
    ],
    focalPoint: 'center 22%',
  },
  {
    id: 'long-sleeve-striped-tshirt',
    slug: 'long-sleeve-striped-tshirt',
    category: 'tops',
    name: {
      fa: 'تی‌شرت آستین بلند راه‌راه',
      en: 'Long Sleeve Striped T-Shirt',
    },
    subtitle: {
      fa: 'دورو پنبه · کرم و طوسی · ریلکس فیت',
      en: 'Double-knit cotton · Cream & Gray · Relaxed fit',
    },
    price: 1600000,
    inStock: false,
    description: {
      fa: 'تی‌شرت آستین بلند راه‌راه کرم و طوسی از پارچه دورو پنبه‌ای سبک و لطیف، با تن‌خور آزاد برای روزهای مختلف سال.',
      en: 'Relaxed-fit long sleeve tee in cream and gray stripes, made from breathable double-knit cotton.',
    },
    details: {
      fa: [
        'جنس: پارچه دورو پنبه باکیفیت',
        'آستین بلند و آزاد در فرم ریلکس‌فیت',
      ],
      en: [
        'High-quality double-knit cotton',
        'Relaxed fit in cream and gray stripes',
      ],
    },
    colors: [COLORS.cream, COLORS.gray],
    sizes: ['1', '2', '3', '4'],
    images: [
      './images/vand/prod-3508-1.jpg',
      './images/vand/prod-3508-2.jpeg',
      './images/vand/prod-3508-3.jpeg',
    ],
    focalPoint: 'center 20%',
  },
  {
    id: 'short-sleeve-double-pocket',
    slug: 'short-sleeve-shirt-double-pocket',
    category: 'shirts',
    name: {
      fa: 'پیراهن دوجیب آستین کوتاه',
      en: 'Short Sleeve Shirt | Double Pocket',
    },
    subtitle: {
      fa: 'دوجیب کاربردی · آستین کوتاه روزمره',
      en: 'Twin chest pockets · Relaxed short sleeve',
    },
    price: 1700000,
    inStock: false,
    description: {
      fa: 'پیراهن آستین کوتاه با دو جیب متقارن در جلو، طراحی‌شده در دو رنگ مشکی و سبز پاستلی برای روزهای گرم و پوشش راحت.',
      en: 'Short-sleeve utility shirt featuring twin chest pockets and an easy boxy drape in Pastel Green and Black.',
    },
    details: {
      fa: [
        'دو جیب کاربردی روی سینه',
        'رنگ‌ها: سبز روشن پاستلی و مشکی',
      ],
      en: [
        'Dual front chest pockets',
        'Available in Pastel Green and Black',
      ],
    },
    colors: [COLORS.pastelGreen, COLORS.black],
    sizes: ['1', '2', '3'],
    images: [
      './images/vand/prod-2217-1.jpg',
      './images/vand/prod-2217-2.jpg',
      './images/vand/prod-2217-3.jpg',
    ],
    focalPoint: 'center 20%',
  },
  {
    id: 'cotton-socks',
    slug: 'cotton-socks',
    category: 'socks',
    name: {
      fa: 'جوراب کش انگلیسی نخی',
      en: 'Ribbed Cotton Socks',
    },
    subtitle: {
      fa: 'بافت کش انگلیسی نخی · ۱۰ رنگ متنوع',
      en: 'Ribbed cotton knit · Ten signature colors',
    },
    price: 460000,
    inStock: true,
    description: {
      fa: 'جوراب ساق‌بلند نخی دِ وند با بافت کش انگلیسی کلاسیک، نرم و تنفس‌پذیر در ده رنگ هماهنگ با پالت رنگی کلکسیون.',
      en: 'Classic ribbed cotton socks in ten curated shades matched to The Vand wardrobe palette, wrapped in our signature paper sleeve.',
    },
    details: {
      fa: [
        'بافت کش انگلیسی نخی نرم و بادوام',
        'تک‌سایز با کشسانی استاندارد',
        'عرضه‌شده با نوار بسته‌بندی کاغذی دِ وند',
      ],
      en: [
        'Soft ribbed cotton knit',
        'One size fits standard adult sizing',
        'Wrapped in The Vand recyclable paper band',
      ],
    },
    colors: [
      COLORS.ivory,
      COLORS.forestGreen,
      COLORS.crimson,
      COLORS.navy,
      COLORS.vandBlue,
      COLORS.prussianBlue,
      COLORS.sageGreen,
      COLORS.balletPink,
      COLORS.charcoal,
      COLORS.black,
    ],
    sizes: [],
    sizeNote: {
      fa: 'تک‌سایز',
      en: 'One Size',
    },
    images: [
      './images/vand/prod-431-1.jpeg',
      './images/vand/prod-431-2.jpeg',
      './images/vand/prod-431-3.jpeg',
    ],
    focalPoint: 'center center',
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
