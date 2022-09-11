import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { DeleteProduct, ToBasket, AccProductGet } from "../../Fetch/Fetching"
import { SelectReact, ParamsForm, BuildOptionsSelect } from '../UI/Form/Form'
import { useForm, Controller } from "react-hook-form"
import { PagesContext } from "../../Context/PagesProvider";
import { TypesAccProductsChange } from "../../Types/fetch/buildBody";
import { ILikes, IProduct, IUserChange, OptionSelect } from "../../Types/products-server";

interface LikesItemProps {
   userID: string,
   item: ILikes,
   product: IProduct | null,
   size: string,
   itemId: number
}

const AccountLikesItem: React.FC<LikesItemProps> = ({ userID, item, product, size, itemId }) => {
   const {
      register,
      formState: { errors },
      control,
      watch
   } = useForm({
      mode: "onChange",
      defaultValues: {
         size: size
      }
   })
   // BuildOptions for Select
   const [optSize, setOptSize] = useState<OptionSelect[]>([])
   useEffect(() => {
      const func = async () => {
         if (product) {
            const option = await BuildOptionsSelect(product.filter_name) as OptionSelect[]
            setOptSize(option)
         }
      }
      func()
   }, [])

   // ВОТ ТА ШТУКА КОТОРАЯ ОТЛАВЛИВАЕТ ONCHANGE SELECTS
   const { handleSelect, UseSetChages } = useContext(AccountContext)
   useEffect(() => {
      const subscription = watch((value) => handleSelect(userID, value, item, 'likes'));
      return () => subscription.unsubscribe();
   }, [watch]);
   async function HandleAdd() {
      const response = await ToBasket(userID, itemId) as (id: string, Id: number) => IUserChange
      console.log(response);
      UseSetChages(response)
   }
   async function HandleDelete() {
      const response = await DeleteProduct(userID, TypesAccProductsChange.likes, itemId) as (id: string, type: TypesAccProductsChange) => IUserChange
      UseSetChages(response)
   }


   return (
      <li className="basket__item">
         <div className="basket__product">
            <div className="basket__product-img">
               <img src={product?.img_product} alt="" />
            </div>
            <div className="basket__product-supp">
               <div className="basket__product-title">
                  <p id="product__name">{product?.product_name}</p>
               </div>
               <ul className="basket__product-list">

                  <div className="basket__product-item">
                     <h4>Цвет: <span id="product__cvet">{product?.color}</span></h4>
                  </div>
                  <div className="basket__product-item">
                     <p>
                        Цена: <span id="product__price">{product?.price}</span>$
                     </p>
                  </div>
                  <div className="basket__product-item">
                     <div className="basket__product-form">
                        <form style={{ paddingRight: "1em" }}>
                           <label style={{ width: '95%' }} className="basket__form-label">
                              <h4 className="">Pазмер:</h4>
                              <Controller control={control} name="size" rules={ParamsForm("size")}
                                 render={({ field: { onChange, value }, fieldState: { error } }) =>
                                    <SelectReact onChange={onChange} value={value}
                                       error={error} options={optSize} />
                                 } />
                           </label>
                        </form>
                     </div>
                  </div>
                  <div className="basket__product-item">
                     <div className="profile__list-block">
                        <input onClick={HandleAdd} id="like__btn" type="button" value="Добавить в Корзину" />
                     </div>
                  </div>

               </ul>
               <div className="basket__product-delete">
                  <img onClick={HandleDelete} src="/img/page-icon/icons8-close-24.png" alt="" />
               </div>
            </div>
         </div>
      </li>
   )
}
export default AccountLikesItem



/*

ADD TO BASKET:
onClick={() => AddTopDelBottom('BasketChange', usSetChangeBasket, ProductToBasket, 'DeleteLikes', usSetDeleteLikes, DeleteProduct)} 

DELETE BUTTON:
onClick={() => PostDeleteItemChange('DeleteLikes', usSetDeleteLikes, DeleteProduct)}


PROPS:
 const ProductToBasket = {
      product_id: product.id,
      size: size,
      amount: 1,
   }
   const DeleteProduct = {
      likes_id: itemId
   }


*/