import React, { useContext, useEffect, useState } from "react";
import Moda from "../components/Moda"
import { Outlet } from "react-router-dom";
import ProductsList from "../components/Products/ProductsList";
import GenderGallery from '../components/Gender/GenderGallery'
import { PagesContext } from "../Context/PagesProvider";
import ProductsContext from '../Context/ProductsContext'

function Gender() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])
   const { products } = useContext(ProductsContext)
   const { gallery } = useContext(PagesContext)
   return (
      <>
         <Outlet />
         <GenderGallery />
         <Moda />
         <div className="feture">
            <div className="container">
               <div className="feture__title">
                  <h2>Мы рекомендуем</h2>
                  <span>Обнови гардероб! Покупай товары по нашим рекомендациям</span>
               </div>
            </div>
            <ProductsList products={products} />
         </div>
      </>
   )
}
export default Gender