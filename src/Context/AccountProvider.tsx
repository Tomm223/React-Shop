import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BuildChangeNewProducts, PatchAxios, BuildBody } from "../Fetch/Fetching"
import { AccountFullChange } from "../store/actions/AccountActions";
import { TypeBuldBodyAccKey } from "../Types/fetch/buildBody";
import { IUserChange } from "../Types/products-server"
export const AccountContext = React.createContext<any>('')

interface AccountProviderProps {
   children: React.ReactNode
}

function AccountProvider({ children }: AccountProviderProps) {
   const dispatch = useDispatch()
   const UseSetChages = (body: IUserChange) => {
      localStorage.setItem("UserChange", JSON.stringify(body))
      dispatch(AccountFullChange({ basket: body.basket, likes: body.likes, order: body.order }))
   }

   async function handleSelect(userID: string, value: any, item: any, baskLike: TypeBuldBodyAccKey) {
      item.size = value.size
      item.amount = value.amount ? value.amount : item.amount
      const { id, newArray } = await BuildChangeNewProducts(userID, baskLike, item)
      const body = BuildBody(baskLike, newArray)
      const response = await PatchAxios(`UserChange/${id}`, body)
      UseSetChages(response.data)
   }


   return (
      <AccountContext.Provider value={{
         UseSetChages, handleSelect
      }}>
         {children}
      </AccountContext.Provider>
   )
}

export default AccountProvider


/**
 ///////////// СОБРАННЫЕ ДАННЫЕ И ИХ ФУНКЦИИ НА ИЗМЕНЕНИЕ

 const [orderPers, setOrderPers] = useState(JSON.parse(localStorage.getItem('ChangeOrder')) ? JSON.parse(localStorage.getItem('ChangeOrder')).reverse() : null)
   const [basketPers, setBasketPers] = useState(JSON.parse(localStorage.getItem('ChangeBasket')) ? JSON.parse(localStorage.getItem('ChangeBasket')).reverse() : null)
   const [likesPers, setLikesPers] = useState(JSON.parse(localStorage.getItem('ChangeLikes')) ? JSON.parse(localStorage.getItem('ChangeLikes')).reverse() : null)
   const usSetChangeOrder = (mass) => {
      //setOrderPers(prev => null)
      localStorage.setItem('ChangeOrder', JSON.stringify(mass))
      setOrderPers(prev => JSON.parse(localStorage.getItem('ChangeOrder')))
   }
   const usSetChangeBasket = (mass) => {
      //setBasketPers(prev => null)
      localStorage.setItem('ChangeBasket', JSON.stringify(mass))
      setBasketPers(prev => JSON.parse(localStorage.getItem('ChangeBasket')))
   }
   const usSetChangeLikes = (mass) => {
      //setLikesPers(prev => null)
      localStorage.setItem('ChangeLikes', JSON.stringify(mass))
      setLikesPers(prev => JSON.parse(localStorage.getItem('ChangeLikes')))
   }
   //delete
   const [deleteLikes, setDeleteLikes] = useState(JSON.parse(localStorage.getItem('DELETELikes')))
   const [deleteBasket, setDeleteBasket] = useState(JSON.parse(localStorage.getItem('DELETEBasket')))
   const [deleteOrder, setDeleteOrder] = useState(JSON.parse(localStorage.getItem('DELETEOrder')))
   const usSetDeleteLikes = (mass) => {
      //setDeleteLikes(prev => null)
      localStorage.setItem('DELETELikes', JSON.stringify(mass))
      setDeleteLikes(prev => JSON.parse(localStorage.getItem('DELETELikes')))
   }
   const usSetDeleteBasket = (mass) => {
      //setDeleteBasket(prev => null)
      localStorage.setItem('DELETEBasket', JSON.stringify(mass))
      setDeleteBasket(prev => JSON.parse(localStorage.getItem('DELETEBasket')))
   }
   const usSetDeleteOrder = (mass) => {
      //setDeleteOrder(prev => null)
      localStorage.setItem('DELETEOrder', JSON.stringify(mass))
      setDeleteOrder(prev => JSON.parse(localStorage.getItem('DELETEOrder')))
   }
 */