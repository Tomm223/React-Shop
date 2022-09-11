import React, { useContext, useEffect } from "react";
import Header from "./components/header/Header"
import Footer from "./components/Footer"
import { PagesContext } from "./Context/PagesProvider"
import { Outlet } from 'react-router-dom'

function Layout() {
   /*//pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])*/
   return (
      <React.Fragment>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </React.Fragment>

   )
}
export default Layout 