import React from "react";
import { ActionPagesType, IPagesInitState, TypesPagesState } from "../../Types/pages/pageLocation";
import { LOCATION_FROM_CHANGE } from "../Types";


const initialState: IPagesInitState = {
   location: {
      pathname: '/',
      state: null,
      key: null,
      search: null,
      hash: null
   }
}

export default function PagesReducer(state = initialState, action: ActionPagesType): IPagesInitState {
   switch (action.type) {
      case TypesPagesState.LOCATION_FROM_CHANGE:
         return { ...state, location: action.payload }
      default: return state
   }
}