import React, { Children, useContext, useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { AccountContext } from "../Context/AccountProvider";
import { useSelector } from "react-redux";
import { Interface } from "readline";
import { IUser } from "../Types/user-server"
import { useTypeSelector } from "../hook/useTypeSelector"

interface AuthProps {
   children: React.ReactChild
}

export const ReqAuthAcc: React.FC<AuthProps> = ({ children }) => {

   const location = useLocation()
   //const { user } = useContext(AuthContext)
   const user = useTypeSelector(state => state.user.user)
   if (user == null) {
      return <Navigate to='/registration/get' state={{ from: location }} ></Navigate>
   }
   //chekID USER


   return (
      <>
         {children}
      </>


   )
}

interface RegProps {
   children: React.ReactChild
}

export const ReqAuthReg: React.FC<RegProps> = ({ children }) => {

   const location = useLocation()
   const user = useTypeSelector(state => state.user.user)
   if (user != null) {
      return <Navigate to='/account/info' state={{ from: location }} ></Navigate>
   }
   return (
      <>
         {children}
      </>


   )
}


