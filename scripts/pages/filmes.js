import { renderFilms } from "../main";
import { alterSearchTerm, getSearchTerm } from "../utils";

const DEFAULT_LIMIT = 10;

renderFilms(DEFAULT_LIMIT, getSearchTerm());

document.querySelector('#search-term').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    alterSearchTerm(searchTerm)
    renderFilms(DEFAULT_LIMIT, searchTerm);
});