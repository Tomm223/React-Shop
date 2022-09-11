import React, { FC, useContext, useState } from "react";
import { PagesContext } from "../../Context/PagesProvider";
import CatalogeFilter from "./CatalogeFilter";

interface IFilterList {

}

const CatalogeFilterList: FC<IFilterList> = () => {


   const [filterCataloge, setFilterCataloge] = useState({
      basic: ['sales', 'news', 'moda'],
      brands: ["adidas", "Ellesse", "Dr. Martens", "Nike", "Tommy Hilfiger", "Fred Perry", "New Look",
         "The North Face", "Feshin"],
      season: ['all', 'summer', 'winter', 'spring'],
      material: ["Пух", "Кожа", "Нейлон", "Denim", "Хлопок", "Стрейч", "Резина", "Сетка", "Замша"],
      filterName: ['Куртка', "Штаны", "Футболка", "Обувь"],
      color: ['Черный', 'Синий', 'Зеленый', 'Белый', 'Хаки', 'Multy', 'Серый']
   })


   const { color, setColor, brand, setBrand, category, setCategory, material, setMaterial, season,
      setSeason, basic, setBasic } = useContext(PagesContext)


   return (
      <div className="filter">
         <ul className="filter__list">
            <div style={{ marginRight: "1rem" }}>
               <CatalogeFilter mass={brand} setMass={setBrand} filtres={filterCataloge.brands} name={'Бренд'} />
            </div>
            <div style={{ marginRight: "1rem" }}>
               <CatalogeFilter mass={category} setMass={setCategory} filtres={filterCataloge.filterName} name={'Категории'} />
            </div>
            <div style={{ marginRight: "1rem" }}>
               <CatalogeFilter mass={material} setMass={setMaterial} filtres={filterCataloge.material} name={'Материал'} />
            </div>
            <div style={{ marginRight: "1rem" }}>
               <CatalogeFilter mass={season} setMass={setSeason} filtres={filterCataloge.season} name={'Сезон'} />
            </div>
            <div style={{ marginRight: "1rem" }}>
               <CatalogeFilter mass={color} setMass={setColor} filtres={filterCataloge.color} name={'Цвет'} />
            </div>
            <div >
               <CatalogeFilter mass={basic} setMass={setBasic} filtres={filterCataloge.basic} name={'Основные'} />
            </div>
         </ul>
      </div>
   )
}

export default CatalogeFilterList