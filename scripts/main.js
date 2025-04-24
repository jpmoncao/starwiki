import { fetchPeople, fetchFilms, fetchStarships } from './api'
import { renderNavigator, getPage } from './utils'


export async function renderPeople(limit = 0) {
    const showMore = limit === 0;

    if (showMore)
        limit = 3;

    const people = await fetchPeople();

    const peopleContainer = document.querySelector('#people-container');
    peopleContainer.innerHTML = '';
    people.forEach((person, index) => {
        if (index > limit) return;
        peopleContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500 w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${person.name}</h1>
            <p>${person.height} cm | ${person.mass} kg</p>
        </div>`;
    });

    if (showMore)
        peopleContainer.innerHTML += `<a href="/personagens" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`;
    else
        renderNavigator(getPage(), 10);
}

export async function renderFilms(limit = 0) {
    const showMore = limit === 0;

    if (showMore)
        limit = 3;

    const films = await fetchFilms();
    
    const filmsContainer = document.querySelector('#films-container');
    filmsContainer.innerHTML = '';
    films.forEach((film, index) => {
        if (index > limit) return;
        filmsContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500  w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${film.title}</h1>
            <p>Episódio ${film.episode_id}</p>
            <p>${film.release_date}</p>
        </div>`;
    });

    if (showMore)
        filmsContainer.innerHTML += `<a href="/filmes" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`;
    else
        renderNavigator(getPage(), 10);
}

export async function renderStarships(limit = 0) {
    const showMore = limit === 0;

    if (showMore)
        limit = 3;

    const starships = await fetchStarships();
    
    const starshipsContainer = document.querySelector('#starships-container');
    starshipsContainer.innerHTML = '';
    starships.forEach((starship, index) => {
        if (index > limit) return;
        starshipsContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500  w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${starship.name}</h1>
            <p>${starship.model} | ${starship.starship_class}</p>
        </div>`;
    });
    
    if (showMore)
        starshipsContainer.innerHTML += `<a href="/naves" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`;
    else
        renderNavigator(getPage(), 10);
}