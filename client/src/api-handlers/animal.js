import {getAnimalDetailApiUrl, getAnimalsApiUrl, searchAnimalApiUrl} from './paths';

export async function sendSearchAnimalRequest(query) {
	try {
		let url = searchAnimalApiUrl + query;
		const res = await fetch(url);
		return await res.json();
	} catch(error) {
		throw(error.message);
	}
}

export async function sendGetAnimalDetail(id) {
	try {
		let url = getAnimalDetailApiUrl(id);
		const res = await fetch(url);
		return await res.json();
	} catch(error) {
		throw(error.message)
	}
}

export async function sendGetAnimalsRequest() {
	try {
		const res = await fetch(getAnimalsApiUrl);
		return await res.json();
	} catch(error) {
		throw(error.message);
	}
}