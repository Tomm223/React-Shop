export interface IProductInitState {
   watchImg: number,
   alert: boolean,
   message: IAlertProductPage,
   alertErr: boolean | string
}

export interface IAlertProductPage {
   id: string,
   img: string,
   name: string,
   price: number,
   branch: string,
   size: string,
   amount: number | string
}


export enum TypesProduct {
   PRODUCT_TO_ACC = 'PRODUCT/TOACC',
   PRODUCT_ALERT_TRUE = 'PRODUCT/ALERT/TRUE',
   PRODUCT_ALERT_ERROR_OPEN = 'PRODUCT/ALERT/ERROR-OPEN',
   PRODUCT_ALERT_ERROR_CLOSE = 'PRODUCT/ALERT/ERROR-CLOSE',
   PRODUCT_ALERT_FALSE = 'PRODUCT/ALERT/FALSE',
   PRODUCT_IMG_CHANGE = "PRODUCT/IMG/CHANGE",
}
export interface IproductActionTrue {
   type: TypesProduct.PRODUCT_ALERT_TRUE,
   payload: IAlertProductPage
}
interface IproductActionError {
   type: TypesProduct.PRODUCT_ALERT_ERROR_OPEN,
   payload: string
}
export interface IproductActionErrorClose {
   type: TypesProduct.PRODUCT_ALERT_ERROR_CLOSE
}
export interface IproductActionFalse {
   type: TypesProduct.PRODUCT_ALERT_FALSE
}
interface IproductActionImg {
   type: TypesProduct.PRODUCT_IMG_CHANGE,
   payload: number
}
export type ActionTypeProduct = IproductActionTrue | IproductActionFalse
   | IproductActionImg | IproductActionError | IproductActionErrorClose