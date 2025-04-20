
export type ProductTag = 'популярный' | 'акция' | 'новинка';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  tags?: ProductTag[];
}

export interface Filter {
  name: string;
  options: string[];
}
