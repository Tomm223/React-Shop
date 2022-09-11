import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useWindowSize } from '../../hook/useWindowSize'

import { useTypeSelector } from '../../hook/useTypeSelector'
import { AccountContext } from "../../Context/AccountProvider";
import { AuthContext } from "../../Context/AuthProvider";
import ProductsContext from "../../Context/ProductsContext";
import AccountZakazMoreListItem from "./AccountZakazMoreListItem";
import AccountOut from '../UI/Account/AccountOut'
import { ILocation } from "../../Types/pages/pageLocation";
import { IUser } from "../../Types/user-server";
import { IOrder, IOrderProducts, IProduct } from "../../Types/products-server";

function AccountZakazMore() {

   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()

   const location = useLocation() as ILocation
   const order = location.state.order || ''
   const { products } = useContext(ProductsContext)
   //const { user } = useContext(AuthContext)
   const user = useTypeSelector<IUser | null>(state => state.user.user)

   return (
      <>
         {minBigAcc && <AccountOut />}

         <div className="cab__zakaz-more">
            <div className="cab__zakaz-more-icon">
               <img src="/img/page-icon/zakaz.png" alt="info" />
            </div>
            <div className="cab__zakaz-more-title">
               <h1>Детали Заказа</h1>
               <aside>Здесь вы можете отслеживать свои поссылки,если вы будуте использовать другие сервисы по
                  трекингу посылок, то настоятельно рекомендуем проверять сервисы на взлом</aside>
            </div>
            <div className="zakaz-more">
               <div className="basket__hr"></div>
               <div className="zakaz-more__title">
                  <p>Заказ № <span id="zakaz__num">{order.id}</span> </p>
               </div>
               <div className="zakaz-more__person">
                  <div className="zakaz-more__person-item person__name">
                     <p id="person__name">{user?.firstName}  {user?.lastName}</p>
                  </div>
                  <div className="zakaz-more__person-item person__email">
                     <p>Email: <span id="person__email">{user?.email}</span></p>
                  </div>
                  <div className="zakaz-more__person-item person__local">
                     <p>{user?.address.country} {user?.address.city} {user?.address.street} {user?.address.house}</p>
                  </div>
               </div>
               <div className="zakaz-more__summ">
                  <div className="basket__hr"></div>
                  <p>
                     Итого <span id="zakaz__price">{order.sum} $</span>
                  </p>
                  <div className="basket__hr"></div>
               </div>
               <ul className="zakaz-more__list">
                  {order.products.map((item: IOrderProducts) => {
                     const product = products.find((prod: IProduct) => prod.id == item.product_id)
                     return <AccountZakazMoreListItem product={product} amount={item.amount} />
                  })}
               </ul>

            </div>
         </div>
      </>
   )
}
export default AccountZakazMore