import { createSlice } from "@reduxjs/toolkit";
import { defaultTheme } from "react-select";

export const homeSlice = createSlice({
    name:'Home',
    initialState:{
        url:{},
        genres:{}
    },
    reducers:{
        getApiConfig:(state,action)=>{
            state.url = action.payload
        },
        getGenres:(state,action)=>{
            state.genres = action.payload
        }
    }
})
export const {getApiConfig,getGenres} = homeSlice.actions

export default homeSlice.reducer