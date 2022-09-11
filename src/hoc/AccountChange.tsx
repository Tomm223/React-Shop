import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTypeSelector } from "../hook/useTypeSelector"


interface props {
   children: React.ReactChild
}

const AccountChange: React.FC<props> = ({ children }) => {
   const account = useTypeSelector(state => state.account)
   const basket = useTypeSelector(state => state.account.basket)
   const orders = useTypeSelector(state => state.account.order)
   const likes = useTypeSelector(state => state.account.likes)
   useEffect(() => {
      localStorage.setItem("AccountProduct", JSON.stringify(account))
   }, [basket, orders, likes])

   return (
      <>
         {children}
      </>

   )
}

export default AccountChange