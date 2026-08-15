export type Hotel = {
  slug: string;
  name: string;
  destination: string;
  short: string;
  image: string;
  phone?: string;
  whatsapp?: string;
};

export const bookingUrl = 'https://lavendishleisure.com/booking/';
export const contactUrl = 'https://lavendishleisure.com/contact/';

// Public hotel facts are sourced from lavendishleisure.com. Contact numbers can be
// filled hotel-by-hotel once the members app moves from preview to production.
export const hotels: Hotel[] = [
  { slug: 'grand-tamarind-lake', name: 'Grand Tamarind Lake', destination: 'Kataragama', short: 'A relaxed lakeside escape close to the spirit and nature of Kataragama.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-tamarind-lifestyle', name: 'Lavendish Tamarind Lifestyle', destination: 'Sri Lanka', short: 'A warm Lavendish stay designed for easy, comfortable local getaways.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-wild-safari', name: 'Lavendish Wild Safari', destination: 'Wasgamuwa', short: 'A nature-led stay for wildlife weekends and memorable family adventures.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-okrin-hotel', name: 'Lavendish Okrin Hotel', destination: 'Kataragama', short: 'Comfort and convenience for a meaningful Kataragama journey.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-lake-giritale', name: 'Lavendish Lake Giritale', destination: 'Giritale', short: 'Calm lake views, heritage country and an unhurried escape.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-beach-resort', name: 'Lavendish Beach Resort', destination: 'Southern Coast', short: 'An easy coastal holiday with the warmth of Lavendish hospitality.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-wild-wilpattu', name: 'Lavendish Wild Wilpattu', destination: 'Wilpattu', short: 'Stay close to the wild with a comfortable base for Wilpattu adventures.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'miridiya-lake-resort', name: 'Miridiya Lake Resort', destination: 'Anuradhapura', short: 'A peaceful lakeside base for heritage, family and pilgrimage journeys.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-country-resort', name: 'Lavendish Country Resort', destination: 'Cultural Triangle', short: 'Country calm with easy access to some of Sri Lanka’s most loved heritage experiences.', image: '/brand/hotel-placeholder.svg' },
  { slug: 'lavendish-hills-kandy', name: 'Lavendish Hills Kandy', destination: 'Kandy', short: 'A hill-country stay close to Kandy’s culture, colour and mountain atmosphere.', image: '/brand/hotel-placeholder.svg' }
];

export const offers = [
  { tag: 'FAMILY', title: 'School Holiday Escape', copy: 'More time together, less planning. Discover family-ready Lavendish stays.', href: bookingUrl },
  { tag: 'WEEKEND', title: 'Weekend Escape', copy: 'Turn a free weekend into a beautiful two-day break.', href: bookingUrl },
  { tag: 'SEASONAL', title: 'Kandy Season', copy: 'Stay close to the colour and tradition of Kandy’s most celebrated season.', href: bookingUrl }
];
