export interface IUser {
   id: string,
   firstName: string,
   lastName: string,
   password: string,
   email: string,
   address: IAddress
}

interface IAddress {
   city: string,
   street: string,
   house: string,
   country: string
}