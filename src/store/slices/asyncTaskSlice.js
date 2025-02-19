import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    "user/fetchUserData",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products/");
        return response.data;
    }
);

const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

const asyncTaskSlice = createSlice({
    name: "asyncTask",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data.push(action.payload)
            state.isLoading = false
        });

        builder.addCase(fetchData.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
        })
    }
})

export default asyncTaskSlice.reducer;

