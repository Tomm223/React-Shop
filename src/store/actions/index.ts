import * as AccAction from './AccountActions'
import * as PageAction from './PagesActions'
import * as ProdAction from './ProductActions'
import * as ProdsAction from './ProductsActions'
import * as UserAction from './UserActions'


export default {
   ...AccAction,
   ...PageAction,
   ...ProdAction,
   ...ProdsAction,
   ...UserAction
}