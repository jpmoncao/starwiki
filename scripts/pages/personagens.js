import { renderPeople } from "../main";
import { alterSearchTerm, getSearchTerm } from "../utils";

const DEFAULT_LIMIT = 10;

renderPeople(DEFAULT_LIMIT, getSearchTerm());

document.querySelector('#search-term').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    alterSearchTerm(searchTerm)
    renderPeople(DEFAULT_LIMIT, searchTerm);
});