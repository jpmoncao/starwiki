export async function requestApi(baseURL, endpoint) {
    try {
        const CACHE_KEY = 'starwiki__data' + endpoint;

        if (!isCacheExpired(CACHE_KEY, 5 * 60 * 1000))
            return getCache(CACHE_KEY).data;

        const response = await fetch(baseURL + endpoint);

        if (!response.ok)
            throw new Error('Falha ao requisitar o endpoint "'+endpoint+'"!');

        const data = await response.json();

        saveCache(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))

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

export function renderNavigator(actual, end) {
    const navigator = document.querySelector('#navigator');
    navigator.innerHTML = '';

    if (actual !== 1)
        navigator.innerHTML += `<button class="bg-zinc-900 text-yellow-300 h-8 rounded cursor-pointer hover:scale-105 transition-all px-2" data-page="${actual - 1}">Voltar</button>`;

    for (let i = 1; i <= end; i++)
        if (i === actual)
            navigator.innerHTML += `<button class="bg-yellow-300 text-zinc-900 h-8 aspect-square rounded cursor-pointer hover:scale-105 transition-all">${i}</button>`;
        else
            navigator.innerHTML += `<button class="bg-zinc-900 text-yellow-300 h-8 aspect-square rounded cursor-pointer hover:scale-105 transition-all" data-page="${i}">${i}</button>`;

    if (actual !== end)
        navigator.innerHTML += `<button class="bg-zinc-900 text-yellow-300 h-8 rounded cursor-pointer hover:scale-105 transition-all px-2" data-page="${actual + 1}">Próximo</button>`;

    const buttons = navigator.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            alterPage(e.target.dataset.page);
        });
    });
}

export function getPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page'));
    return page ? page : 1;
}

export function alterPage(page) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('page', page);
    window.location.search = urlParams.toString();
}

export function getPageState(limit = 0) {
    let hasPagination = true
    let newLimit = limit;

    if (limit <= 0) {
        newLimit = 5;
        hasPagination = false;
    }

    const page = getPage();
    const firstItem = (page - 1) * newLimit;
    const lastItem = firstItem - 1 + newLimit;

    return { page, newLimit, firstItem, lastItem, hasPagination };
}


export function getSearchTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    return search ? search : '';
}

export function alterSearchTerm(search) {
    const url = new URL(window.location);

    url.searchParams.set('search', search);

    window.history.replaceState({}, '', url);
}
