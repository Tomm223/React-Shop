import React from "react";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface HeaderRespProps {
   children: React.ReactChild
}

export const HeadeResponsiveLeftBar: FC<HeaderRespProps> = ({ children }) => {
   const location = useLocation()
   return (
      <ul className="header__persons">
         {children}
         <NavLink to="/account/info" state={{ from: location }}>
            <div className="header__person">
               <img className="header__person-acc person__acc" src="/img/page-icon/account.svg"></img>
            </div>
         </NavLink>
      </ul>
   )
}

