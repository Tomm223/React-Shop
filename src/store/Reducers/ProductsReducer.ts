import React from "react";
import { IProductsInitState, TypesProducts, TypesProductsAction } from "../../Types/product/Products";

const initialState: IProductsInitState = {
   products: [],
   filter: []
}

export function ProductsReducer(state = initialState, action: TypesProductsAction): IProductsInitState {
   switch (action.type) {
      case TypesProducts.PRODUCTS_INIT:
         return { ...state, products: action.payload }
      case TypesProducts.PRODUCTS_FILTER:
         return { ...state, filter: action.payload }
      default: return state
   }
}