import Header from '../../components/molecular/Header.js';
import SideBar from '../../components/molecular/SideBar.js';
import AdminFilters from '../../components/atomic/AdminFilters.js';
import OrdersDisplay from '../../components/molecular/OrdersDisplay.js';

const cartStorage = localStorage;

const body = document.querySelector('body');

// Insère le header en haut de la page
body.insertAdjacentHTML('afterbegin', Header("admin"));


// Crée le conteneur principal pour la barre latérale et le contenu principal
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
body.appendChild(mainContainer);


// Insère la barre latérale à gauche de la page
mainContainer.insertAdjacentHTML('beforeend', SideBar(AdminFilters()));

// Insère l'affichage des articles dans la section principale
const mainSection = document.createElement('main');
mainSection.classList.add('main-content');
mainContainer.appendChild(mainSection);

async function displayOrders() {
    mainSection.innerHTML = await OrdersDisplay(JSON.parse(cartStorage.getItem('orders') || '[]'));
}

displayOrders();