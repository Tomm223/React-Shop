import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { productImgChange } from "../../store/actions/ProductActions";

interface SuppImgProps {
   id: number,
   numImg: number,
   imgLink: string
}
//key={index} id={index} numImg={imgs.length > 1 ? watchImg : [0]} imgLink={img} 
const ProductSuppImg: React.FC<SuppImgProps> = ({ id, numImg, imgLink }) => {

   const dispatch = useDispatch()

   function setStyle() {
      if (numImg == id) {
         return ('profile__fotos-opacity active')
      }
      else {
         return ('profile__fotos-opacity')
      }
   }
   // props.numImg == props.id ? setSuppStyle('profile__fotos-opacity active') : setSuppStyle('profile__fotos-opacity')
   return (
      <div onClick={() => dispatch(productImgChange(id))} className="profile__fotos-block">
         <img className="profile__fotos-item" src={imgLink} alt="" />
         <div className={numImg == id ? 'profile__fotos-opacity active' : 'profile__fotos-opacity'}></div>
      </div>
   )
}
export default ProductSuppImg