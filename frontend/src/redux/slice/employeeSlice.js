import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk('fetchEmployees', async () => {
    const response = await fetch("http://localhost:8000/employees");
    return response.json();
}) 

const employeeSlice = createSlice({
    name: "employee",
    initialState : {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchEmployees.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchEmployees.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },

});

export default employeeSlice.reducer;