

export async function ParseAccountChange() {
   const resp = await JSON.parse(localStorage.getItem('UserChange'))
   return resp
}
export async function ParseUser() {
   const resp = await JSON.parse(localStorage.getItem('auth'))
   return resp
}
export async function ParseProducts() {
   const resp = await JSON.parse(localStorage.getItem('products'))
   return resp
}















/*
export async function initialStateRedux() {
   try {
      ProductsInitial()
      UserInitial()
      AccountInitial()
   }
   catch {
      alert("Что-то пошло не так")
   }
}

export async function AccountInitial() {
   const dispatch = useDispatch()
   const accChange = await JSON.parse(localStorage.getItem('UserChange'))
   dispatch(AccountFullChange(accChange))

}
export async function ProductsInitial() {
   const dispatch = useDispatch()
   const products = await JSON.parse(localStorage.getItem('products'))
   dispatch(ProductsInit(products))

}
export async function UserInitial() {
   const dispatch = useDispatch()
   const user = await JSON.parse(localStorage.getItem('auth'))
   dispatch(UserInit(user))

}
*/