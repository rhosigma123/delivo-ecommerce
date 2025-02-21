import { ReactElement, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  icon?: ReactElement;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

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
  offer?: boolean;
}

export interface CategoryCardProps {
  data: {
    id: number;
    image: string;
    slug: string;
    name: string;
  };
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

export interface Subcategory {
  id: number;
  name: string;
  image: string | null;
}

export interface SubcategoryList {
  id: number;
  name: string;
  type: string;
  Product: Product[];
}

export interface Category {
  id: number;
  name: string;
  Subcategory: Subcategory[];
}

export interface SKU {
  id: number;
  images: string[];
  name: string | null;
  size: string;
  moq: number;
  mrp: number;
  retail: number;
  discount: number;
}

export interface Product {
  id: number;
  name: string;
  uom: string | null;
  status: string;
  sponsored: boolean;
  SKU: SKU[];
}
