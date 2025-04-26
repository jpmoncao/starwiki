import { renderStarships } from "../main";
import { alterSearchTerm, getSearchTerm } from "../utils";

const DEFAULT_LIMIT = 10;

renderStarships(DEFAULT_LIMIT, getSearchTerm());

document.querySelector('#search-term').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    alterSearchTerm(searchTerm)
    renderStarships(DEFAULT_LIMIT, searchTerm);
});