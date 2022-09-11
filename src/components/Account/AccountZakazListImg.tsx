import React from "react";

interface listImgProps {
   img: string
}


const AccountZakazListImg: React.FC<listImgProps> = ({ img }) => {

   return (
      <li className="zakaz__gallery-item" >
         <img src={img} alt="img" />
      </li >
   )
}
export default AccountZakazListImg