import {configureStore} from '@reduxjs/toolkit';
import employeeReducer from "./slice/employeeSlice";
import projectSlice from './slice/projectSlice';
import clientSlice from './slice/clientSlice';

export const store = configureStore({
    reducer: {
       employee: employeeReducer,
       project: projectSlice,
       client: clientSlice,
    },
}); 