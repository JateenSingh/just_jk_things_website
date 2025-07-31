export interface Testimonial {
  id: string;
  customerName: string;
  customerPhoto?: string;
  customerLocation?: string;
  rating: number;
  title: string;
  comment: string;
  productName?: string;
  productImage?: string;
  verified: boolean;
  featured: boolean;
  orderDate?: Date;
  createdAt: Date;
  platform?: 'takealot' | 'amazon' | 'bidorbuy' | 'direct';
}

export interface TestimonialFilter {
  rating?: number;
  featured?: boolean;
  verified?: boolean;
  platform?: string;
  productCategory?: string;
}

export interface TestimonialStats {
  totalReviews: number;
  averageRating: number;
  ratingDistribution: RatingDistribution;
  featuredCount: number;
  verifiedCount: number;
}

export interface RatingDistribution {
  fiveStars: number;
  fourStars: number;
  threeStars: number;
  twoStars: number;
  oneStar: number;
}
