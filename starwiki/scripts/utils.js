export async function requestApi(baseURL, endpoint) {
    try {
        const response = await fetch(baseURL + endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}