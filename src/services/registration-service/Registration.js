import {createSlice} from "@reduxjs/toolkit";

export const registrationReducer = createSlice({
    name:"Registration",
    initialState:{
        contract:{},
        owner:"",
    },
    reducers:{
        addContract : (state,action) => {
            state.contract = action.payload;
        },
        addOwner : (state,action) => {
            state.owner = action.payload;
        }
    }
});

export default registrationReducer.reducer;

export const {addContract,addOwner} = registrationReducer.actions;

export const getOwner = state => state.registration.owner;

export const getContract = state => state.registration.contract;