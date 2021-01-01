import React, { createContext, useContext, useReducer } from 'react';
import * as constants from './actions/actionTypes';

export const StoreContext = createContext();
const initialState = {
	animals: {},
	fetchingAnimals: false,
	fetchingAnimalsError: "",
};

const reducer = (state, action) => {
	console.log(action);
	switch(action.type) {
		case constants.GET_ANIMALS_REQUEST:
			return {
				...state,
				fetchingAnimals: true,
			};
		case constants.GET_ANIMALS_SUCCESS:
			return {
				...state,
				animals: action.payload.response,
				fetchingAnimals: false,
			};
		case constants.GET_ANIMALS_FAILURE:
			return {
				...state,
				animals: {},
				fetchingAnimals: false,
				fetchingAnimalsError: action.payload.error,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StoreContext.Provider value={{state, dispatch}}>
			{children}
		</StoreContext.Provider>
	)
};

export const useStore = () => useContext(StoreContext);