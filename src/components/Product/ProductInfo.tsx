import React, { FC } from "react";
import { IProduct } from "../../Types/products-server";

interface Props {
   product: IProduct
}

const ProductInfo: FC<Props> = ({ product }) => {

   return (
      <div className="profile__info">
         <div className="profile__info-title">
            <h2>Информация о Товаре:</h2>
         </div>
         <div className="profile__info-block">
            <ul className="profile__info-list">
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Материал: <span id="product__material">{product.material}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Бренд: <span id="product__brand">{product.brand}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Цвет: <span id="product__cvet">{product.color}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Материал: <span id="product__material">{product.material}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Бренд: <span id="product__brand">{product.brand}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Цвет: <span id="product__cvet">{product.color}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Материал: <span id="product__material">{product.material}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Бренд: <span id="product__brand">{product.brand}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Цвет: <span id="product__cvet">{product.color}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Материал: <span id="product__material">{product.material}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Бренд: <span id="product__brand">{product.brand}</span>
                  </p>
               </li>
               <li className="profile__info-item">
                  <p className="profile__info-text">
                     Цвет: <span id="product__cvet">{product.color}</span>
                  </p>
               </li>

            </ul>
         </div>
      </div>
   )
}

export default ProductInfo