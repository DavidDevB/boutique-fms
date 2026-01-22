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

// Filtrer par date
document.addEventListener('change', async (event) => {
    if (event.target.matches('input[name="date"]')) {
        const selectedDate = event.target.value;
        let orders = JSON.parse(cartStorage.getItem('orders') || '[]');

        if (selectedDate) {
            const filterDate = new Date(selectedDate);
            orders = orders.filter(order => {
                const orderDate = new Date(order.date);
                // Comparer uniquement les dates (sans l'heure)
                return orderDate.toDateString() === filterDate.toDateString();
            });
        }
        mainSection.innerHTML = await OrdersDisplay(orders);
    }
});

