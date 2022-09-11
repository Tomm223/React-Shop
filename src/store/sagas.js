
import { takeEvery, put, call } from 'redux-saga/effects'
import { AccountFullChange } from "./actions/AccountActions";

import { ProductsInit } from "./actions/ProductsActions";
import { UserInit } from "./actions/UserActions";
import { ParseAccountChange, ParseProducts, ParseUser } from "./GetLocalStorage";
import { INITIALSTATE } from "./Types";

export function* sagaWatcher() {
   yield takeEvery(INITIALSTATE, sagaInitial)
}


function* sagaInitial() {
   const payloadAcc = yield call(ParseAccountChange)
   const payloadUser = yield call(ParseUser)
   const payloadProd = yield call(ParseProducts)
   yield put(AccountFullChange(payloadAcc))
   yield put(ProductsInit(payloadProd))
   yield put(UserInit(payloadUser))
}



