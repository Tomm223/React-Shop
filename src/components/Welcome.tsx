import React, { useState } from "react";
import Moda from "./Moda";
import { Link } from "react-router-dom"
import { PagesContext } from "../Context/PagesProvider";
import { useEffect, useContext } from 'react'
import { AuthContext } from "../Context/AuthProvider";
import { useSelector } from "react-redux";
function Welcome() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])

   return (
      <>
         <div className="intro">
            <div className="intro__text">
               <h2 className="intro__text-title">VESH4lKa</h2>
               <span className="intro__text-p">the brand</span>
               <span className="intro__text-span">of luxerious fashion</span>
               <form className="intro__for">
                  <div>

                  </div>
                  <Link to="women" className="intro__for-item" > ЖЕНЩИНЫ </Link>
                  <Link to="men" className="intro__for-item" > МУЖЧИНЫ </Link>
               </form>
            </div>
         </div>
         <Moda />
      </>
   )
}
export default Welcome 