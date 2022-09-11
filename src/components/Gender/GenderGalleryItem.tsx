import React, { FC, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { PagesContext } from "../../Context/PagesProvider";
import ProductsContext from "../../Context/ProductsContext";
import { BuildType } from "../../Filtres/TypesSearch";
import { useNavigateParams } from '../../hook/useSearchParams'

interface GalleryItemProps {
   filter: string,
   img: string,
   title: string
}

const GenderGalleryItem: FC<GalleryItemProps> = ({ filter, img, title }) => {

   const navigateSearch = useNavigateParams()

   console.log(filter);
   const [searchParams, setSearchParams] = useSearchParams()
   const navigate = useNavigate()
   function handlerClick() {
      navigateSearch('/cataloge', { collection: BuildType(filter) })
   }
   // finishFilter  state={{ FilterSearch: Filter }}

   return (
      <div onClick={handlerClick} className="gallery__item">
         <img className="gallery__item-img" src={img} alt="img-jacket" />
         <div className="gallery__item-title">
            {title}
         </div>
      </div >

   )
}
export default GenderGalleryItem