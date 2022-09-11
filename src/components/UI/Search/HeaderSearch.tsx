import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import AutoComplite from "./AutoComplite";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { useNavigateParams } from "../../../hook/useSearchParams";
import { FC } from "react";
import { SetStateAction } from "react";

interface HeaderSearchProps {
   responsive: boolean,
   search: string,
   setSearch: React.Dispatch<SetStateAction<string>>,
   focusSearch: boolean,
   setFocusSearch: React.Dispatch<SetStateAction<boolean>>
}

const HeaderSearch: FC<HeaderSearchProps> = ({ responsive, search, setSearch, focusSearch, setFocusSearch }) => {

   return (
      <>
         <SearchInput miniFocus={responsive && focusSearch} state={{
            focusSearch, setFocusSearch,
            search, setSearch
         }} />
         <AutoComplite state={{
            focusSearch,
            setFocusSearch, search, setSearch
         }} />
      </>
   )
}

export default HeaderSearch

//miniFocus={responsive && focusSearch}