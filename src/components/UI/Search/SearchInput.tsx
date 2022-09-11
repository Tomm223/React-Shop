import React, { Fragment, SetStateAction, useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useNavigateParams } from "../../../hook/useSearchParams";

interface SearchInputProps {
   state: StateProps,
   miniFocus?: boolean
}
interface StateProps {
   focusSearch: boolean,
   setFocusSearch: React.Dispatch<SetStateAction<boolean>>,
   search: string,
   setSearch: React.Dispatch<SetStateAction<string>>,
}

export const SearchInput: React.FC<SearchInputProps> = ({ state, miniFocus }) => {
   const focusSearch = state.focusSearch
   const setFocusSearch = state.setFocusSearch
   const search = state.search
   const setSearch = state.setSearch
   const input = useRef<HTMLInputElement | null>(null)
   const location = useLocation()

   // Navigate to Cataloge, search in URLParams
   const [searchParams, setSearchParams] = useSearchParams()
   const navigateParams = useNavigateParams()
   //Handle for searching
   function HandlerSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()
      if (search.length) {
         location.pathname != "/cataloge" ? navigateParams('/cataloge', { products: search }) : setSearchParams({ products: search })
         //console.log(inn(search))
      }
   }


   //style BTN

   const classesBtn = search.length && focusSearch ? "header__search-btn active" : "header__search-btn"

   // responsive 
   useEffect(() => {
      if (miniFocus) {
         input.current &&
            input.current.focus()
      }
   }, [miniFocus])


   return (
      <Fragment>
         {focusSearch && <div className={'SearchInput__background_block'}></div>}

         <form onSubmit={HandlerSubmit} className="header__search-form">
            <input ref={input} onFocus={() => setFocusSearch(true)} onBlur={() => setTimeout(() => setFocusSearch(false), 300)}
               className="header__search-input" type="text" placeholder="Поиск"
               onChange={event => setSearch(event.target.value)} />
            <button type="submit" className={classesBtn}>
               <div className="header__search-btn-item"></div>
            </button>
         </form >
      </Fragment>

   )
}