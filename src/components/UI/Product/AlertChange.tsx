import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import { useTypeSelector } from '../../../hook/useTypeSelector'
import { IAlertProductPage } from "../../../Types/product/productPage";



export function AlertToAccount() {
   const location = useLocation()
   const message = useTypeSelector(state => state.product.message)

   const toBranch = () => message?.branch ? `/account/${message.branch}` : "/"
   console.log(toBranch());



   return (
      <>
         <div className={`ToAcc-alert  alert alert-dark`} role="alert">
            <div className="person-acc__title">
               <img src="/img/page-icon/vesh-logo2.png" alt="logo" />
            </div>
            <div className={`ToAcc-alert__container`}>
               <div className={`ToAcc-alert__list list-group list-group-flush`}>
                  <h2 className={"list-group-item"}>{message?.name}</h2>
                  <h2 className={"list-group-item"}>Цена: {message?.price}$</h2>
                  <div className="list-group-item">
                     <h2>Куда добавлена:</h2>
                     <div className={'ToAcc-alert__list_link'}>
                        <NavLink className={`ToAcc-alert__link`} to={toBranch()} state={{ from: location }}>
                           {message?.branch}</NavLink>
                     </div>
                  </div>

               </div>
               <div className={`ToAcc-alert__block`}>
                  <img className={`ToAcc-alert__img`} src={message?.img} alt="" />
               </div>
            </div>

         </div >
      </>
   )
}