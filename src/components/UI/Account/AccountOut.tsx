import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { useTypeSelector } from "../../../hook/useTypeSelector"


export function AccountOut() {
   const navigate = useNavigate()
   const from = useTypeSelector(state => state.pageFrom.location.pathname)
   const state = useTypeSelector(state => state.pageFrom.location.state)
   const to = from ? from.includes("registration") || from.includes("account") ? "/" : from : '/' || '/'
   console.log(to);
   console.log("state: ", state);
   function Handle() {
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
         else if (state.from?.state) {
            const path = state.from?.state?.from.pathname
            const states = state.from.state.from.state || ''
            console.log(path, { state: states });
            navigate(path, { state: states })
         }
         else {
            navigate(state.from.pathname)
         }

      }
      else {
         navigate(to)
      }

   }
   return (
      <div className={'Out-out'}>
         <div onClick={Handle} className={`Out-btn `} >
            <div className={'Out-blockImg'}>
               <img className={'Out-img'} src="/img/page-icon/sign-out.png" alt="" />
            </div>
         </div>
      </div>

   )
}
export default AccountOut



/* onClick={() => navigate(to)} className={classes.out}


*/


//    1) ПЕРЕДЕЛАТЬ ПРОДУКТ НА URLSEARCH А НЕ LOCATION STATE
//    2) ПЕРЕДЕЛАТЬ ACC-OUT НА ПОЛУЧЕНИЕ FROM_LOCATION + SEARCH В НЕМ И ПО НЕМУ ПЕРЕХОД НА СТРАНИЦУ 