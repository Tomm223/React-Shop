import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from '../../hook/useWindowSize'

import { useTypeSelector } from '../../hook/useTypeSelector'
import { AccountContext } from "../../Context/AccountProvider";
import ProductsContext from "../../Context/ProductsContext";
import AccountZakazItem from "./AccountZakazItem";
import AccountOut from '../UI/Account/AccountOut'
import { LoadingDefault } from "../UI/Loading/Loadings";
import { IOrder } from "../../Types/products-server";

const AccountZakaz: React.FC = () => {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()


   const order = useTypeSelector<IOrder[]>(state => state.account.order)

   // maked  timemout for load
   const [timeOUT, setTimeOUT] = useState<boolean>(true)
   useEffect(() => {
      makeTimeOut()
   }, [])
   function makeTimeOut() {
      return setTimeout(() => {
         setTimeOUT(false)
      }, 500)
   }
   return (
      <>
         {minBigAcc && <AccountOut />}

         <div className="cab__zakaz ">
            <div className="cab__zakaz-icon">
               <img src="/img/page-icon/zakaz.png" alt="info" />
            </div>
            <div className="cab__zakaz-title">
               <h1>Мои Заказы</h1>
               <aside>Здесь вы можете отслеживать свои поссылки,если вы будуте использовать другие сервисы по
                  трекингу посылок, то настоятельно рекомендуем проверять сервисы на взлом</aside>
            </div>
            <div className="zakaz">
               <div className="basket__hr"></div>
               <div className="zakaz__title">
                  <h4>Все заказы</h4>
                  <hr />
               </div>
               <div className="zakaz__block">
                  <ul className="zakaz__list">
                     {!timeOUT
                        ?
                        order.map((item) => {
                           return <AccountZakazItem order={item} productsOrder={item.products} />
                        })
                        :
                        <div className="d-flex justify-content-center">
                           <LoadingDefault />
                        </div>
                     }
                  </ul>
               </div>
            </div>
         </div>
      </>

   )
}
export default AccountZakaz


/* ////////// ТОВАРЫ:

 

*/