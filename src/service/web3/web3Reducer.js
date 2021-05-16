import {createSlice} from "@reduxjs/toolkit";

export const web3Reducer = createSlice({
    name:'web3Reducer',
    initialState:{
        web3:{},
    },
    reducers:{
        setWeb3 : (state,action) => {
            state.web3 = action.payload
        }
    }
});

export default web3Reducer.reducer;

export const {setWeb3} = web3Reducer.actions;

export const web3Selector = state => state.web3;