import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://medicine-delivery-app.onrender.com";

export const getCatalogPharms = createAsyncThunk(
	"catalog/fetchPharmacysAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(`/pharmacys/all`);
			return response.data.result;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const getPreparation = createAsyncThunk(
    "catalog/fetchPreparation",
    async (id, thunkAPI)=>{
        try{
            const response = await axios.get(`/pharmacy/${id}`);
			return response.data.preparation;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addOrder = createAsyncThunk(
    "catalog/postOrder",
    async (newOrder, thunkAPI)=>{
        try{
            const response = await axios.post(`/orders`, newOrder);
			return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const getOnePreparation = createAsyncThunk(
    "catalog/fetchOnePreparation",
    async (id, thunkAPI)=>{
        try{
            const response = await axios.get(`/pharmacy/one/${id}`);
			return response.data.preparation;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)


// export const getCatalogAllCars = createAsyncThunk(
// 	"catalog/fetchAllCars",
// 	async (_, thunkAPI) => {
// 		try {
// 			const response = await axios.get(`/cars`);
// 			return response.data;
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.message);
// 		}
// 	}
// );

// export const getFilterCars = createAsyncThunk(
// 	"catalog/make",
// 	async (make, thunkAPI) => {
// 		try {
// 			const response = await axios.get(`cars?make=${make}`);
// 			return response.data;
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.message);
// 		}
// 	}
// )