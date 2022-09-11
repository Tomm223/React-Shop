import React from "react";
import { NavLink } from "react-router-dom"
import { IProduct } from "../../Types/products-server";

interface ProdItemProps {
   imgLink: string, name: string, price: number, product: IProduct
}

const ProductsItem: React.FC<ProdItemProps> = ({ imgLink, name, price, product }) => {
   return (
      <NavLink to='/product' state={{ product }} className="product__item">
         <div className="product__item-img">
            <img src={imgLink} alt="" />
         </div>
         <div className="product__item-supp">
            <h3 className="product__item-title">{name}</h3>
            <div className="product__item-text">
               <p>
                  Бренд: <span id="product__color">{product.brand}</span>
               </p>
               <span className="product__item-price">{price} $</span>
            </div>
         </div>

      </NavLink>
   )
}

export default ProductsItem


/*
 <p>
                  Цвет: <span id="product__color">{color}</span>
               </p> */