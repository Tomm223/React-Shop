
import ProductsContext from "../Context/ProductsContext"
import { TypesSearch } from "../Types/search/search"
import { IProduct } from '../Types/products-server'
import { useTypeSelector } from "../hook/useTypeSelector"
import { resolve } from "path"
import { rejects } from "assert"
import { GetAxios } from "../Fetch/Fetching"

export async function CheckFilterType(type: string) {
   if (!products.length) {
      products = await GetProducts()
      return GetFilter(type)
   }
   else {
      GetFilter(type)
   }


}

function GetFilter(type: string) {
   if (type === TypesSearch.SEARCH_SALES) {
      return Sales_Selector()
   }
   else if (type === TypesSearch.SEARCH_LUXERY) {
      return Luxery_Brand_Selector()
   }
   else if (type === TypesSearch.SEARCH_MODA) {
      return Moda_Selector()
   }
   else if (type === TypesSearch.SEARCH_WEAR) {
      return WEAR_Selector()
   }
   else if (type === TypesSearch.SEARCH_SHOES) {
      return ShoesSelector()
   }
   else if (type === TypesSearch.SEARCH_ALL) {
      return AllSelector()
   }
   else if (type === TypesSearch.SEARCH_MARTINS) {
      return Martins_Selector()
   }
   else if (type === TypesSearch.SEARCH_TNF) {
      return TNF_Selector()
   }
   else if (type === TypesSearch.SEARCH_NIKE) {
      return Nike_Selector()
   }
   else if (type === TypesSearch.SEARCH_CARHARTT) {
      return NewLook_Selector()
   }
   else if (type === TypesSearch.SEARCH_ELLESSE) {
      return Ellesse_Selector()
   }
   else if (type === TypesSearch.SEARCH_BOTTOM) {
      return BOTTOM_Selector()
   }
   else if (type === TypesSearch.SEARCH_TSHIRT) {
      return TSHIRT_Selector()
   }

}

const Luxery_Brand_Mass = ["Tommy Hilfiger", "Fred Perry", "Dr. Martens", "Ellesse"]

let products = JSON.parse(localStorage.getItem('products') || '[]')
if (!products.length) {
   products = GetProducts()
}

async function GetProducts() {
   const resp = await GetAxios('products')
   return resp

}

export const Sales_Selector = () => products.filter((item: IProduct) => item.sales == "true")
export const Luxery_Brand_Selector = () => products.filter((item: IProduct) =>
   Luxery_Brand_Mass.find((brand) => brand == item.brand)
)
export const Moda_Selector = () => products.filter((item: IProduct) => item.moda == "true")
export const WEAR_Selector = () => products.filter((item: IProduct) => item.filter_name.toLowerCase() != "обувь")
export const AllSelector = () => products.filter((item: IProduct) => item)
export const ShoesSelector = () => products.filter((item: IProduct) => item.filter_name.toLowerCase() == "обувь")

// Gallery Gender
export const TSHIRT_Selector = () => products.filter((item: IProduct) => item.filter_name.toLowerCase() == "футболка")
export const BOTTOM_Selector = () => products.filter((item: IProduct) => item.filter_name.toLowerCase() == "штаны")

//component MODA
export const Martins_Selector = () => products.filter((item: IProduct) => item.brand.toLowerCase() == "dr. martens")
export const Ellesse_Selector = () => products.filter((item: IProduct) => item.brand.toLowerCase() == "ellesse")
export const TNF_Selector = () => products.filter((item: IProduct) => item.brand.toLowerCase() == 'the north face')
export const Nike_Selector = () => products.filter((item: IProduct) => item.brand.toLowerCase() == 'nike')
export const NewLook_Selector = () => products.filter((item: IProduct) => item.brand.toLowerCase() == 'new look')


// filters cataloge
export async function inn(query: string) {
   return new Promise((resolve, rejects) => {
      let arr: any[] = []
      const arrStr = []

      ArrFitresQuery.forEach(async (item) => {
         const arrFilter = await item(query)
         arr.push(...arrFilter)
      })
      resolve(arr)
   })
      .then((data: any) => {
         const uniqueArray = data.filter(function (item: IProduct, pos: any) {
            return data.indexOf(item) == pos;
         })
         console.log("VFCNINBIOENBIRFNI", uniqueArray);
      })

   /*
      if (query.toLowerCase().includes("скидк") || query.toLowerCase().includes("sale")) {
         if (arr.length) {
            arr = arr.filter((item) => item.sales === "true")
         }
         else {
            arr = FilterCataloge_Sales()
         }
      }
      else if (query.toLowerCase().includes("мод") || query.toLowerCase().includes("fash")) {
         if (arr.length) {
            arr = arr.filter((item) => item.moda === "true")
         }
         else {
            arr = FilterCataloge_Moda()
         }
      }
      else if (query.toLowerCase().includes("нов") || query.toLowerCase().includes("new")) {
         if (arr.length) {
            arr = arr.filter((item) => item.news === "true")
         }
         else {
            arr = FilterCataloge_News()
         }
      }
      const newArr = arr.filter(function (item, pos) {
         return arr.indexOf(item) == pos;
      })
      console.log(newArr);
      */
}

export const FilterCataloge_filterName = (type: string) => products.filter((item: IProduct) => item.filter_name.toLowerCase().includes(type.toLowerCase()))
export const FilterCataloge_Brand = (type: string) => products.filter((item: IProduct) => item.brand.toLowerCase().includes(type.toLowerCase()))
export const FilterCataloge_Material = (type: string) => products.filter((item: IProduct) => item.material.toLowerCase().includes(type.toLowerCase()))
export const FilterCataloge_Season = (type: string) => products.filter((item: IProduct) => item.season.toLowerCase().includes(type.toLowerCase()))
export const FilterCataloge_Color = (type: string) => products.filter((item: IProduct) => item.color.toLowerCase().includes(type.toLowerCase()))
export const FilterCataloge_Sales = (type?: string) => products.filter((item: IProduct) => item.sales === "true")
export const FilterCataloge_News = (type?: string) => products.filter((item: IProduct) => item.news === "true")
export const FilterCataloge_Moda = (type?: string) => products.filter((item: IProduct) => item.moda === "true")
const ArrFitresQuery = [FilterCataloge_filterName, FilterCataloge_Brand, FilterCataloge_Material,
   FilterCataloge_Season, FilterCataloge_Color]

