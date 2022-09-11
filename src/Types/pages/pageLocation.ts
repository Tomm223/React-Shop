export interface IPagesInitState {
   location: ILocation
}
export interface ILocation {
   pathname: string,
   state: any,
   key: any,
   search: null | string,
   hash: null | string
}
export enum TypesPagesState {
   LOCATION_FROM_CHANGE = 'PAGES/LOCATION/FROM/CHANGE'

}
interface ITypePage {
   type: TypesPagesState.LOCATION_FROM_CHANGE,
   payload: ILocation
}
export type ActionPagesType = ITypePage
