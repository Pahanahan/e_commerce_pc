export interface User {
  login: string;
  password: string;
  likes: number[];
  cart: number[];
}

export interface Product {
  id: number;
  brand: string;
  category: string;
  price: number;
  rating: number;
  availability: string;
  images: string[];
  reviewsCount: number;
  description: string;
  oldPrice?: number | null;
  image?: string;
}

export type CurrentPage = number;
export type PageShowProducts = number | string;
export type SortOption = string;

export interface Filters {
  category?: string;
  price?: string;
  brand?: string;
}

export interface Products {
  allProducts: Product[];
  currentPage: CurrentPage;
  filtersDraft: Filters;
  filtersApplied: Filters;
  pageShowProducts: PageShowProducts;
  sortOption: SortOption;
}

export interface Login {
  isLogedIn: string;
  users: User[];
}

export interface State {
  products: Products;
  login: Login;
}

export enum NewPage {
  NEXT = "next",
  PREV = "prev",
  DOTS = "...",
}
