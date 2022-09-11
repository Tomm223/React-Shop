

import React from "react";
import { ACC_ALERT_SHOW, ACC_FULL_CHANGE, ACC_MINI_OPEN } from "../Types";
import { AccActionType, IAccInitState, AccoutActionType } from '../../Types/account/accTypes'



const initialState: IAccInitState = {
   order: [],
   basket: [],
   likes: [],
   responsive_main: false,
   error: null,
   loading: false
}

export function AccountReducer(state = initialState, action: AccoutActionType): IAccInitState {
   switch (action.type) {
      case AccActionType.ACC_FULL_CHANGE:
         return {
            ...state, ...action.payload
         }
      case AccActionType.ACC_MINI_OPEN:
         return { ...state, responsive_main: !state.responsive_main }
      default: return state
   }
}

