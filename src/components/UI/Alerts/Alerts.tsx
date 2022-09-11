import React from "react";
import { FC } from "react";

interface AlertProps {
   state: boolean | string,
   setState?: React.Dispatch<React.SetStateAction<boolean | string>>
}

export const AlertDefault: FC<AlertProps> = ({ state, setState }) => {
   if (state) {
      setTimeout(() => {
         setState &&
            setState(false)
      }, 1500)
   }

   return (
      <div className={`AlertDefault alert alert-primary`} role="alert" >
         {state}
      </div >
   )
}