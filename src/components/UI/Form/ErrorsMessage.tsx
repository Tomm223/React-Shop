import React from "react";


const inputErr = (str: string) => <p>Ошибка в поле <span>{str}</span></p>

interface ErrorProps {
   error: any
}
interface ErrorsProps {
   errors: any
   regist: string | string[]
}

export function ErrorSelect({ error }: ErrorProps) {

   return (
      <div className="reg__error"> {error && <div>{error?.message || inputErr('address')}</div>} </div>
   )
}

export function ErrorsMessage({ errors, regist }: ErrorsProps) {
   if (regist && regist[0] == "address") {
      return (
         <div className="reg__error"> {errors?.[`${regist[0]}`]?.[`${regist[1]}`] && <div>{errors?.[`${regist[0]}`]?.[`${regist[1]}`]?.message || inputErr(regist[1])}</div>} </div>
      )
   }
   else {
      return (
         <div className="reg__error"> {errors?.[`${regist}`]
            && <div>{errors?.[`${regist}`]?.message || inputErr(JSON.stringify(regist))}</div>} </div>

      )
   }

}