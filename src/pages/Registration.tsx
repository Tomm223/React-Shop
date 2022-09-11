import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import { PagesContext } from "../Context/PagesProvider";
import { useLocation, useNavigate, Outlet, NavLink, Navigate } from 'react-router-dom'
import { useWindowSize } from '../hook/useWindowSize'

import { AuthContext } from "../Context/AuthProvider";
import { useDispatch } from "react-redux";
import { LocationFrom } from "../store/actions/PagesActions";
import AccountOut from "../components/UI/Account/AccountOut";
import { AccountOutMini } from "../components/UI/Account/AccountExitMini";
import { ILocation } from "../Types/pages/pageLocation";
function Registration() {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon } = useWindowSize()
   const location = useLocation() as ILocation
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])
   // re navigate
   const { setStateNavTo } = useContext(AuthContext)
   if (location.state) {
      if ('from' in location.state) {
         setStateNavTo(location.state.from.state)
      }
   }


   //navigate
   const { setFromPage } = useContext(AuthContext)


   const [FromP, setFromP] = useState(location.state?.from || "/")
   setFromPage(FromP)

   // change location FromPage
   const dispatch = useDispatch()

   useEffect(() => {
      if (location.state) {
         dispatch(LocationFrom(location.state.from))
      }
   }, [])

   return (
      <Fragment>
         {minLabTop
            ?
            <AccountOut />
            :
            <AccountOutMini />
         }
         <div className="registration-body">
            <div className="reg">
               <div className="reg__title">
                  <img src="/img/page-icon/vesh-logo.png" alt="" />
               </div>
               <div className="reg__block">
                  <div className="reg__checkout">
                     <NavLink to="post" className="reg__checkout-item ">
                        <p className='reg__checkout-link'>Регестрация</p>
                     </NavLink>
                     <NavLink to="get" className="reg__checkout-item">
                        <p className="reg__checkout-link">Вход</p>
                     </NavLink>
                  </div>
                  <Outlet />
               </div>
            </div>

         </div>

      </Fragment>

   )
}
export default Registration

/*  */