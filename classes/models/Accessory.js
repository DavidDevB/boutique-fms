
class Accessory extends Item {

    constructor(size, category) {
        super(id, title, type, genre, price, stock, imageUrl);
        this.size = size;
        this.category = category;
    }

    toHTML() {
        return `
            <div class="items-card accessory-card" data-id="${this.id}" data-type="${this.type}">
                <img src="../../assets/${this.imageUrl}" alt="${this.title}" />
                <h3>${this.title}</h3>
                <p class="category">${this.category}</p>
                <p class="price">${this.price}€</p>
                ${this.renderAddToCart()}
            </div>
        `;
    }
}

export default Accessory;