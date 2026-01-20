

class Shoe extends Item {

    constructor(size) {
        super(id, title, type, genre, price, stock, imageUrl);
        this.size = size;
        this.brand = brand;
    }

    toHTML() {
        return `
            <div class="items-card shoe-card" data-id="${this.id}" data-type="${this.type}">
                <img src="../../assets/${this.imageUrl}" alt="${this.title}" />
                <h3>${this.title}</h3>
                <p class="size">Pointure: ${this.size}</p>
                <p class="brand">${this.brand}</p>
                <p class="price">${this.price}€</p>
                ${this.renderAddToCart()}
            </div>
        `;
    }
}

export default Shoe;