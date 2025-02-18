export interface OTPProps {
  data: {
    code: string;
    expirationTime: Date;
    attempts: number;
    phone: string;
  };
}

export interface HeroBannerProps {
  bannerData: {
    bannerImage: string;
    altText: string;
    url: string;
  }[];
}

export interface ImageCardProps {
  imageUrl: string;
  altText: string;
  bgColor: string;
}
export interface CategoryCardProps {
  imgData?: ImageCardProps;
  name: string;
}

export interface ProfileProps {
  id: number;
  data: any;
  onUpdate: (data: any) => void;
}

export interface logoProps {
  logo?: string; // Optional logo URL
  clientLogo?: string; // Optional client-specific logo URL
  clientName?: string; // Optional client name
  companyName: string; // Company name (required for alt text)
  className?: string; // Optional custom classes for styling
}
