export interface Recept {
  id?: String;
  receptName: string;
  cookingTime: number;
  cookingDescription: string;
  photo: string;
  calory: number;
  alergenai: string[];
  ingridientName: { productName: string; kiekis: string; vnt: string }[];
}
