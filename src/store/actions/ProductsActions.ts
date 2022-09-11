import React, { Dispatch } from "react";
import { GetAxios } from "../../Fetch/Fetching";
import { CheckFilterType, FilterCataloge_filterName, inn } from "../../Filtres/ProductSelections";
import { TypesProducts, TypesProductsAction } from "../../Types/product/Products";
import { IProduct } from "../../Types/products-server";
import { PRODUCTS_FILTER, PRODUCTS_INIT } from "../Types";

export function ProductsInit(products: IProduct[]) {
   return {
      type: TypesProducts.PRODUCTS_INIT,
      payload: products
   }
}

export function ProductsFiltered(filterStr: string) {
   return async (dispatch: Dispatch<TypesProductsAction>) => {
      const filter = await FilterCataloge_filterName(filterStr)

      dispatch({
         type: TypesProducts.PRODUCTS_FILTER,
         payload: filter
      })

   }
}
export function CollectionsFiltered(filter: string) {
   return async function (dispatch: Dispatch<TypesProductsAction>) {
      const massFilter = await CheckFilterType(filter)
      console.log("s,mgro[rotjobmtro", massFilter);

      dispatch({
         type: TypesProducts.PRODUCTS_FILTER,
         payload: massFilter
      })
   }
}