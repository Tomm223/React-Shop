export enum TypesAccProductsChange {
   basket = 'basket',
   order = 'order',
   likes = 'likes',
}

export type TypeBuldBodyAccKey = TypesAccProductsChange.basket | TypesAccProductsChange.likes | TypesAccProductsChange.order
