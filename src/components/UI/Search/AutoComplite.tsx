import React, { useEffect, useState } from "react";
import { SetStateAction } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { useTypeSelector } from "../../../hook/useTypeSelector";
import { IProduct } from "../../../Types/products-server";

interface AutoCompliteProps {
   state: StateProps
}
interface StateProps {
   focusSearch: boolean,
   setFocusSearch: React.Dispatch<SetStateAction<boolean>>,
   search: string,
   setSearch: React.Dispatch<SetStateAction<string>>,
}

const AutoComplite: FC<AutoCompliteProps> = ({ state }) => {

   const focusSearch = state.focusSearch
   const search = state.search

   const [FilterSearch, setFilterSearch] = useState<IProduct[]>()
   const products = useTypeSelector(state => state.products.products)
   useEffect(() => {
      console.log(products);
   }, [search])



   useEffect(() => {
      if (search) {
         products &&
            setFilterSearch(
               products.filter((item: IProduct) =>
                  item.product_name.toLowerCase().includes(search.toLowerCase()))
            )

      }
   }, [search])


   const stylesAutoComplite = {
      height: focusSearch ? search ? 'auto' : "0" : '0',
      width: focusSearch ? search ? 'auto' : "0" : '0',
      display: focusSearch ? search ? 'flex' : "none" : 'none',
   }

   return (
      <ul className="autoComplite" style={stylesAutoComplite}>
         {
            FilterSearch == null ? null : FilterSearch.map((item) => {
               return (<NavLink to="/product" state={{ product: item }}
                  key={item.id} className="autoCompliteLink" >{item.product_name}</NavLink>
               )
            })
         }
      </ul>
   )
}

export default AutoComplite