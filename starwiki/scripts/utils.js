export async function requestApi(baseURL, endpoint) {
    try {
        const CACHE_KEY = 'starwiki__data' + endpoint;
    
        if (!isCacheExpired(CACHE_KEY, 5 * 60 * 1000))
            return getCache(CACHE_KEY).data;
            
        console.log(endpoint + ' requested!')

        const response = await fetch(baseURL + endpoint);
        const data = await response.json();

        saveCache(CACHE_KEY, JSON.stringify({data, timestamp: Date.now()}))

        return data;
    } catch (error) {
        console.error(error);
    }
}

export function saveCache(key, value) {
    localStorage.setItem(key, value);
}

export function getCache(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function isCached(key) {
    if (!localStorage.key(key))
        return false

    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return false;
    }
}

export function isCacheExpired(key, maximumTime) {
    if (!isCached(key))
        return true
    
    const data = getCache(key);
    if (!data.timestamp)
        return true;

    const cacheMadeTimestamp = Date.now() - new Date(data.timestamp).getTime();

    return cacheMadeTimestamp > maximumTime;
}