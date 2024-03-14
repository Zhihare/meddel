import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://medicine-delivery-app.onrender.com";
// axios.defaults.baseURL = "http://localhost:3001"


export const getAllOrder = createAsyncThunk(
    "order/allByEmail",

    async (client, thunkAPI)=>{
        try{
            const response = await axios.post(`/orders/user`, client);
			return response.data.orders;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)