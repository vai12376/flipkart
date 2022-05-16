/** @format */

export interface IProductData {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: IRating;
}
export interface IRating {
  rate: number;
  count: number;
}
