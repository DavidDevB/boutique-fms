import Header from '../../components/molecular/Header.js';
import SideBar from '../../components/molecular/SideBar.js';
import UserFilters from '../../components/atomic/UserFilters.js';
import ItemsDisplay from '../../components/molecular/ItemsDisplay.js';
import CartModal from '../../components/molecular/CartModal.js';

const cartStorage = localStorage;

const body = document.querySelector('body');

// Insère le header en haut de la page
body.insertAdjacentHTML('afterbegin', Header());

// Insère la modale du panier
body.insertAdjacentHTML('beforeend', await CartModal(cartStorage.getItem('cart') ? JSON.parse(cartStorage.getItem('cart')) : undefined));

// Crée le conteneur principal pour la barre latérale et le contenu principal
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
    attachCartListeners();
}

// Gestion ajout au panier
const attachCartListeners = () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemId = button.dataset.id;
            let cart = JSON.parse(cartStorage.getItem('cart')) || {};
            if (cart[itemId]) {
                cart[itemId] += 1;
            } else {
                cart[itemId] = 1;
            }
            cartStorage.setItem('cart', JSON.stringify(cart));
            alert('Item added to cart!');
        });
    });
}

document.querySelectorAll('.cart-item button').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            const input = button.parentElement.querySelector('.quantity-input');
            const itemId = button.parentElement.parentElement.querySelector('li').textContent;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            let currentValue = cart[itemId] || 0;

            if (action === 'add') {
                currentValue += 1;
            } else if (action === 'subtract' && currentValue > 1) {
                currentValue -= 1;
            } else if (action === 'subtract' && currentValue === 1) {
                delete cart[itemId];
                localStorage.setItem('cart', JSON.stringify(cart));
                button.parentElement.parentElement.remove();
                return;
            }
            cart[itemId] = currentValue;
            localStorage.setItem('cart', JSON.stringify(cart));
            input.value = currentValue;
        });
    });

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

// Ouvir modale du panier
const cartIcon = document.getElementById('shopping-cart');
cartIcon.addEventListener('click', () => {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
});






