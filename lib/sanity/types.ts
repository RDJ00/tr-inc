export interface SanityImageAsset {
  _id: string;
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    };
  };
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface EventData {
  _id: string;
  title: string;
  slug: SanitySlug;
  date: string; // ISO Date string
  endDate?: string;
  location: string;
  shortDescription: string;
  fullDescription?: any[];
  image: SanityImage;
  status: 'upcoming' | 'past' | 'cancelled';
  tags?: string[];
  registerLink?: string;
}