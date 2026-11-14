export interface StyledLook {
  id: string;
  number: string;
  image: string;
  focalPoint?: string;
  title: {
    fa: string;
    en: string;
  };
  caption: {
    fa: string;
    en: string;
  };
  note: {
    fa: string;
    en: string;
  };
  productIds: string[];
}

export const STYLED_LOOKS: StyledLook[] = [
  {
    id: 'look-rain-knit',
    number: '01',
    image: './images/vand/prod-2210-1.jpg',
    focalPoint: 'center 25%',
    title: {
      fa: 'لایه‌بندی پاییزی · ترنچ و بافت',
      en: 'Autumn Layering · Trench & Rib Knit',
    },
    caption: {
      fa: 'ترنچ کت آبی کله‌غازی روی پلیور ریب درشت و شال‌گردن طوسی',
      en: 'Dark Teal Trench Coat layered over Chunky Rib Sweater and Winter Scarf',
    },
    note: {
      fa: 'ترکیبی متعادل از بافت حجیم زمستانی و لایه‌ی رویی آب‌گریز برای روزهای متغیر شهر.',
      en: 'A quiet study in tactile contrast — water-repellent outer drape meeting voluminous vertical knitwear.',
    },
    productIds: ['trench-coat-dark-teal', 'chunky-knit-sweater', 'winter-scarf'],
  },
  {
    id: 'look-structured-monochrome',
    number: '02',
    image: './images/vand/prod-3465-1.jpg',
    focalPoint: 'center 18%',
    title: {
      fa: 'ساختار و حرکت · مشکی و راه‌راه',
      en: 'Poise & Proportion · Black Trench & Stripe',
    },
    caption: {
      fa: 'ترنچ کت مشکی روی پیراهن آستین بلند راه‌راه پنبه‌ای',
      en: 'Black Trench Coat worn open over Long Sleeve Striped Shirt',
    },
    note: {
      fa: 'خطوط کلاسیک پیراهن راه‌راه زیر برش یونی‌سکس و آزاد ترنچ کت، تعادلی میان رسمیت و راحتی می‌سازد.',
      en: 'Classic cotton twill stripes soften the unisex volume of the black trench coat for effortless everyday poise.',
    },
    productIds: ['trench-coat-black', 'long-sleeve-striped-shirt'],
  },
  {
    id: 'look-everyday-cotton',
    number: '03',
    image: './images/vand/prod-3001-1.jpg',
    focalPoint: 'center 30%',
    title: {
      fa: 'سبک و همراه · پنبه و کیف روزمره',
      en: 'Light Carry · Everyday Cotton & Tote',
    },
    caption: {
      fa: 'تی‌شرت و تاپ نخی روزمره همراه با کیف پارچه‌ای کتان آب‌گریز',
      en: '100% Cotton Basic Tee paired with Water-Repellent Packable Tote Bag',
    },
    note: {
      fa: 'قطعات ساده‌ای که برای حرکت روزانه طراحی شده‌اند؛ سبک، تنفس‌پذیر و کاربردی.',
      en: 'Simple essentials shaped for unhurried daily movement — breathable cotton paired with a packable carryall.',
    },
    productIds: ['basic-cotton-tshirt', 'tote-bag-pink', 'tote-bag-tortilla'],
  },
  {
    id: 'look-linen-socks',
    number: '04',
    image: './images/vand/look-sand-shirt.jpg',
    focalPoint: 'center 15%',
    title: {
      fa: 'نور ملایم · لینن سفید و جزئیات روزمره',
      en: 'Quiet Daylight · Linen & Ribbed Socks',
    },
    caption: {
      fa: 'پیراهن آستین بلند لینن در کنار جوراب کش انگلیسی نخی',
      en: 'Long Sleeve Linen Shirt styled with Ribbed Cotton Socks',
    },
    note: {
      fa: 'سادگی سنجیده؛ وقتی بافت طبیعی پارچه و تناسب برش به‌تنهایی زبان تصویر می‌شوند.',
      en: 'Restrained everyday dressing where natural linen drape and classic ribbed cotton details speak quietly.',
    },
    productIds: ['ladies-linen-shirt', 'cotton-socks'],
  },
];
