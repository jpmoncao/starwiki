import { fetchPeople, fetchFilms, fetchStarships } from './api'
import { renderNavigator, getPage, getPageState } from './utils'


export async function renderPeople(limit = 0, searchTerm = '') {
    const { firstItem, lastItem, hasPagination } = getPageState(limit);

    const allPeople = await fetchPeople();

    const people = allPeople.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const peopleContainer = document.querySelector('#people-container');
    peopleContainer.innerHTML = '';

    for (let i = firstItem; i < lastItem; i++) {
        if (i > people.length - 1)
            break;

        peopleContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500 w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${people[i].name}</h1>
            <p>${people[i].height} cm | ${people[i].mass} kg</p>
        </div>`;
    }

    if (!hasPagination)
        peopleContainer.innerHTML += `<a href="/personagens" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`;
    else
        renderNavigator(getPage(), Math.ceil(people.length / 10));
}

export async function renderFilms(limit = 0, searchTerm = '') {
    const { firstItem, lastItem, hasPagination } = getPageState(limit);

    const allFilms = await fetchFilms();

    const films = allFilms.filter(film =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filmsContainer = document.querySelector('#films-container');
    filmsContainer.innerHTML = '';

    for (let i = firstItem; i < lastItem; i++) {
        if (i > films.length - 1)
            break;

        filmsContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500  w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${films[i].title}</h1>
            <p>Episódio ${films[i].episode_id}</p>
            <p>${films[i].release_date}</p>
        </div>`;
    }

    if (!hasPagination)
        filmsContainer.innerHTML += `<a href="/filmes" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`;
    else
        renderNavigator(getPage(), Math.ceil(films.length / 10));
}

export async function renderStarships(limit = 0, searchTerm = '') {
    const { firstItem, lastItem, hasPagination } = getPageState(limit);

    const allStarships = await fetchStarships();

    const starships = allStarships.filter(starship =>
        starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const starshipsContainer = document.querySelector('#starships-container');
    starshipsContainer.innerHTML = '';

    for (let i = firstItem; i < lastItem; i++) {
        if (i > starships.length - 1)
            break;

        starshipsContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500  w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${starships[i].name}</h1>
            <p>${starships[i].model} | ${starships[i].starship_class}</p>
        </div>`;
    }

    if (!hasPagination)
        starshipsContainer.innerHTML += `<a href="/naves" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`;
    else
        renderNavigator(getPage(), Math.ceil(starships.length / 10));
}