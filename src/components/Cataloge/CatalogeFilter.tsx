import React, { useState, useContext, useRef } from "react";
import { FC } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { PagesContext } from "../../Context/PagesProvider";
import ProductsContext from "../../Context/ProductsContext";
import { categoryState } from "../../Types/pages/CatalogeFilters";
import CatalogeFilterItem from "./CatalogeFilterItem";

interface FilterProps {
   mass: [] | string[],
   setMass: React.Dispatch<React.SetStateAction<[] | string[]>>,
   filtres: string[],
   name: string
}

const CatalogeFilter: FC<FilterProps> = ({ mass, setMass, filtres, name }) => {
   const { tabs, setTabs } = useContext(PagesContext)
   const styleOptions: React.CSSProperties = {
      display: tabs == name ? 'block' : 'none'
   }
   const { searchForFilter, finishFilter, massFilters } = useContext(PagesContext)
   const { products } = useContext(ProductsContext)
   const [searchParams, setSearchParams] = useSearchParams()
   const closeCheckBox = () => setTabs(null)
   async function searchStart() {
      console.log(mass);
      const massurl: string[] = []
      massFilters.map((item: categoryState) => {
         item.map((i: string) => massurl.push(i))
      })

      console.log("massFilters: ", massurl);
      setSearchParams({
         filter: `${massurl.join('+')}`
      })
      await searchForFilter(products)
      return closeCheckBox()
   }


   return (
      <React.Fragment>
         <li className="filter__list-item">
            <div className="filter__item">
               <p className="filter__item-p" onClick={() => setTabs(name)} > {name}</p>
               <div style={styleOptions} className="filter__option">
                  <div className="filter__option-filter">
                     <div className="filter__option-block">
                        <p className="filter__option-span">Выбрано: <span>{mass.length}</span></p>
                     </div>
                     <input onClick={searchStart} className="filter__option-btn" type="button" value="Выбрать" />
                  </div>
                  <ul className="filter__option-list">
                     {filtres.map((item, index) => {
                        return <CatalogeFilterItem key={index} mass={mass} setMass={setMass} item={item} />
                     })}
                  </ul>
               </div>
            </div>
         </li>

      </React.Fragment>

   )
}

export default CatalogeFilter