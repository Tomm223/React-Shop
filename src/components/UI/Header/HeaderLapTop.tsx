import React, { FC, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import HeaderNavList from '../../header/HeaderNavList'

export const HeaderLeftBar: FC = () => {
   const location = useLocation()
   return (
      <ul className="header__persons">
         <NavLink to="/account/info" state={{ from: location }}>
            <li className="header__person">
               <img className="header__person-acc person__acc" src="/img/page-icon/account.svg"></img>
               <div className="person-acc__checkout">
                  <div className="person-acc__title">
                     <img src="/img/page-icon/vesh-logo2.png" alt="logo" />
                  </div>
                  <ul className="person-acc__list">
                     <ul className="person-acc__list-reg">
                        <NavLink to="registration/post" state={{ from: location }} className="person-acc__link-reg">
                           Зарегестрироваться
                        </NavLink>
                        <NavLink to="registration/get" state={{ from: location }} className="person-acc__link-reg">
                           Вход
                        </NavLink>
                     </ul>
                     <ul className="person-acc__list-self">
                        <NavLink to="/account/info" state={{ from: location }}>
                           <li className="person-acc__item-self ">
                              <div className="" id="header__cab">
                                 <a className="person-acc__link-self" href="#">Личный Кабинет</a>
                              </div>
                           </li>
                        </NavLink>
                        <NavLink to="/account/basket" state={{ from: location }}>
                           <li className="person-acc__item-self ">
                              <div className="" id="header__zakaz">
                                 <a className="person-acc__link-self" href="#">Моя Корзина</a>
                              </div>
                           </li>
                        </NavLink>

                        <NavLink to="/account/likes" state={{ from: location }}>
                           <li className="person-acc__item-self ">
                              <div className="" id="header__like">
                                 <a className="person-acc__link-self" href="#">Мое избранное</a>
                              </div>
                           </li>
                        </NavLink>

                     </ul>
                  </ul>
               </div>
            </li>
         </NavLink>
         <NavLink to="/account/basket" state={{ from: location }}>
            <li className="header__person">
               <img className="header__person-basket person__basket" src="/img/page-icon/basket_white.png"></img>
            </li>
         </NavLink>
         <NavLink to="/account/likes" state={{ from: location }}>
            <li className="header__person">
               <img className="header__person-acc person__likes" src="/img/page-icon/icons8-heart-48.png"></img>
            </li>
         </NavLink>
      </ul>
   )
}

export const HeaderGenderBtns: FC = () => {
   // style navBoottoom 
   const [stylesNavBottomM, setStylesNavBottomM] = useState<boolean>(false)
   const [stylesNavBottomW, setStylesNavBottomW] = useState<boolean>(false)
   useEffect(() => {
      console.log(stylesNavBottomM);
   }, [stylesNavBottomM])

   interface isActiveProps {
      isActive: boolean
   }
   const setNavLinkW: (arrg: isActiveProps) => string = ({ isActive }) => {
      if (isActive) {
         setStylesNavBottomW(true)
         return "header__gender-link activeLink"
      }
      else {

         setStylesNavBottomW(false)
         return "header__gender-link"
      }

   }
   const setNavLinkM: (arrg: isActiveProps) => string = ({ isActive }) => {
      if (isActive) {
         setStylesNavBottomM(true)
         return "header__gender-link activeLink"
      }
      else {
         setStylesNavBottomM(false)
         return "header__gender-link"
      }
   }
   return (
      <ul className="header__genders">
         <NavLink to="women"
            className={setNavLinkW} >
            <div
               onMouseEnter={() => setStylesNavBottomW(true)}
               onMouseLeave={() => setStylesNavBottomW(false)}
            >ЖЕНЩИНЫ</div>
         </NavLink>
         <NavLink to="men"
            className={setNavLinkM} >
            <div
               onMouseEnter={() => setStylesNavBottomM(true)}
               onMouseOut={() => setStylesNavBottomM(false)}
            >МУЖЧИНЫ</div>
         </NavLink>
         <HeaderNavList style={stylesNavBottomW} />
         <HeaderNavList style={stylesNavBottomM} />
      </ul>
   )
}

