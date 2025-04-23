import { requestApi } from './utils.js';

const API_URL = 'https://swapi.info/api';

export async function fetchPeople() {
    try {
        return await requestApi(API_URL, '/people');
    } catch (error) {
        console.error(error);
    }
}

export async function fetchFilms() {
    try {
        return await requestApi(API_URL, '/films');
    } catch (error) {
        console.error(error);
    }
}

export async function fetchStarships() {
    try {
        return await requestApi(API_URL, '/starships');
    } catch (error) {
        console.error(error);
    }
}