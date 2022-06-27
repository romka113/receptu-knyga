export interface Recept {
  id?: String;
  receptName: string;
  cookingTime: number;
  cookingDescription: string;
  photo: string;
  calory: number;
  eatingTime: string;
  alergenai: string[];
  ingriedientName: { productName: string; quantity: string; size: string }[];
}
