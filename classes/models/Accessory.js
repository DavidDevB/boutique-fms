
import Item from './Item.js';

class Accessory extends Item {

    constructor(id, title, type, genre, price, stock, image, size, category) {
        super(id, title, type, genre, price, stock, image);
        this.size = size;
        this.category = category;
    }

    toHTML() {
        return `
            <div class="items-card accessory-card" data-id="${this.id}" data-type="${this.type}">
                <img src="../../assets/${this.image}" alt="${this.title}" />
                <h3>${this.title}</h3>
                <p class="category">${this.category}</p>
                <p class="price">${this.price}€</p>
                ${this.renderAddToCart()}
            </div>
        `;
    }
}

export default Accessory;