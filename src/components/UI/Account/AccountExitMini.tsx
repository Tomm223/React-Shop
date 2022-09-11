import React from "react";
import { useDispatch } from "react-redux";
import { AccMiniOpen } from "../../../store/actions/AccountActions";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { useTypeSelector } from '../../../hook/useTypeSelector'
export function AccountExitMini() {
   const dispatch = useDispatch()
   return (
      <div onClick={() => dispatch(AccMiniOpen())} className="mini-exit">
         <img className="mini-exit__item" src="/img/page-icon/down-arrow.png" alt="" />
      </div>
   )
}

export function AccountOutMini() {
   const navigate = useNavigate()
   const from = useTypeSelector(state => state.pageFrom.location.pathname)
   const state = useTypeSelector(state => state.pageFrom.location.state)
   const to = from ? from.includes("registration") || from.includes("account") ? "2" : from : '/'
   console.log(to);
   console.log("state: ", state);
   function Handle() {
      console.log(state);
      if (state) {
         if (from == '/product' || state?.from?.state?.product) {

            if ("product" in state) {
               navigate(to, { state: { product: state.product } })
            }
            else {
               navigate(to, { state: { product: state.from.state.product } })
            }
         }
         else if (from == '/cataloge' || state?.from?.state?.FilterSearch) {
            navigate(to)
         }
         else {
            navigate(state.from.state.from.pathname)
         }
      }
      else {

         navigate(to)
      }

   }
   return (
      <div onClick={Handle} className="mini-out">
         <img className="mini-out__item" src="/img/page-icon/down-arrow.png" alt="" />
      </div>
   )
}