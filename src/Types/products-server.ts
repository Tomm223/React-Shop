export interface IOrder {
   id?: string
   send: string,
   local: string
   sum: number,
   products: IOrderProducts[]

}
export interface IOrderProducts {
   id: string,
   product_id: string,
   amount: number
}
export interface IBasket {
   id: number,
   amount?: number,
   size?: string,
   product_id: string
}
export interface ILikes {
   id: number,
   amount?: number,
   size?: string,
   product_id: string
}

export interface IUserChange {
   id: string,
   user_id: string,
   order: IOrder[],
   basket: IBasket[],
   likes: ILikes[]
}


export interface IProduct {
   id: string,
   sales: string,
   news: string,
   moda: string,
   brand: string,
   season: string,
   material: string,
   id_product: number,
   filter_name: string,
   product_name: string,
   img_product: string,
   imgs: string[],
   "sales-price": string | number[],
   price: number,
   color: string
}

export type OptionSelect = {
   value: string | number,
   label: string | number
}