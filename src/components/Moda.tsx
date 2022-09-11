import React, { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";
import { TypesSearch } from "../Types/search/search";
import { useNavigateParams } from '../hook/useSearchParams'
function Moda() {
   const navigateSearch = useNavigateParams()
   function handler(event: SyntheticEvent<HTMLImageElement>) {

      navigateSearch('/cataloge', { collection: event.currentTarget.alt })
   }
   return (
      <>
         <div className="moda">
            <div className="containerNOT">
               <h3 className="moda__title">Модные Бренды</h3>
               <div className="moda__list">
                  <img onClick={handler} src="/img/page-img/intro-moda6.webp" alt={TypesSearch.SEARCH_MARTINS} className="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda2.webp" alt={TypesSearch.SEARCH_TNF} className="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda3.webp" alt={TypesSearch.SEARCH_NIKE} className="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda4.webp" alt={TypesSearch.SEARCH_CARHARTT} className="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda5.webp" alt={TypesSearch.SEARCH_ELLESSE} className="moda__item" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Moda
