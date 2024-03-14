import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addOrder, getCatalogPharms, getOnePreparation, getPreparation } from './catalogThank';

const initialState = {
	Pharmacys: [],
    Preparation: [],

	isLoading: false,
	error: null,

	addPreparations: [],

	modal: false,
	modalData: null,


};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,

	reducers: {

		setPharmacys(state, action) {
			state.Pharmacys = action.payload;
		},

        setPreparation(state, action) {
            state.Preparation = action.payload;
        },

        setIsLoading(state, action){
            state.isLoading = action.payload;
        },

		addPreparation(state, action) {
			state.addPreparations.push(action.payload);
		},

        clearOrderCart(state, action){
            state.addPreparations = [];
        },

		removePreparation(state, action) {
            const existingPreparation = state.addPreparations.find(
                preparation => preparation.preparationID === action.payload.preparationID
              );
            
              if (existingPreparation) {
                existingPreparation.quantity = action.payload.quantity;
              } else {
                state.addPreparations.push(action.payload);
              }
            },




		setFilter(state, action) {
			state.filter = action.payload;
		},

		setModal(state, action) {
			state.modal = action.payload;
		},

		setModalData(state, action) {
			state.modalData = action.payload;
		},
	},

	extraReducers: builder => {
		builder
			.addCase(getCatalogPharms.fulfilled, (state, action) => {
				
				state.error = null;
				state.Pharmacys = action.payload;
             
			})

			.addCase(getPreparation.fulfilled, (state, action) => {
	
				state.error = null;
				state.Preparation = action.payload;
          
			})


			.addMatcher(
				isAnyOf(
					getCatalogPharms.pending,
					getPreparation.pending,
                    getOnePreparation.pending,
                    addOrder.pending
				), state => {
					state.isLoading = true;
				})
			.addMatcher(
				isAnyOf(
					getCatalogPharms.rejected,
					getPreparation.rejected,
                    getOnePreparation.rejected,
                    addOrder.rejected,

				), (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
});

export const catalogReducer = catalogSlice.reducer;
export const { addPreparation, clearOrderCart, setPharmacys, setPreparation, removePreparation, setIsLoading, setFilter, setModal, setModalData, setFavorites } = catalogSlice.actions;