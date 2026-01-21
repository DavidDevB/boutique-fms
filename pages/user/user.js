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
        button.addEventListener('click', async () => {
            const itemId = button.dataset.id;
            let cart = JSON.parse(cartStorage.getItem('cart')) || {};
            if (cart[itemId]) {
                cart[itemId] += 1;
            } else {
                cart[itemId] = 1;
            }
            cartStorage.setItem('cart', JSON.stringify(cart));

            // ✅ Recharger la modale après l'ajout (si elle est fermée)
            const modalElement = document.getElementById('cartModal');
            const isModalOpen = modalElement.classList.contains('show');
            
            await reloadCartModal();
            
            alert('Item added to cart!');
        });
    });
}

// Fonction pour recharger la modale du panier
async function reloadCartModal() {
    const cart = JSON.parse(cartStorage.getItem('cart')) || {};
    console.log('🔄 Rechargement de la modale avec:', cart);
    
    // Importer la fonction CartModal
    const { default: CartModal } = await import('../../components/molecular/CartModal.js');
    
    // Générer le nouveau HTML
    const newModalHTML = await CartModal(cart);
    
    // Remplacer l'ancienne modale
    const oldModal = document.getElementById('cartModal');
    if (oldModal) {
        oldModal.remove();
    }
    
    // Insérer la nouvelle modale
    document.body.insertAdjacentHTML('beforeend', newModalHTML);
    
    console.log('✅ Modale rechargée');
}

// Fonction pour afficher un message lorsque le panier est vide
function showEmptyCartMessage() {
    console.log('Showing empty cart message');
    const modalBody = document.querySelector('#cartModal .modal-body');
    console.log('Modal body:', modalBody);  
    if (modalBody) {
        modalBody.innerHTML = '<p>Your cart is currently empty.</p>';
    }
}

// Délégation d'événements pour les boutons de quantité (GLOBAL)
document.addEventListener('click', (e) => {
    const button = e.target.closest('.quantity-button');
    
    if (button) {
        const action = button.dataset.action;
        const cartItem = button.closest('.cart-item');
        const itemId = cartItem.dataset.id;
        const input = cartItem.querySelector('.quantity-input');
        const priceElement = cartItem.querySelector('p[data-price]');
        const unitPrice = parseFloat(priceElement.dataset.price);
        
        let cart = JSON.parse(cartStorage.getItem('cart')) || {};
        let currentValue = parseInt(cart[itemId]) || 0;
        
        if (action === 'add') {
            currentValue += 1;
            cart[itemId] = currentValue;
            input.value = currentValue; 
            priceElement.textContent = `$${(unitPrice * currentValue).toFixed(2)}`;
        } else if (action === 'subtract' && currentValue > 1) {
            currentValue -= 1;
            cart[itemId] = currentValue;
            input.value = currentValue; 
            priceElement.textContent = `$${(unitPrice * currentValue).toFixed(2)}`;
        } else if (action === 'subtract' && currentValue === 1) {
            console.log('Removing item from cart');
            delete cart[itemId];
            cartItem.remove();
            
            // Si le panier est vide, afficher un message
            if (Object.keys(cart).length === 0) {
                console.log('Cart is now empty');
                showEmptyCartMessage()
            }
            
        }
        cartStorage.setItem('cart', JSON.stringify(cart));
    }
});

// Supprimer élement du panier à partir de la croix
document.addEventListener('click', (e) => {
    if (e.target.id === 'cross-button') {
        const cartItem = e.target.closest('.cart-item');
        const itemId = cartItem.dataset.id;
        let cart = JSON.parse(cartStorage.getItem('cart')) || {};
        delete cart[itemId];
        cartStorage.setItem('cart', JSON.stringify(cart));
        cartItem.remove();

        // Si le panier est vide, afficher un message
        if (Object.keys(cart).length === 0) {
            showEmptyCartMessage();
        }
    }
});

// Ouvrir modale du panier (sans recharger)
const cartIcon = document.getElementById('shopping-cart');
cartIcon.addEventListener('click', async () => {
    // Recharger uniquement si la modale n'est pas visible
    
    await reloadCartModal();

    const modalElement = document.getElementById('cartModal');
  
    const cartModal = new bootstrap.Modal(modalElement);
    cartModal.show();
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

// This duplicate cartIcon declaration has been removed as it's already declared above






