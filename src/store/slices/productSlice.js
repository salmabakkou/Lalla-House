import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const productSlice=createSlice({
    name:"products",
    initialState: {
        products:products,
        selectedCategory:"all",
        searchQuery:"",
    },
    reducers:{
        setCategory(state,action){
            state.selectedCategory=action.payload;
        },
        setSearch(state,action){
            state.searchQuery=action.payload;
        },
        resetFiltres(state){
            state.selectedCategory="all";
            state.searchQuery="";
        },
    }
})
export const {setCategory,setSearch,resetFiltres}=productSlice.actions;
export default productSlice.reducer;