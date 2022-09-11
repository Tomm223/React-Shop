import React from "react";
import { Interface } from "readline";
import { ActionTypeProduct, IProductInitState, TypesProduct } from "../../Types/product/productPage";
import { PRODUCT_ALERT_FALSE, PRODUCT_ALERT_TRUE, PRODUCT_IMG_CHANGE } from "../Types";


const initialState: IProductInitState = {
   watchImg: 0,
   alert: false,
   message: {
      id: '',
      img: '',
      name: '',
      price: 0,
      branch: '',
      size: '',
      amount: ''
   },
   alertErr: false
}

export function ProductReducer(state = initialState, action: ActionTypeProduct): IProductInitState {
   switch (action.type) {
      case TypesProduct.PRODUCT_ALERT_TRUE:
         return { ...state, alert: true, message: action.payload };
      case TypesProduct.PRODUCT_ALERT_ERROR_OPEN:
         return { ...state, alertErr: action.payload, };
      case TypesProduct.PRODUCT_ALERT_ERROR_CLOSE:
         return { ...state, alert: false, };
      case TypesProduct.PRODUCT_ALERT_FALSE:
         return { ...state, alert: false }
      case TypesProduct.PRODUCT_IMG_CHANGE:
         return {
            ...state, watchImg: action.payload, message: {
               id: '',
               img: '',
               name: '',
               price: 0,
               branch: '',
               size: '',
               amount: ''
            }
         }
      default: return state
   }
}