// Au chargement de l'application
async function initProducts() {
    // Vérifier si les données existent déjà dans localStorage
    let products = localStorage.getItem('products');
    
    if (!products) {
        // Charger depuis le serveur la première fois
        const response = await fetch('./data/products.json');
        const data = await response.json();
        localStorage.setItem('products', JSON.stringify(data));
        return data.items;
    }
    
    return JSON.parse(products).items;
}

// Récupérer les produits
function getProducts() {
    const data = JSON.parse(localStorage.getItem('products'));
    return data.items;
}

// Ajouter un produit
function addProduct(product) {
    const data = JSON.parse(localStorage.getItem('products'));
    product.id = Math.max(...data.items.map(i => i.id)) + 1;
    data.items.push(product);
    localStorage.setItem('products', JSON.stringify(data));
    return product;
}

// Mettre à jour un produit
function updateProduct(id, updates) {
    const data = JSON.parse(localStorage.getItem('products'));
    const index = data.items.findIndex(item => item.id === id);
    
    if (index !== -1) {
        data.items[index] = { ...data.items[index], ...updates };
        localStorage.setItem('products', JSON.stringify(data));
        return data.items[index];
    }
    return null;
}

// Supprimer un produit
function deleteProduct(id) {
    const data = JSON.parse(localStorage.getItem('products'));
    data.items = data.items.filter(item => item.id !== id);
    localStorage.setItem('products', JSON.stringify(data));
    return true;
}

export { initProducts, getProducts, addProduct, updateProduct, deleteProduct };
