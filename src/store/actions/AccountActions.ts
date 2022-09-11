import React from "react";
import { AccActionType, IAccInitState } from "../../Types/account/accTypes";
import { ACC_FULL_CHANGE, ACC_MINI_OPEN } from "../Types";

export function AccountFullChange(obj: IAccInitState) {
   return {
      type: AccActionType.ACC_FULL_CHANGE,
      payload: obj
   }
}

export function AccMiniOpen() {
   return {
      type: AccActionType.ACC_MINI_OPEN
   }
}