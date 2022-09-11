import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { productImgChange } from "../../store/actions/ProductActions";
import ProductSuppImg from "./ProductSuppImg";

interface ProdPhotosProps {
   imgs: string[]
}

const ProductPhotos: FC<ProdPhotosProps> = ({ imgs }) => {
   const dispatch = useDispatch()
   const watchImg = useTypeSelector(state => state.product.watchImg)
   function ImgReducerRight(side: boolean) {
      if (side) {
         watchImg === 3
            ? dispatch(productImgChange(0))
            : dispatch(productImgChange(watchImg + 1))
      }
      else {
         watchImg === 0
            ? dispatch(productImgChange(3))
            : dispatch(productImgChange(watchImg - 1))
      }
   }

   useEffect((): () => void => {
      dispatch(productImgChange(0))
      return () => dispatch(productImgChange(0))
   }, [])
   const SRCimgs = (mass: string[]) => imgs.length > 1 ? mass[watchImg] : mass[0]

   function handleImg(div: EventTarget & HTMLDivElement) {
      // str === "right" ? ImgReducerRight(true) : ImgReducerRight(false)
      //const item = event.target
      div.className.includes("right") ? ImgReducerRight(true) : ImgReducerRight(false)
   }
   return (
      <div className="profile__fotos">
         <div className="profile__img">
            <img className="profile__img-item" src={SRCimgs(imgs)} alt="" />
            <div onClick={(e) => handleImg(e.currentTarget)} className="profile__img-left">
               <img className="profile__img-left-item" src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
            </div>
            <div onClick={(e) => handleImg(e.currentTarget)} className="profile__img-right">
               <img className="profile__img-right-item" src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
            </div>
         </div>
         <div className="profile__fotos-supp">
            {imgs.map((img, index) => {
               return (<ProductSuppImg key={index} id={index} numImg={imgs.length > 1 ? watchImg : 0} imgLink={img} />)
            })}
            <div onClick={(e) => handleImg(e.currentTarget)} className="profile__img-left">
               <img className="profile__img-left-item" src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
            </div>
            <div onClick={(e) => handleImg(e.currentTarget)} className="profile__img-right">
               <img className="profile__img-right-item" src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
            </div>
         </div>
      </div>
   )
}

export default ProductPhotos