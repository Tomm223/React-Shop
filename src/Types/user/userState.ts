import { IUser } from "../user-server"

export interface IUserInitState {
   user: null | IUser
}

export enum TypesUserState {
   USER_CHANGE = "USER/CHANGE"
}
interface IActionUser {
   type: TypesUserState.USER_CHANGE,
   payload: IUser
}

export type ActionUserType = IActionUser
