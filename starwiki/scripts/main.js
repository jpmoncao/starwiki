import { fetchPeople, fetchFilms, fetchStarships } from './api'

export async function renderPeople() {
    const people = await fetchPeople();

    const peopleContainer = document.querySelector('#people-container');
    peopleContainer.innerHTML = '';
    people.forEach((person, index) => {
        if (index > 3) return;
        peopleContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500 w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${person.name}</h1>
            <p>${person.height} cm | ${person.mass} kg</p>
        </div>`;
    });
    peopleContainer.innerHTML += `<a href="/personagens" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`
}

export async function renderFilms() {
    const films = await fetchFilms();
    
    const filmsContainer = document.querySelector('#films-container');
    filmsContainer.innerHTML = '';
    films.forEach((film, index) => {
        if (index > 3) return;
        filmsContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500  w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${film.title}</h1>
            <p>Episódio ${film.episode_id}</p>
            <p>${film.release_date}</p>
        </div>`;
    });
    filmsContainer.innerHTML += `<a href="/filmes" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`
}

export async function renderStarships() {
    const starships = await fetchStarships();
    
    const starshipsContainer = document.querySelector('#starships-container');
    starshipsContainer.innerHTML = '';
    starships.forEach((starship, index) => {
        if (index > 3) return;
        starshipsContainer.innerHTML += `
        <div class="flex flex-col justify-center border-2 border-yellow-500  w-full bg-zinc-300 p-2 rounded hover:scale-105 hover:shadow transition-all">
            <h1>${starship.name}</h1>
            <p>${starship.model} | ${starship.starship_class}</p>
        </div>`;
    });
    starshipsContainer.innerHTML += `<a href="/naves" class="h-16 w-full bg-zinc-600 rounded flex justify-center items-center text-yellow-50 font-bold hover:scale-105 hover:shadow transition-all">Ver mais +</a>`
}