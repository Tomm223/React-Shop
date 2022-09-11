import React, { useState } from "react";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import AutoComplite from "./AutoComplite";
import HeaderSearch from "./HeaderSearch";
import { SearchInput } from "./SearchInput";

export const SearchLapTop: FC = () => {
   const [search, setSearch] = useState<string>('')
   // focus for effects
   const [focusSearch, setFocusSearch] = useState<boolean>(false)
   return (
      <>
         <HeaderSearch search={search} setSearch={setSearch}
            focusSearch={focusSearch} setFocusSearch={setFocusSearch} responsive={false} />
      </>

   )
}

export function CatalogeSearchResponsive() {
   const [search, setSearch] = useState('')
   // focus for effects
   const [focusSearch, setFocusSearch] = useState(false)
   return (
      <>
         <div className="cataloge-search">
            <SearchInput state={{
               focusSearch, setFocusSearch,
               search, setSearch
            }} />
         </div>
         <div className="cataloge-mini__autoComplite">
            <AutoComplite state={{
               focusSearch,
               setFocusSearch, search, setSearch
            }} />
         </div>
      </>
   )
}
export function HeaderSearchResponsive() {
   const location = useLocation()
   const [search, setSearch] = useState('')
   // focus for effects
   const [focusSearch, setFocusSearch] = useState(false)
   return (
      <div onClick={() => setFocusSearch(!focusSearch)} className="header__person">
         <img className="header__person-acc person__acc" src="img/page-icon/search.svg" />
         <div className={focusSearch ? "mini-search open" : "mini-search close"}>
            <div className="mini-search__container" >
               <div className="header__search">
                  <HeaderSearch search={search} setSearch={setSearch}
                     focusSearch={focusSearch} setFocusSearch={setFocusSearch} responsive={true} />
               </div>
               <div className="mini-search__close">
                  <img src="/img/page-icon/icons8-close-24.png" alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}