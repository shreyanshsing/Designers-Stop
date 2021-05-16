import {configureStore} from "@reduxjs/toolkit";
import web3Reducer from "../service/web3/web3Reducer";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
    reducer:{
        web3 : web3Reducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck : false
      }),
})