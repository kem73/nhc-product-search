interface Review {
    rating: number;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: string;
    stock: number;
    reviews: Review[];
    brand: string;
    discountPercentage: number;
    images: string[];
    category: string;
}
  
export interface GetListingsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  