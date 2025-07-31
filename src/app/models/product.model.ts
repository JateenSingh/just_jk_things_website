export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  images: ProductImage[];
  category: ProductCategory;
  materials: Material[];
  colors: Color[];
  sizes: Size[];
  tags: string[];
  isCustomizable: boolean;
  printTime: number; // in hours
  weight: number; // in grams
  dimensions: Dimensions;
  inStock: boolean;
  stockQuantity: number;
  takealotUrl?: string;
  amazonUrl?: string;
  bidorbuyUrl?: string;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  parentId?: string;
}

export interface Material {
  id: string;
  name: string;
  code: string;
  description: string;
  properties: MaterialProperty[];
  color: string;
  priceMultiplier: number;
}

export interface MaterialProperty {
  name: string;
  value: string;
  unit?: string;
}

export interface Color {
  id: string;
  name: string;
  hexCode: string;
  isAvailable: boolean;
  priceMultiplier: number;
}

export interface Size {
  id: string;
  name: string;
  dimensions: Dimensions;
  priceMultiplier: number;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: string; // mm, cm, inches
}

export interface ProductFilter {
  categories: string[];
  materials: string[];
  priceRange: PriceRange;
  colors: string[];
  inStockOnly: boolean;
  customizableOnly: boolean;
  searchTerm: string;
  sortBy: SortOption;
  sortOrder: "asc" | "desc";
}

export interface PriceRange {
  min: number;
  max: number;
}

export enum SortOption {
  NAME = "name",
  PRICE = "price",
  RATING = "rating",
  CREATED_DATE = "createdAt",
  POPULARITY = "popularity",
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  customerEmail: string;
  rating: number;
  title: string;
  comment: string;
  verified: boolean;
  helpful: number;
  createdAt: Date;
  images?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedMaterial?: Material;
  selectedColor?: Color;
  selectedSize?: Size;
  customizations?: CustomizationOption[];
  totalPrice: number;
}

export interface CustomizationOption {
  id: string;
  name: string;
  type: "text" | "color" | "size" | "file";
  value: string;
  additionalCost: number;
}
