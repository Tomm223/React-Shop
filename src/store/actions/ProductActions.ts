
import { Dispatch } from "react";
import { GetAxios } from "../../Fetch/Fetching";
import { ActionTypeProduct, IAlertProductPage, IproductActionErrorClose, IproductActionFalse, IproductActionTrue, TypesProduct } from "../../Types/product/productPage";
import { PRODUCT_ALERT_FALSE, PRODUCT_ALERT_TRUE, PRODUCT_IMG_CHANGE } from "../Types";



export function productToAcc(prod: any, change: string) {
   return async function (dispatch: Dispatch<ActionTypeProduct>) {
      const productArr = await GetAxios(`products?id=${prod.product_id}`)
      const product = productArr[0]
      const alertProps = {
         id: Date.now().toString(),
         img: product.img_product,
         name: product.product_name,
         price: product.price,
         branch: change,
         size: prod.size,
         amount: prod.amount
      }
      dispatch(productShowAlert(alertProps))
      setTimeout(() => {
         dispatch(productHideAlert())
      }, 3000)
   }
}


export function productShowAlert(alertProps: IAlertProductPage) {
   const body: IproductActionTrue = {
      type: TypesProduct.PRODUCT_ALERT_TRUE,
      payload: alertProps
   }

   return body
}

export function productHideAlert() {
   return {
      type: TypesProduct.PRODUCT_ALERT_FALSE
   } as IproductActionFalse
}

export function productImgChange(num: number) {
   return {
      type: TypesProduct.PRODUCT_IMG_CHANGE,
      payload: num
   }

}

export function productShowError(str: string) {
   return (dispatch: Dispatch<ActionTypeProduct>) => {
      dispatch({
         type: TypesProduct.PRODUCT_ALERT_ERROR_OPEN,
         payload: str
      })
      setTimeout(() => {
         dispatch(productHideError())
      }, 1500)
   }
}
export function productHideError() {
   const body: IproductActionErrorClose = {
      type: TypesProduct.PRODUCT_ALERT_ERROR_CLOSE,
   }

   return body
}