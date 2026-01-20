import Item from './Item.js';

class Clothing extends Item {

    constructor(id, title, type, genre, price, stock, image, size, material) {
        super(id, title, type, genre, price, stock, image);
        this.size = size;
        this.material = material;
    }

    toHTML() {
        return `
            <div class="items-card clothing-card" data-id="${this.id}" data-type="${this.type}">
                <img src="../../assets/${this.image}" alt="${this.title}" />
                <h3>${this.title}</h3>
                <p class="size">Taille: ${this.size}</p>
                <p class="material">${this.material}</p>
                <p class="price">${this.price}€</p>
                ${this.renderAddToCart()}
            </div>
        `;
    }
}

export default Clothing;