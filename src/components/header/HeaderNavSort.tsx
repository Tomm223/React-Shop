import React, { FC } from "react";

interface SortProps {
   category: string
}

const HeaderNavSort: FC<SortProps> = ({ category }) => {
   return (
      <div>
         <div className="sort">
            <div className="sort__block">
               <div className="sort__title">
                  <h3>Сортировка по...{category}</h3>
               </div>
               <div className="sort__list-block">
                  <ul className="sort__list">
                     <li className="sort__item">
                        <a href="#" className="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li className="sort__item">
                        <a href="#" className="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li className="sort__item">
                        <a href="#" className="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li className="sort__item">
                        <a href="#" className="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li className="sort__item">
                        <a href="#" className="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li className="sort__item">
                        <a href="#" className="sort__link">
                           Распродажа
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="sort__item-block">
               <h3 className="sort__item-title">Начните гардероб с представленных товаров</h3>
               <div className="" style={{ display: "flex", justifyContent: "center" }}>
                  <img className="" src="/img/page-img/intro-men-jacket.jpg" alt="img-jacket" />
               </div>
            </div>
         </div>
      </div>
   )
}
export default HeaderNavSort