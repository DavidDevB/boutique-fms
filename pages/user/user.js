import Header from '../../components/molecular/Header.js';
import SideBar from '../../components/molecular/SideBar.js';
import UserFilters from '../../components/atomic/UserFilters.js';
import ItemsDisplay from '../../components/molecular/ItemsDisplay.js';

const body = document.querySelector('body');

// Insère le header en haut de la page
body.insertAdjacentHTML('afterbegin', Header());

// 
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
body.appendChild(mainContainer);

// Insère la barre latérale à gauche de la page
mainContainer.insertAdjacentHTML('beforeend', SideBar(UserFilters()));

// Insère l'affichage des articles dans la section principale
const mainSection = document.createElement('main');
mainSection.classList.add('main-content');
mainContainer.appendChild(mainSection);

// Fonction pour afficher les articles avec les filtres appliqués
async function displayItems(type, genre) {
    mainSection.innerHTML = await ItemsDisplay(type, genre);
    mainSection.insertAdjacentHTML('afterbegin', `<div class="items-header"><h2>Type: ${type ? type : 'All'}</h2><span>Genre: ${genre ? genre : 'All'}</span></h2></div>`);
}

// Affichage initial
displayItems(null, null);

const filters = {
    type: null,
    genre: null
}

// Utiliser les types pour afficher les articles
const typeElements = document.querySelectorAll('.types');

typeElements.forEach(element => {
    
    element.addEventListener('click', () => {
        filters.type = element.dataset.type;
        displayItems(filters.type, filters.genre);
    });
});


// Utiliser les filtres pour afficher les articles
const genreInputs = document.getElementsByName('genre');
genreInputs.forEach(input => {
    input.addEventListener('change', () => {
        const selectedGenre = document.querySelector('input[name="genre"]:checked').value;
        const genre = selectedGenre === 'all' ? null : selectedGenre;
        filters.genre = genre;
        displayItems(filters.type, filters.genre);
    });
});

// Réinitialiser les filtres
const resetButton = document.querySelector('.reset-filters');
resetButton.addEventListener('click', () => {
    filters.type = null;
    filters.genre = null;

    // Réinitialiser les sélections dans l'interface utilisateur
    genreInputs.forEach(input => {
        input.checked = input.value === 'all';
    });
    displayItems(filters.type, filters.genre);
});





