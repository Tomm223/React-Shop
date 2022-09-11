
export function LoadingDefault() {
   return (
      <div className="spinner-border m-5" role="status">
         <span className="visually-hidden">Loading...</span>
      </div>
   )
}
export function LoadingGenderGallery() {
   return (
      <div className="gallery__item" aria-hidden="true">
         <img src="..." className="gallery__item-img paddingImg placeholder" alt="..." />
         <div className="gallery__item-title placeholder-glow">
            <span className="placeholder col-12"></span>
         </div>
      </div>
   )
}
