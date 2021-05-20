import {configureStore} from "@reduxjs/toolkit";
import web3Reducer from "../service/web3/web3Reducer";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import userProfile from "../service/userProfile/userProfile.slice";

export default configureStore({
    reducer:{
        web3 : web3Reducer,
        userProfile : userProfile
    },
    middleware: getDefaultMiddleware({
        serializableCheck : false
      }),
})