import { ProductType } from "./ProductType";

export type CartType = ProductType & {
  quantity: number;
};
