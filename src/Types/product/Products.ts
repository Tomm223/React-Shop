import { IProduct } from "../products-server"

export interface IProductsInitState {
   products: IProduct[] | null,
   filter: IProduct[] | null
}
export enum TypesProducts {
   PRODUCTS_INIT = "PRODUCTS/INIT",
   PRODUCTS_FILTER = 'PRODUCTS/FILTER'
}


interface IActionProductsProdChange {
   type: TypesProducts.PRODUCTS_INIT,
   payload: IProduct[]
}
interface IActionProductsFiltChange {
   type: TypesProducts.PRODUCTS_FILTER,
   payload: IProduct[]
}
export type TypesProductsAction = IActionProductsProdChange | IActionProductsFiltChange