import * as constants from './actionTypes';
import {sendGetAnimalsRequest, sendSearchAnimalRequest} from '../api-handlers/animal';

export function getAnimalsRequest() {
	return {
		type: constants.GET_ANIMALS_REQUEST,
	}
}

export function getAnimalsSuccess(response) {
	return {
		type: constants.GET_ANIMALS_SUCCESS,
		payload: { response },
	}
}

export function getAnimalsFailure(error) {
	return {
		type: constants.GET_ANIMALS_FAILURE,
		payload: { error },
	}
}

export async function getAnimals(dispatch) {
	dispatch(getAnimalsRequest());
	try {
		const res = await sendGetAnimalsRequest();
		dispatch(getAnimalsSuccess(res));
	} catch(error) {
		dispatch(getAnimalsFailure(error));
	}
}