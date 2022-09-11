import React, { useEffect, useState, useRef, useContext, useCallback } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'
import AccountNavigate from "../components/Account/AccountNavigate";
import { PagesContext } from "../Context/PagesProvider";
import { AuthContext } from "../Context/AuthProvider";
import { AccountContext } from "../Context/AccountProvider";
import { AccProductGet } from "../Fetch/Fetching";
import { useDispatch, useSelector } from "react-redux";
import { LocationFrom } from "../store/actions/PagesActions";
import { useWindowSize } from '../hook/useWindowSize'
import { AccountExitMini, AccountOutMini } from "../components/UI/Account/AccountExitMini";
import { useTypeSelector } from "../hook/useTypeSelector";
import { ILocation } from '../Types/pages/pageLocation'
import { PositionValue } from "../Types/CssProperty";
import { IUser } from "../Types/user-server";
import { AccNavigateData } from "../Types/types-server";

function Account() {

   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])
   // accOUT


   const location = useLocation() as ILocation
   const dispatch = useDispatch()
   useEffect(() => {
      if (location.state) {
         dispatch(LocationFrom(location.state.from))
      }
   }, [])

   const [navigate, setNavigate] = useState<AccNavigateData[]>([])

   useEffect(() => {
      fetch("http://localhost:3000/accountNavigate")
         .then(data => data.json())
         .then(data => {
            setNavigate(data)
         })

   }, [])


   const [navLeft, setNavLeft] = useState(0)
   const [navTop, setNavTop] = useState(0)
   const [navWidth, setNavWidth] = useState('100%')
   const [posNav, setPosNav] = useState(PositionValue.absolute)

   const [posNavBlock, setPosNavBlock] = useState(PositionValue.relative)

   const [checkRoute, setCheckRoute] = useState("up")

   const cabNav = useRef<null | HTMLDivElement>(null)
   const navigateBlock = useRef<null | HTMLDivElement>(null)
   const cab = useRef<null | HTMLDivElement>(null)
   function setPosFixNav() {
      setNavTop(10)
      setNavLeft(navigateBlock.current ? navigateBlock.current.getBoundingClientRect().left : 0)
      setNavWidth(navigateBlock.current ? `${navigateBlock.current.getBoundingClientRect().width}px` : "100px")
      setPosNav(PositionValue.fixed)
      setPosNavBlock(PositionValue.static)
   }
   function setPosDef() {
      setNavTop(0)
      setNavLeft(0)
      setNavWidth('100%')
      setPosNav(PositionValue.absolute)
      setPosNavBlock(PositionValue.relative)
   }
   const proverkaScroll = (route: string) => {
      if (route == checkRoute) {
         if (route == "down") {
            //
            setCheckRoute("up")
            setPosFixNav()
            console.log("down :" + checkRoute);

         }
         else if (route == "up") {
            //
            setCheckRoute("down")
            setPosDef()
            console.log("up :" + checkRoute);
         }
      }
   }

   function scrolling() {
      if (minBigAcc) {
         const localNavTen = navigateBlock.current ? navigateBlock.current.getBoundingClientRect().top + window.scrollY - 10 : 0
         const pageY: number = window.scrollY
         const minus100 = pageY - localNavTen
         minus100 >= 0 ? proverkaScroll('down') : proverkaScroll('up')
      }
   }

   useEffect(() => {
      // console.log(navigateBlock.current.getBoundingClientRect().top);
      const windSubs = window.addEventListener("scroll", scrolling, true);
      return () => windSubs
   }, [checkRoute, proverkaScroll])

   const styleNavBlock: React.CSSProperties = {
      position: `${posNavBlock}`
   }


   const styleNav: React.CSSProperties = {
      position: `${posNav}`,
      top: `${navTop}px`,
      left: `${navLeft}px`,
      width: `${navWidth}`
   }



   //Это не нужно только без него не работает((((
   const styleCab: React.CSSProperties = {
      position: `relative`
   }
   //const { user } = useContext(AuthContext)
   const user = useTypeSelector(state => state.user.user)
   const { UseSetChages } = useContext(AccountContext)
   useEffect(() => {
      const func = async () => {
         try {
            if (typeof user !== null) {
               const params = user ? user.id : '123'
               const response = await AccProductGet(params)
               UseSetChages(response.AccArray)
            }

         }
         catch {
            alert("Что-то пошло не так")
         }

      }
      func()
   }, [])


   // account for mini screen

   const styleMiniMain = useTypeSelector(state => state.account.responsive_main)

   return (
      <>
         <div className="registration-body">
            <div ref={cab} style={styleCab} className="cab">
               <div className="cab__block title">
                  <div className="cab__nav-title">
                     <NavLink to='/' style={{ width: "100%" }}>
                        <img src="/img/page-icon/vesh-logo2.png" alt="lojgo" />
                     </NavLink>
                  </div>
                  <div className="cab__supp-title">
                     <h1>Личный кабинет</h1>
                  </div>
               </div>
               {minBigAcc
                  ?
                  <div className="cab__block">
                     <div ref={navigateBlock} style={styleNavBlock} className="cab__navigateBlock">
                        <div ref={cabNav} style={styleNav} className="cab__nav">
                           <nav className="cab__nav-nav">
                              <div className="cab__nav-face">
                                 <div className="cab__ava">
                                    <img src="/img/page-icon/delivery.svg" alt="" className="cab__ava-item" />
                                 </div>
                                 <div className="cab__ava-text">
                                    <p id="ava__f-name">{user && user.firstName}</p>
                                    <p id="ava__l-name">{user && user.lastName}</p>
                                 </div>
                              </div>
                              <ul className="cab__list">
                                 {navigate.map((link) => {
                                    return (<AccountNavigate key={link.id} link={link} />)
                                 })}
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="cab__supp">
                        <Outlet />
                     </div>
                  </div>
                  :
                  <div className="cab__block mini">
                     <AccountOutMini />
                     <header className="mini__header">
                        <div className="cab__nav-face">
                           <div className="cab__ava">
                              <img src="/img/page-icon/delivery.svg" alt="" className="cab__ava-item" />
                           </div>
                           <div className="cab__ava-text">
                              <p id="ava__f-name">{user && user.firstName}</p>
                              <p id="ava__l-name">{user && user.lastName}</p>
                           </div>
                        </div>
                        <ul className="mini__list">
                           {navigate.map((link) => {
                              return (<AccountNavigate key={link.id} link={link} />)
                           })}
                        </ul>
                     </header>
                     <div className="cab__supp mini__supp">
                        <div className={styleMiniMain ? `main-container open` : 'main-container close'}>
                           <AccountExitMini />
                           <Outlet />
                        </div>

                     </div>
                  </div>
               }

            </div>
         </div>

      </>
   )
}
export default Account


