import React, { useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import { useNavigateParams } from "../../hook/useSearchParams";
import HeaderNavSort from "./HeaderNavSort";
import { BuildType } from "../../Filtres/TypesSearch";

interface NavListProps {
   style: boolean
}

interface CategoryNavData {
   name: string,
   key: number,
   id: string
}

const HeaderNavList: React.FC<NavListProps> = ({ style }) => {

   const navigateParams = useNavigateParams()

   const [category, setCategory] = useState<CategoryNavData[]>([{ name: "Распродажа", key: 111, id: "sale" },
   { name: "Новинки", key: 221, id: "news" },
   { name: "Одежда", key: 222, id: "noshoes" },
   { name: "Обувь", key: 223, id: "shoes" },
   { name: "Модно в этом году", key: 226, id: "moda" },
   { name: "Бренды", key: 224, id: "luxery" },
   { name: "Всё", key: 225, id: "all" }])

   function Handle(event: React.MouseEvent<HTMLDivElement>, item: CategoryNavData) {
      event.stopPropagation()
      console.log(item);
      navigateParams('/cataloge', { collection: BuildType(item.id) })

   }



   return (
      <div>
         <nav className={style ? "nav active" : "nav"}>
            <ul className="nav__list">
               {category.map((item) => {
                  return (
                     <div onClick={(event) => Handle(event, item)}
                        key={item.key} className="nav__item">
                        <p className="nav__link" >{item.name}</p>
                        <HeaderNavSort category={item.id} />
                     </div>)
               })}
            </ul>
         </nav>
      </div>
   )
}
export default HeaderNavList


// event.stopPropagation()
//navigeteParams('/cataloge', { collection: BuildType(item.id) })
