

class Item {
    constructor(id, title, type, genre, price, stock, image) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.genre = genre;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }

    toHTML() {
        return `
            <div class="items-card" data-id="${this.id}" data-type="${this.type}">
                <img src="../../assets/${this.image}" alt="${this.title}" />
                <h3>${this.title}</h3>
                <p>${this.price}€</p>
                ${this.renderAddToCart()}
            </div>
        `;
    }

    renderAddToCart() {
        return `
            <button class="add-to-cart" data-id="${this.id}">
                <img src="../../assets/icon-shopping-cart.png" alt="Add to cart" style="width:20px;" />
            </button>
        `;
    }

}

export default Item;