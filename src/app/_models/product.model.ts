import { BasicData } from "./basicData.model";
import { Category } from "./category.mode";
import { PaymentType } from "./payment-type.model";
import { Tag } from "./tag.model";

export interface Product {
  id?: number;
  basicData: BasicData[];
  price?: number;
  discount?: number;
  paymentTypeMethods: PaymentType[];
  category?: Category;
  tags?: Tag[];
  imgUrls: string[];
}

