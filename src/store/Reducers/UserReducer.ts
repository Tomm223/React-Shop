
import { type } from "os";
import React from "react";
import { IUser } from "../../Types/user-server";
import { ActionUserType, IUserInitState, TypesUserState } from "../../Types/user/userState";
import { USER_CHANGE } from "../Types";


const initialState: IUserInitState = {
   user: null
}

export function UserReducer(state = initialState, action: ActionUserType) {
   switch (action.type) {
      case TypesUserState.USER_CHANGE:
         return { ...state, user: action.payload }
      default: return state
   }
}