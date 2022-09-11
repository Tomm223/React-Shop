import React, { FC } from "react";
import { IProduct } from "../../Types/products-server";
import ProductAddForm from "./ProductAddForm";

interface AddProps {
   product: IProduct
}

const ProductAdd: FC<AddProps> = ({ product }) => {
   return (
      <div className="profile__buy">
         <ul className="profile__list">
            <li className="profile__list-item">
               <div className="profile__list-block">
                  <h3 className="profile__name" id="product__name">
                     {product.product_name} <span id="product__brand">{product.brand}</span>
                  </h3>
               </div>
            </li>
            <li className="profile__list-item">
               <div className="profile__list-block">
                  <h4>
                     Цена: <span id="product__price">{product.price}</span>$
                  </h4>
               </div>
            </li>
            <li className="profile__list-item">
               <div className="profile__list-block">
                  <h4>Цвет: <span id="product__cvet">{product.color}</span></h4>
               </div>
            </li>
            <li className="profile__list-item">
               <div className="profile__list-block">
                  <ProductAddForm product={product} />
               </div>
            </li>
         </ul>
      </div>
   )
}

export default ProductAdd