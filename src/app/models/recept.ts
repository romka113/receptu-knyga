export interface Recept {
  id?: string;
  likes: number;
  receptName: string;
  cookingTime: number;
  cookingDescription: string;
  photo: string;
  calory: number;
  eatingTime: string;
  alergenai: string[];
  ingriedientName: { productName: string; quantity: string; size: string }[];
}
export interface Ingridient {
  ingridient: { [key: string]: string };
}
