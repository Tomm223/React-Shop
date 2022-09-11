//export const ALL_TYPES_SEARCH = [SEARCH_SALES, SEARCH_NO_SHOES, SEARCH_LUXERY, SEARCH_MODA]

import { TypesSearch } from "../Types/search/search"

export function BuildType(type: string) {
   if (type == 'news') {
      return TypesSearch.SEARCH_NEWS
   }
   else if (type == 'noshoes') {
      return TypesSearch.SEARCH_WEAR
   }
   else if (type == 'shoes') {
      return TypesSearch.SEARCH_SHOES
   }
   else if (type == 'sale') {
      return TypesSearch.SEARCH_SALES
   }
   else if (type == 'moda') {
      return TypesSearch.SEARCH_MODA
   }
   else if (type == 'luxery') {
      return TypesSearch.SEARCH_LUXERY
   }
   else if (type == 'all') {
      return TypesSearch.SEARCH_ALL
   }
   else if (type == 't-shirt') {
      return TypesSearch.SEARCH_TSHIRT
   }
   else if (type == 'bottom') {
      return TypesSearch.SEARCH_BOTTOM
   }

}

