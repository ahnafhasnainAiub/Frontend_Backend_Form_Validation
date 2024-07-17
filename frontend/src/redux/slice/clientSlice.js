import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchclients = createAsyncThunk('fetchclients', async () => {
    const response = await fetch("http://localhost:8000/clients");
    return response.json();
}) 

const clientSlice = createSlice({
    name: "client",
    initialState : {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchclients.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchclients.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchclients.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },

});

export default clientSlice.reducer;