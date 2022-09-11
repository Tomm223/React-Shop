import React, { useContext, useRef, useEffect, useState } from "react";
import ProductsContext from "../../Context/ProductsContext";
import AccountZakazListImg from "./AccountZakazListImg";
import AccountZakazListProduct from "./AccountZakazListImg";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../Context/AuthProvider";
import { IBasket, IOrder, IOrderProducts, IProduct } from "../../Types/products-server";

interface OrderItemProps {
   order: IOrder,
   productsOrder: IOrderProducts[]
}

const AccountZakazItem: React.FC<OrderItemProps> = ({ order, productsOrder }) => {
   const [delBool, setDelBool] = useState(false)
   function HandleMore() {
      setDelBool(true)
   }
   const classMoreDel = delBool ? "zakaz__item-more-modal active" : "zakaz__item-more-modal"
   const { products } = useContext(ProductsContext)

   return (
      <NavLink to="more" state={{ order }}>
         <div className="zakaz__item green">
            <div className="zakaz__item-title">
               <div className="zakaz__item-status">
                  <div className="zakaz__item-color"></div>
                  {order.send == "true" ? "ОТПРАВЛЕН" : "НЕ ОТПРАВЛЕН"}
               </div>
               <aside>Заказ № <span id="zakaz__num">{order.id}</span></aside>
               <div onClick={HandleMore} className="zakaz__item-more">
                  <img src="/img/page-icon/more.png" alt="more" />
                  <div className={classMoreDel}>
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex p-right-15">
                              <p>удалить</p>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="zakaz__gallery">
               <ul className="zakaz__gallery-list">
                  {productsOrder.map((item: IOrderProducts) => {
                     const product = products.find((prod: IProduct) => prod.id == item.product_id)
                     return <AccountZakazListImg img={product.img_product} />
                  })}
                  <li className="zakaz__gallery-item">
                     <div className="zakaz__gallery-more">
                        <img className="zakaz__gallery-opacity" src="/img/t-shirt/t-shirt1-1.jpg"
                           alt="img" />
                        <div className="zakaz__gallery-after"><img src="/img/page-icon/more-img.png"
                           alt="" /></div>
                     </div>

                  </li>
               </ul>
            </div>
         </div>
      </NavLink>

   )
}
export default AccountZakazItem