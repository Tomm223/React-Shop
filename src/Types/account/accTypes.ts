export interface IAccInitState {
   order: any[],
   basket: any[],
   likes: any[],
   responsive_main?: boolean,
   error?: null | string,
   loading?: boolean

}

interface AccFullChange {
   type: AccActionType.ACC_FULL_CHANGE,
   payload: any
}
interface AccMiniChange {
   type: AccActionType.ACC_MINI_OPEN,
}

export type AccoutActionType = AccMiniChange | AccFullChange
export enum AccActionType {
   ACC_MINI_OPEN = "ACC/MINI/OPEN",
   ACC_FULL_CHANGE = "ACC/FULL/CHANGE"
}

