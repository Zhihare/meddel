export const catalogSelector = state => state.catalog.Pharmacys;
export const allPreparationsSelector = state => state.catalog.Preparation;
export const selectAddPreparation = state => state.catalog.addPreparations;

export const selectIsLoading = state => state.catalog.isLoading;
export const selectFilter = state => state.catalog.filter;
export const selectFilterFavorites = state => state.catalog.filterFavorites;


export const modalSelector = state => state.catalog.modal;
export const modalDataSelector = state => state.catalog.modalData;

