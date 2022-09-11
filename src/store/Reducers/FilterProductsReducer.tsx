import React from "react";
import { FILTER_CATALOGE } from "../Types";

interface FilterReducerInitState {
   category: any[],
   brand: any[],
   material: any[],
   season: any[],
   color: any[],
   sales: boolean,
}

const initialState: FilterReducerInitState = {
   category: [],
   brand: [],
   material: [],
   season: [],
   color: [],
   sales: false,

}

enum TypesFilterAction {
   FILTER_CATALOGE = "FILTER/CATALOGE"
}
interface FilterAction {
   type: TypesFilterAction.FILTER_CATALOGE
}

type TypeFilterAction = FilterAction

function FilterProductsReducer(state = initialState, action: TypeFilterAction) {
   switch (action.type) {

      case FILTER_CATALOGE:
         return { ...state, }

      default: return { ...state }
   }
}