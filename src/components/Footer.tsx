import React from "react";

function Footer() {

   function handle(event: any) {
      event.preventDefault()
      event.target.sub.value = ''
   }
   return (
      <>
         <div className="free">
            <div className="container">
               <div className="free__list">
                  <div className="free__item">
                     <img className="free__item-img" src="/img/page-icon/delivery.svg" alt="" />
                     <h3 className="free__item-title">Free Delivery</h3>
                     <p className="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div className="free__item">
                     <img className="free__item-img" src="/img/page-icon/discounts.svg" alt="" />
                     <h3 className="free__item-title">Sales & discounts</h3>
                     <p className="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div className="free__item">
                     <img className="free__item-img" src="/img/page-icon/quality.svg" alt="" />
                     <h3 className="free__item-title">Quality assurance</h3>
                     <p className="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
               </div>


            </div>

         </div>
         <div className="sub">
            <div className="sub__item">
               <form onSubmit={handle} className="sub__item-form">
                  <label className="sub__item-supp">
                     <h3>SUBSCRIBE</h3>
                     <span>FOR OUR NEWSLETTER AND PROMOTION</span>
                  </label>
                  <input className="sub__item-input" name="sub" type="text" placeholder="Email" />
                  <input className="sub__item-btn" type="button" value="Subscribe" />
               </form>
            </div>
         </div>
         <div className="free">
            <div className="container">
               <div className="free__list">
                  <div className="free__item">
                     <img className="free__item-img" src="/img/page-icon/delivery.svg" alt="" />
                     <h3 className="free__item-title">Free Delivery</h3>
                     <p className="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div className="free__item">
                     <img className="free__item-img" src="/img/page-icon/discounts.svg" alt="" />
                     <h3 className="free__item-title">Sales & discounts</h3>
                     <p className="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
                  <div className="free__item">
                     <img className="free__item-img" src="/img/page-icon/quality.svg" alt="" />
                     <h3 className="free__item-title">Quality assurance</h3>
                     <p className="free__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam
                        itaque.</p>
                  </div>
               </div>


            </div>

         </div>
         <footer className="footer">
            <div className="container">
               <div className="footer__items">
                  <div className="footer__text">© 2022 VESH4lKa</div>
                  <div className="footer__contacts">
                     <div className="contact-item contact-item-face"></div>
                     <div className="contact-item contact-item-vk"></div>
                     <div className="contact-item contact-item-inst"></div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}
export default Footer