import Header from '../../components/molecular/Header.js';
import SideBar from '../../components/molecular/SideBar.js';
import AdminFilters from '../../components/atomic/AdminFilters.js';
import OrdersDisplay from '../../components/molecular/OrdersDisplay.js';
import EditJsonModal from '../../components/molecular/EditJsonModal.js';

const cartStorage = localStorage;

const body = document.querySelector('body');

// Insère le header en haut de la page
body.insertAdjacentHTML('afterbegin', Header("admin"));

// Insère le modal d'édition JSON
body.insertAdjacentHTML('beforeend', await EditJsonModal());

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

// Afficher la modale d'édition JSON
document.addEventListener('click', (event) => {
    if (event.target.matches('.add-item-button')) {
        const editJsonModal = new bootstrap.Modal(document.getElementById('editJsonModal'));
        editJsonModal.show();
    }
});

// Ecouter les changements dans la modale d'édition JSON
document.getElementById('save-item-json-button').addEventListener('click', async () => {
    // Récupérer les valeurs des champs d'entrée
    const response = await fetch('../../data/items.json')
    const data = await response.json();

    
    // Générer un nouvel ID basé sur les IDs existants
    const existingIds = data.items.map(item => item.id);
    let itemId = 1;
    while (existingIds.includes(itemId)) {
        itemId++;
    }

    const newItem = {   
        id: itemId,
        name: document.getElementById('item-id-input').value,
        type: document.getElementById('item-type-input').value,
        genre: document.getElementById('item-genre-input').value,
        color: document.getElementById('item-color-input').value,
        size: document.getElementById('item-size-input').value,
        price: parseFloat(document.getElementById('item-price-input').value),
        stock: parseInt(document.getElementById('item-stock-input').value),
        material: document.getElementById('item-material-input').value,
        image: "default.png"
    }

    // Ajouter le nouvel article aux articles existants
    data.items.push(newItem);
    console.log("New Item JSON:", JSON.stringify(newItem, null, 2));

    // Fermer la modale
    const editJsonModal = bootstrap.Modal.getInstance(document.getElementById('editJsonModal'));
    editJsonModal.hide();
});
