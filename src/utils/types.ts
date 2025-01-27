export interface MenuItem {
  id: number;
  meal: string;
  price: number;
  instructions: string;
  img: string;
  category: string;
}

export type Theme = "light" | "dark";