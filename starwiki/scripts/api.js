const API_URL = 'https://swapi.dev/api';

export async function fetchPeople() {
    try {
        const response = await fetch(API_URL + '/people');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        
    }
}