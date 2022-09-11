import React, { useState, createContext, useEffect, useCallback, useContext, FC } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { UserInit } from "../store/actions/UserActions";
import { IUser } from "../Types/user-server";

export const AuthContext = createContext<string | any>('')

interface AuthProps {
   children: React.ReactChild
}

export const AuthProvider: FC<AuthProps> = ({ children }) => {
   const navigate = useNavigate()
   const [fromPage, setFromPage] = useState('/')
   const [stateNavTo, setStateNavTo] = useState({})

   const NavigateTo = () => navigate(fromPage, { state: { ...stateNavTo } })


   const dispatch = useDispatch()
   const singIn = useCallback((us: IUser, Callback: Function) => {
      localStorage.setItem("auth", JSON.stringify(us))
      dispatch(UserInit(us))
      //setUser(prev => JSON.parse(localStorage.getItem("auth")))
      Callback()

   }, [])
   const AuthOut = useCallback(() => {
      dispatch(UserInit(null))
      //setUser(prev => null)
      localStorage.setItem("auth", JSON.stringify(null))
   }, [])

   return (
      <AuthContext.Provider value={{ setStateNavTo, NavigateTo, AuthOut, singIn, fromPage, setFromPage }}>
         {children}
      </AuthContext.Provider>
   )
}


