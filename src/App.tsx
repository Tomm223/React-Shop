import React, { useState, useContext, useEffect, useMemo, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from 'react-responsive'
//pages
import Layout from "./Layout"
import Account from "./pages/Account"
import Registration from "./pages/Registration"
import FormGet from "./components/Registration/FormGet"
import FormPost from "./components/Registration/FormPost"
//cataloge
import Cataloge from "./pages/Cataloge"

import Gender from "./pages/Gender"
import Product from "./pages/Product"
import Welcome from "./components/Welcome"
//context
import { PagesContext } from "./Context/PagesProvider"
import ProductsContext from "./Context/ProductsContext"
//acc
import AccountProvider from "./Context/AccountProvider"
import AccountBasket from "./components/Account/AccountBasket"
import AccountInfo from "./components/Account/AccountInfo"
import AccountLikes from "./components/Account/AccountLikes"
import AccountZakaz from "./components/Account/AccountZakaz"
import AccountZakazMore from "./components/Account/AccountZakazMore"
//hoc
import { ReqAuthAcc, ReqAuthReg } from "./hoc/ReqAuth"
import AccountChange from "./hoc/AccountChange"
//Redux
import { StateInit } from "./store/actions/UserActions"
import { useWindowSize } from './hook/useWindowSize'
import { IProduct } from "./Types/products-server"
import { ProductsInit } from "./store/actions/ProductsActions"

function App() {

   //gender gallery
   const { usGetGalleryGen } = useContext(PagesContext)
   useEffect(() => {
      if (!localStorage.getItem('GenderGallery')) {

         fetch("http://localhost:3000/GalleryProduct")
            .then(data => data.json())
            .then(data => usGetGalleryGen(data))
      }

   }, [])


   //products
   //<null | string | IProduct[]>

   const StorageProduct = localStorage.getItem('products')
   const getProduct = () => StorageProduct ? StorageProduct : "null"
   const [products, setProducts] = useState(JSON.parse(getProduct()))
   const [compliteLStorage, setCompliteLStorage] = useState('')
   useEffect(() => {
      if (products == null) {
         setProducts(JSON.parse(getProduct()))
      }
      else {
         dispatch(ProductsInit(products))
      }
   }, [products])
   const giveLocalProduct = () => {
      setProducts(JSON.parse(getProduct()))
   }
   // state init
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(StateInit())
   }, [])
   useEffect(() => {
      if (!products || products == 'null') {
         fetch("http://localhost:3000/products")
            .then(data => data.json())
            .then(data => localStorage.setItem('products', JSON.stringify(data)))
            .then(data => setProducts((prev: any) => prev = "null"))
            .then(giveLocalProduct)
      }

   }, [])


   return (
      <div className={`App`}>
         <ProductsContext.Provider value={{ products }}>
            <AccountProvider>
               <Routes>
                  <Route path="/" element={< Layout />}>
                     <Route index element={< Welcome />} />
                     < Route path="product" element={< Product />} />
                     < Route path="men/" element={< Gender />} />
                     < Route path="women/" element={< Gender />} />
                     < Route path="cataloge/" element={< Cataloge />} />
                  </Route>
               </Routes>
               < Routes >
                  <Route path="/account/" element={
                     < ReqAuthAcc >
                        <Account />
                     </ReqAuthAcc>
                  } >
                     <Route path="info" element={< AccountInfo />} />
                     < Route path="basket" element={< AccountBasket />} />
                     < Route path="likes" element={< AccountLikes />} />
                     < Route path="zakaz" element={< AccountZakaz />} />
                     < Route path="zakaz/more" element={< AccountZakazMore />} />
                  </Route>
               </Routes>
               < Routes >
                  <Route path="/registration/" element={
                     < ReqAuthReg >
                        <Registration />
                     </ReqAuthReg>
                  } >
                     <Route path="post" element={< FormPost />} />
                     < Route path="get" element={< FormGet />} />
                  </Route>
               </Routes>
            </AccountProvider>
         </ProductsContext.Provider>


      </div>
   );
}

export default App;