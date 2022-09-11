import React, { Fragment, useContext, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from '../../hook/useWindowSize'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AccountContext } from "../../Context/AccountProvider";
import ProductsContext from "../../Context/ProductsContext";
import AccountBasketItem from "./AccountBasketItem";
import { ToOrder } from "../../Fetch/Fetching"
import AccountOut from '../UI/Account/AccountOut'
import { LoadingDefault } from "../UI/Loading/Loadings";
import { AlertDefault } from "../UI/Alerts/Alerts";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { IBasket, IProduct, IUserChange } from "../../Types/products-server";
import { IUser } from "../../Types/user-server";
const AccountBasket: React.FC = () => {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()
   // massiv в котором TRUEBasket
   const MAss = []


   const basket = useTypeSelector<IBasket[]>(state => state.account.basket)
   //const basket = userChange.basket.reverse() // ТО ГДЕ ЛЕЖИТ МАССИВ BASKETCAHNGE

   const { products } = useContext(ProductsContext)
   //const { user } = useContext(AuthContext)
   const user = useTypeSelector<IUser | null>(state => state.user.user)

   const { UseSetChages } = useContext(AccountContext)
   const [alert, setAlert] = useState<boolean | string>(false)

   async function HandleOrder() {
      try {
         const response = await ToOrder(user?.id || '')
         await UseSetChages(response)
         setAlert("Ваша Корзина была успешно перемещена в раздел заказов")
      }
      catch {
         setAlert("Что-то пошло не так")
      }
   }

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
      <Fragment>
         {minBigAcc && < AccountOut />}
         {alert && <AlertDefault state={alert} setState={setAlert} />}
         <div className="cab__basket">
            <div className="cab__basket-icon">
               <img src="/img/page-icon/basket.png" alt="info" />
            </div>
            <div className="cab__basket-title">
               <h1>Моя Корзина</h1>
               <aside>Вы в любой момент можете изменить харакитеристики вашей корзины, а также применить промокод
                  (применение промокода только на один заказ).</aside>
            </div>

            <div className="basket ">
               <div className="basket__hr"></div>
               <div className="basket__title">
                  <h3>Список Товаров</h3>
               </div>
               <div className="basket__block">
                  {timeOUT && <div className="d-flex justify-content-center">
                     <LoadingDefault />
                  </div>}
                  <TransitionGroup class="basket__list">
                     {!timeOUT
                        &&
                        basket.map((item: IBasket) => {
                           const product = products.find((prod: IProduct) => prod.id == item.product_id)
                           return (
                              <CSSTransition
                                 key={item.id}
                                 timeout={500}
                                 classNames="productPost"
                              >
                                 <AccountBasketItem userID={user?.id || ''} item={item} product={product}
                                    amount={item.amount || 1} size={item.size || ''} itemId={item.id} />
                              </CSSTransition>
                           )
                        })
                     }
                  </TransitionGroup>
                  {basket.length
                     ?
                     <div className="basket__btn">
                        <input onClick={HandleOrder} className="basket__btn-item" type="button" value="Заказать" />
                     </div>
                     :
                     <h2 className="basket__title">Нет товаров</h2>
                  }

               </div>
            </div>
         </div>
      </Fragment>

   )
}
export default AccountBasket

/* ////////////////////////КНОПКА: ИЗ ВАSКЕТ ТО ORDER 


onClick={() => MAss.length && AddTopDelBottom("orderChange", usSetChangeOrder, basketToOrder, "DeleteBasket", usSetDeleteBasket, DeleteProduct())}


   //////////////////////ФУНКЦИИ КОТОРЫЕ УДАЛЯЛИ ИЛИ :ТО ORDER

const basketToOrder = {
      send: basket.length == 2 ? false : true,
      num: Math.random() * 111111111111,
      local: `${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.house} `,
      sum: 4242,
      products: MAss
   }

   console.log(basketToOrder)
   const DeleteProduct = () => {
      const mass = []
      const trueBasket = basket.map((item) => {
         const deleteCheck = deleteBasket.filter((prod) => prod.basket_id == item.id)[0]
         console.log("chehck: ", deleteCheck);
         if (!deleteCheck) {
            mass.push({
               basket_id: item.id,
               amount: 1
            })
         }
      })

      return mass
   }

*/

/*
ВЫВОД ТОВАРОВ
 {
                     checkId ?
                        basket.map((item) => {
                           const deleteCheck = deleteBasket.filter((prod) => prod.basket_id == item.id)[0]
                           console.log("chehck: ", deleteCheck);
                           if (deleteCheck) { return console.log("deleteProduct: ", deleteCheck.basket_id) }
                           else { MAss.push(item) }
                           const product = products.filter((prod) => prod.id == item.product_id)[0]
                           console.log("product1: ", product);
                           return <AccountBasketItem product={product} amount={item.amount} size={item.size} itemId={item.id} />
                        })

                        :
                        basket.map((item) => {
                           const product = products.filter((prod) => prod.id == item.product_id)[0]
                           return <AccountBasketItem product={product} amount={item.amount} size={item.size} itemId={item.id} />
                        })

                  }

*/