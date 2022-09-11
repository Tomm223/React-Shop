import React, { useContext, useState, useEffect } from "react";
import { IProduct } from "../../Types/products-server";
import { LoadingDefault } from "../UI/Loading/Loadings";
import ProductsItem from "./ProductsItem";

const flexCenter = {
   display: "flex",
   justifyContent: "center"
}

interface ProdListProps {
   products: IProduct[] | null
}

const ProductsList: React.FC<ProdListProps> = ({ products }) => {
   const [productTimeOut, setProductTimeOut] = useState(true)
   var i = 0
   useEffect(() => {
      setProductTimeOut(true)
      MadeLoad()

   }, [products])
   useEffect(() => {
      MadeLoad()
   }, [])
   function MadeLoad() {
      return setTimeout(() => {
         setProductTimeOut(false)
      }, 1000)
   }
   /* */
   console.log(products);

   return (
      <div>
         <div className="product">
            <div className="container">
               <div className="product__block">
                  {!productTimeOut
                     ?
                     products &&
                     products.map((item: IProduct) => {
                        return (<ProductsItem product={item} key={item.id} imgLink={item.img_product}
                           name={item.product_name} price={item.price} />)

                     })
                     :
                     <div className="flexCenter" style={flexCenter}>
                        <LoadingDefault />
                     </div>

                  }
               </div>
            </div>
            <div className="product-btn">
               <input className="product-btn__item" type="button" value="Загрузить ещё" />
            </div>
         </div>
      </div >
   )
}
export default ProductsList