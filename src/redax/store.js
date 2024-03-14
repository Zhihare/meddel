import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalogSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { orderReducer } from './order/orderSlice';

const preparationsConfig = {
	key: 'catalog',
	storage,
	whitelist: ['addPreparations'],
};

const ordersConfig = {
	key: 'order',
	storage,
	whitelist: ['orderData'],
}

const rootReducer = combineReducers({
	catalog: persistReducer(preparationsConfig, catalogReducer),
	order: persistReducer(ordersConfig, orderReducer),
});

export const store = configureStore({
	reducer: rootReducer,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);