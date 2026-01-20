import Header from '../../components/molecular/Header.js';
import SideBar from '../../components/molecular/SideBar.js';
import UserFilters from '../../components/atomic/UserFilters.js';
import ItemsDisplay from '../../components/molecular/ItemsDisplay.js';

const body = document.querySelector('body');

// Insère le header en haut de la page
body.insertAdjacentHTML('afterbegin', Header());

// Insère la barre latérale à gauche de la page
body.insertAdjacentHTML('beforeend', SideBar(UserFilters()));

// Insère l'affichage des articles dans la section principale
const mainSection = document.createElement('main');
mainSection.classList.add('main-content');
body.appendChild(mainSection);

async function displayItems(type, genre) {
    mainSection.innerHTML = await ItemsDisplay(type, genre);
}

// Affichage initial
displayItems(null, null);

// Utiliser les filtres pour afficher les articles
const genreInputs = document.getElementsByName('genre');
genreInputs.forEach(input => {
    input.addEventListener('change', () => {
        const selectedGenre = document.querySelector('input[name="genre"]:checked').value;
        const genre = selectedGenre === 'all' ? null : selectedGenre;
        
        displayItems(null, genre);
    });
});





