import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { categoryState } from "../Types/pages/CatalogeFilters";
import { IProduct } from "../Types/products-server";
import { TypeGenderGalleryItem } from "../Types/types-server";
export const PagesContext = React.createContext<string | any>('')

interface ProviderProps {
   children: React.ReactChild
}

const PagesProvider: React.FC<ProviderProps> = ({ children }) => {

   const pageY0 = () => document.documentElement.scrollTop = 0
   const [tabs, setTabs] = useState<any>(null)
   const [brand, setBrand] = useState<categoryState>([])
   const [category, setCategory] = useState<categoryState>([])
   const [material, setMaterial] = useState<categoryState>([])
   const [color, setColor] = useState<categoryState>([])
   const [season, setSeason] = useState<categoryState>([])
   const [basic, setBasic] = useState<categoryState>([])
   const massFilters: categoryState[] = [category, brand, material, season, basic, color]
   const setMassFilters = [setBrand, setCategory, setMaterial, setSeason, setBasic]
   const [finishFilter, setFinishFilter] = useState<IProduct[]>([])
   const DELETEFiltresState = () => {
      console.log('true');
      setMassFilters.map((item) => {
         item([])
      })
   }

   function searchForFilter(products: IProduct[]) {
      setFinishFilter(prev => [])
      for (var i = 0; i < 6; i++) {
         if (i == 1) {
            if (brand.length) {
               const massiv: IProduct[] = []
               brand.map((item) => {
                  const massivSupp = products.filter((prod) => prod.brand == item)
                  massivSupp.map((item) => massiv.push(item))
               })
               setFinishFilter(massiv)
            }
         }
         else if (i == 2) {
            if (category.length) {
               if (brand.length) {
                  const massiv: IProduct[] = []
                  category.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.filter_name == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv: IProduct[] = []
                  category.map((item) => {
                     const massivSupp = products.filter((prod) => prod.filter_name == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 3) {
            if (material.length) {
               if (brand.length || category.length) {
                  const massiv: IProduct[] = []
                  material.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.material == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv: IProduct[] = []
                  material.map((item) => {
                     const massivSupp = products.filter((prod) => prod.material == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 4) {
            if (season.length) {
               if (brand.length || category.length || material.length) {
                  const massiv: IProduct[] = []
                  season.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.season == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv: IProduct[] = []
                  season.map((item) => {
                     const massivSupp = products.filter((prod) => prod.season == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 5) {
            if (color.length) {
               if (brand.length || category.length || material.length || season.length) {
                  const massiv: IProduct[] = []
                  color.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.color == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv: IProduct[] = []
                  color.map((item) => {
                     const massivSupp = products.filter((prod) => prod.color == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 6) {
            if (basic.length) {
               if (brand.length || category.length || material.length || season.length || color.length) {
                  const massiv: IProduct[] = []
                  basic.map((item) => {
                     if (item == 'sales') {
                        const massivSub = finishFilter.filter((prod) => prod.sales == "true")
                        massivSub.map((item) => massiv.push(item))
                     }
                     else if (item == 'moda') {
                        const massivSub = finishFilter.filter((prod) => prod.moda == "true")
                        massivSub.map((item) => massiv.push(item))

                     } else if (item == 'news') {
                        const massivSub = finishFilter.filter((prod) => prod.news == "true")
                        massivSub.map((item) => massiv.push(item))

                     }
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv: IProduct[] = []
                  basic.map((item) => {
                     if (item == 'sales') {
                        const massivSub = products.filter((prod) => prod.sales == "true")
                        massivSub.map((item) => massiv.push(item))
                     }
                     else if (item == 'moda') {
                        const massivSub = products.filter((prod) => prod.moda == "true")
                        massivSub.map((item) => massiv.push(item))

                     } else if (item == 'news') {
                        const massivSub = products.filter((prod) => prod.news == "true")
                        massivSub.map((item) => massiv.push(item))

                     }
                  })
                  setFinishFilter(massiv)
               }
            }
         }
      }
   }

   const ProductBuild = async (product: any, size: string) => {
      return {
         id: Math.random() * 1234443254534,
         amount: 1,
         size: size,
         product_id: product.id,
      }
   }

   const StorageGallery = localStorage.getItem('GenderGallery')

   const getGallery: () => TypeGenderGalleryItem[] | null = () => StorageGallery ? JSON.parse(StorageGallery) : null

   const [gallery, setGallery] = useState<TypeGenderGalleryItem[] | null>(getGallery())
   function usGetGalleryGen(obj: any[]) {
      localStorage.setItem('GenderGallery', JSON.stringify(obj))
      setGallery(getGallery())
   }
   useEffect(() => {
      if (gallery == null) {
         setGallery(getGallery())
      }
   }, [gallery])


   return (
      <PagesContext.Provider value={{
         ProductBuild,
         massFilters,
         finishFilter, DELETEFiltresState, usGetGalleryGen, gallery, setGallery,
         brand, setBrand, color, setColor, category, setCategory, material, setMaterial, season,
         setSeason, basic, setBasic, searchForFilter, pageY0, tabs, setTabs
      }}>
         {children}
      </PagesContext.Provider>
   )
}

export default PagesProvider
