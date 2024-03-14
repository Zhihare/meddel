import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://medicine-delivery-app.onrender.com";


export const getAllOrder = createAsyncThunk(
    "order/allByEmail",

    async (client, thunkAPI)=>{
        try{
            const response = await axios.get(`/orders`, client);
			return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)