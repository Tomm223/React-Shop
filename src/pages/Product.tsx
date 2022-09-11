import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moda from "../components/Moda";
import ProductSuppImg from "../components/Product/ProductSuppImg";
import { PagesContext } from "../Context/PagesProvider";
import { AddProduct } from "../Fetch/Fetching"
import { useForm, Controller } from 'react-hook-form'
import { SelectReact, BuildOptionsSelect, ParamsForm } from "../components/UI/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { AlertToAccount } from "../components/UI/Product/AlertChange";
import { productImgChange, productToAcc } from "../store/actions/ProductActions";
import { AlertDefault } from "../components/UI/Alerts/Alerts";
import { useTypeSelector } from "../hook/useTypeSelector";
import { ILocation } from "../Types/pages/pageLocation";
import { TypesAccProductsChange } from "../Types/fetch/buildBody";
import ProductInfo from "../components/Product/ProductInfo";
import ProductPhotos from "../components/Product/ProductPhotos";
import ProductAdd from "../components/Product/ProductAdd";

const Product: React.FC = () => {
   // redux state 
   const alertBool = useTypeSelector(state => state.product.alert)
   const alertDef = useTypeSelector(state => state.product.alertErr)

   const dispatch = useDispatch()

   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()

   }, [])

   // Product-DATA      |GET|
   const location = useLocation() as ILocation
   const product = location.state.product



   return (
      <>
         {alertDef && <AlertDefault state={alertDef} />}
         <div className="profile">
            {alertBool && <AlertToAccount />}
            <div className="container">
               <div className="profile__block">
                  <ProductPhotos imgs={product.imgs} />
                  <ProductAdd product={product} />
               </div>
               <ProductInfo product={product} />
            </div>
            <Moda />
         </div>
      </>
   )
}

export default Product
/*
///// КНОПКА ДЛЯ ДОБАВЛЕНИЯ В BASKETCHANGE

onClick={() => HandlerButton("basket")}

///// КНОПКА ДЛЯ ДОБАВЛЕНИЯ В LIKESCHANGE

onClick={() => HandlerButton("likes")}




//////////// ОТПРАВКА ПРОДУКТА НА ДОБАВЛЕНИЕ В Account

async function HandlerButton(category) {
      const addObj = await category == "basket" ? {
         //id: Math.random() * 11111, сервер делает лучше id
         product_id: product.id,
         size: 44,
         amount: 1

      } : {
         //id: Math.random() * 11111, сервер делает лучше id
         product_id: product.id,
         amount: 1

      }
      fetch(`http://localhost:3000/${category}Change`, {
         method: 'POST',
         body: JSON.stringify(addObj),
         headers: {
            "Content-type": "application/json"
         }
      })
         .then(data => data.json())
         .then(data => {
            if (category == "basket") {
               ADDrenderProducts('basketChange', usSetChangeBasket)
            }
            else {
               ADDrenderProducts('likesChange', usSetChangeLikes)
            }
         })
         .then()



   }
    
        
*/
