import {createSlice} from "@reduxjs/toolkit";

export const userProfile = createSlice({
    name:'user-profile',
    initialState:{
        profile:""
    },
    reducers:{
        setProfile : (state,action) => {
            state.profile = action.payload;
        }
    }
});

export default userProfile.reducer;

export const {setProfile} = userProfile.actions;

export const selectorUserProfile = state => state.userProfile;