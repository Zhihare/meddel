import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCatalogPharms, getOnePreparation, getPreparation } from './catalogThank';

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

		removePreparation(state, action) {
            const existingPreparation = state.addPreparations.find(
                preparation => preparation.id === action.payload.id
              );
            
              if (existingPreparation) {
                // Если элемент с указанным id существует, обновляем его
                existingPreparation.quantity = action.payload.quantity;
              } else {
                // Если элемент с указанным id не найден, добавляем новый
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



			// .addCase(getFilterCars.fulfilled, (state, action) => {
			// 	state.error = null;
			// 	state.filter = action.payload;
			// })

			.addMatcher(
				isAnyOf(
					getCatalogPharms.pending,
					getPreparation.pending,
                    getOnePreparation.pending
				), state => {
					state.isLoading = true;
				})
			.addMatcher(
				isAnyOf(
					getCatalogPharms.rejected,
					getPreparation.rejected,
                    getOnePreparation.rejected
				), (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
});

export const catalogReducer = catalogSlice.reducer;
export const { addPreparation, setPharmacys, setPreparation, removePreparation, setIsLoading, setFilter, setModal, setModalData, setFavorites } = catalogSlice.actions;