import React, { useContext, useEffect, useRef } from "react";
import { createSearchParams, generatePath, NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useState } from 'react'
import { useWindowSize } from '../../hook/useWindowSize'

import HeaderNavList from "./HeaderNavList";
import { useNavigateParams } from '../../hook/useSearchParams'
import { Burger } from "../UI/BurgerMenu/BurgerMenu";
import { HeaderSearchResponsive, SearchLapTop } from "../UI/Search/Search";
import { HeadeResponsiveLeftBar } from "../UI/Header/HeaderResponsive";
import { HeaderGenderBtns, HeaderLeftBar } from "../UI/Header/HeaderLapTop";

function Header() {
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon } = useWindowSize()

   const location = useLocation()


   // header Height
   const headerContainer = location.pathname.includes("men") && minLabTop ? "header-container big" : "header-container"


   return (
      <>
         <header className="header">
            <div className="header__block">
               {!minLabTop && <Burger />}
               <div className="header__logo">
                  <NavLink to="/">
                     <div className="header__logo-item"></div>
                  </NavLink>
               </div>
               <HeaderGenderBtns />
               {minLabTop
                  &&
                  <div className="header__search">
                     <SearchLapTop />
                  </div>
               }

               {minLabTop
                  ?
                  <HeaderLeftBar />
                  :
                  <HeadeResponsiveLeftBar >
                     <HeaderSearchResponsive />
                  </HeadeResponsiveLeftBar>

               }
            </div>
         </header>
         <div className={headerContainer}></div>

      </>
   )
}
export default Header

