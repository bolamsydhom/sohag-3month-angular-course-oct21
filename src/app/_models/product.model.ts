import { data } from "./data.model";
import { Category } from "./category.mode";
import { PaymentType } from "./payment-type.model";
import { Tag } from "./tag.model";

export interface Product {
  id?: number;
  data: data[];
  price?: number;
  discount?: number;
  paymentTypeMethods: PaymentType[];
  categoryId?: number;
  tags?: Tag[];
  imagesUrls: string[];
  relatedProductsIds?: number[];

}

