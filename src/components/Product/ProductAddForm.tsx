import React, { FC, useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PagesContext } from "../../Context/PagesProvider";
import { AddProduct } from "../../Fetch/Fetching";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { productShowError, productToAcc } from "../../store/actions/ProductActions";
import { TypesAccProductsChange } from "../../Types/fetch/buildBody";
import { IProduct, OptionSelect } from "../../Types/products-server";
import { BuildOptionsSelect, ParamsForm, SelectReact } from "../UI/Form/Form";

interface AddFormProps {
   product: IProduct
}

const ProductAddForm: FC<AddFormProps> = ({ product }) => {
   // form product
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      control,
      setFocus,
      setError
   } = useForm({
      mode: "onSubmit"
   })

   const user = useTypeSelector(state => state.user.user)
   const dispatch = useDispatch()
   // BuildOptions for Select
   const [options, setOptions] = useState<[] | OptionSelect[]>([])
   useEffect(() => {
      const func = async () => {
         const option = await BuildOptionsSelect(product.filter_name)
         setOptions(option)
      }
      func()
   }, [])
   //func form
   const { ProductBuild } = useContext(PagesContext)
   const [change, setChange] = useState<string>('')

   async function HandleProduct(data: any) {
      if (user) {
         try {
            const prod = await ProductBuild(product, data.size)
            const response = await AddProduct(user.id, change, prod)
            reset()
            dispatch(productToAcc(prod, change))
         }
         catch {
            dispatch(productShowError("Что-то пошло не так"))
         }
      }
      else {
         dispatch(productShowError("Войдите в Аккаунт чтобы добавить"))
      }

   }


   return (
      <form className="profile__list-form" onSubmit={handleSubmit(HandleProduct)}>
         <div className="profile__list-select">Pазмер:
            <Controller control={control} name="size" rules={ParamsForm("size")}
               render={({ field: { onChange, value }, fieldState: { error } }) =>
                  <SelectReact onChange={onChange} value={value} error={error} options={options} />
               } />
         </div>
         <div style={{ display: "flex" }}>
            <button onClick={() => setChange(TypesAccProductsChange.basket)} type="submit" className="profile__btn-basket">
               <img src="/img/page-icon/basket.png" alt="" />
               Добавить в Корзину
            </button>
            <button onClick={() => setChange(TypesAccProductsChange.likes)} type="submit" className="profile__btn-like">
               <img src="/img/page-icon/circle-love-50.png" alt="" />
            </button>
         </div>
      </form>
   )
}

export default ProductAddForm