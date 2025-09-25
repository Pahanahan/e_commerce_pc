export interface UserCart {
  id: number;
  quantity: number;
}

export interface DiscountCode {
  discountName: string;
  discount: number;
}

export interface User {
  login: string;
  password: string;
  discountCode: DiscountCode;
  likes: number[];
  cart: UserCart[];
}

export type Specs = Record<string, string>;

export interface Product {
  id: number;
  brand: string;
  category: string;
  price: number;
  rating: number;
  title: string;
  availability: string;
  images: string[];
  reviewsCount: number;
  description: string;
  oldPrice?: number | null;
  image?: string;
  specs: Specs;
}

export type CurrentPage = number;
export type PageShowProducts = number | string;

export type SortOption =
  | "Position"
  | "Name"
  | "Price Lower"
  | "Price Higher"
  | "Rating";

export enum SortOptionsEnum {
  POSITION = "Position",
  NAME = "Name",
  PRICE_HIGHER = "Price Higher",
  PRICE_LOWER = "Price Lower",
  RATING = "Rating",
}

export interface Filters {
  category?: string;
  price?: string;
  brand?: string;
}

export interface Products {
  allProducts: Product[];
  filtersDraft: Filters;
  filtersApplied: Filters;
  pageShowProducts: PageShowProducts;
  currentPage: CurrentPage;
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

export enum LikeOrCart {
  LIKE = "like",
  CART = "cart",
}

export enum GridOrList {
  GRID = "grid",
  LIST = "list",
}

export enum StandardOrPickup {
  STANDARD = "standard",
  PICKUP = "pickup",
}
