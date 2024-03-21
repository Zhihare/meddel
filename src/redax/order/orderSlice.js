import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllOrder } from './orderThank';

const initialState = {
    orderData: [],
    email: null,
    phone: null,

    error: null,
    isLoading: false,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,

    reducers: {
        allOrder: (state, action) => {
            state.orderData = action.payload;
        },

        setEmail:(state, action) =>{
            state.email = action.payload;
        },

        setPhone:(state, action) =>{
            state.phone = action.payload;
        },

        setIsLoading(state, action){
            state.isLoading = action.payload;
        },

        setError(state, action){
            state.error = action.payload;
        },

        clearOrders(state, action){
            state.orderData = [];
        },
    },

extraReducers: builder => {
    builder
        .addCase(getAllOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.orderData = action.payload;
         
        })

        .addMatcher(
            isAnyOf(
               getAllOrder.pending,
            ), state => {
                state.isLoading = true;
            })
        .addMatcher(
            isAnyOf(
                getAllOrder.rejected
            
            ), (state, action) => {
                state.orderData = [];
                state.isLoading = false;
                state.error = action.payload;
            });
},
});

export const orderReducer = orderSlice.reducer;
export const {allOrder,setEmail, setPhone, setIsLoading, clearOrders} = orderSlice.actions;