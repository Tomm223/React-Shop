import React from "react";
import { NavLink } from 'react-router-dom'
import { IProduct } from "../../Types/products-server";

interface MoreListImgProps {
   product: IProduct,
   amount: number
}

const AccountZakazMoreListItem: React.FC<MoreListImgProps> = ({ product, amount }) => {
   return (
      <NavLink to="/product" state={{ product }}>
         <div className="zakaz-more__list-item zakaz-more__product">
            <div className="zakaz-more__product-blockImg">
               <img src={product.img_product} className="zakaz-more__product-img" />
            </div>
            <div className="zakaz-more__product-blockSupp">
               <div className="">
                  <p id="product__name">{product.product_name}</p>
                  <p>Бренд: <span id="product__brand">{product.brand}</span></p>
               </div>
               <div>
                  <p>Цвет: <span id="product__color">{product.color}</span></p>
               </div>
            </div>
            <div className="zakaz-more__product-priceCall">
               <p>Цена: <span id="product__price">{product.price}</span> $</p>
               <p>Колличество: x<span id="product__call">{amount}</span></p>
            </div>
         </div>
      </NavLink>

   )
}
export default AccountZakazMoreListItem