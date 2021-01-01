import { serverUrl } from './urls';
import { serverPort } from './urls';

export const searchAnimalApiUrl = `${serverUrl}:${serverPort}/search`;
export const getAnimalsApiUrl = `${serverUrl}:${serverPort}/animals`;
export const getAnimalDetailApiUrl = (id) => `${serverUrl}:${serverPort}/detail/${id}`;