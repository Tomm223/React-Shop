import React, { useState } from "react";
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { useWindowSize } from '../hook/useWindowSize'

import { PagesContext } from "../Context/PagesProvider";
import ProductsContext from "../Context/ProductsContext";
import { CollectionsFiltered, ProductsFiltered } from "../store/actions/ProductsActions";
import ProductsList from "../components/Products/ProductsList";
import CatalogeFilter from "../components/Cataloge/CatalogeFilter";
import { CatalogeSearchResponsive } from "../components/UI/Search/Search";
import { useTypeSelector } from "../hook/useTypeSelector";
import { IProduct } from "../Types/products-server";
import CatalogeFilterList from "../components/Cataloge/CatalogeFilterList";
import CatalogeIntro from "../components/Cataloge/CatalogeIntro";
import { TypesSearch } from "../Types/search/search";
function Cataloge() {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon } = useWindowSize()

   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])

   const location = useLocation()
   console.log(location);

   const dispatch = useDispatch()
   const FilterProducts = useTypeSelector(state => state.products.filter)

   // input value
   const [searchParams, setSearchParams] = useSearchParams()
   const QueryProducts: string | boolean = searchParams.get('products') || false
   const QueryCollection: string | boolean = searchParams.get('collection') || false
   console.log("QUERYPROD: ", QueryProducts);
   // search in SearchInput in HEADER
   useEffect(() => {
      console.log('collectionAOPFNIEOEO', QueryCollection);
      if (QueryCollection) {
         dispatch(CollectionsFiltered(QueryCollection))
      }
   }, [QueryCollection, QueryProducts])
   // search in SearchInput in HEADER
   useEffect(() => {
      const func = async () => {
         if (QueryProducts) {
            console.log('АЛОХА');

            dispatch(ProductsFiltered(QueryProducts))
         }
      }
      func()
   }, [QueryProducts])



   return (
      <>
         {!minLabTop &&
            <CatalogeSearchResponsive />
         }

         <CatalogeIntro />
         <CatalogeFilterList />
         <div className="feture">
            <div className="container">
               <div className="feture__how">
                  <p>Найдено товаров: <span>{FilterProducts && FilterProducts.length}</span></p>
               </div>
            </div>
            <ProductsList products={FilterProducts} />
         </div>
      </>
   )
}
export default Cataloge 