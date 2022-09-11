import { LOCATION_FROM_CHANGE } from "../Types";

export function LocationFrom(path) {
   return {
      type: LOCATION_FROM_CHANGE,
      payload: path
   }
}