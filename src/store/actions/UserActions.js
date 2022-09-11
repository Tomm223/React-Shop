import { INITIALSTATE, USER_CHANGE } from "../Types";

export function UserInit(user) {
   return {
      type: USER_CHANGE,
      payload: user
   }
}
export function StateInit() {
   return {
      type: INITIALSTATE
   }
}