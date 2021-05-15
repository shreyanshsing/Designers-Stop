import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import registrationReducer from "../services/registration-service/Registration";

const store = configureStore({
    reducer:{
        registration: registrationReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
      }),
})

export default store;