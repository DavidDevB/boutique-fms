

class Order {
    constructor(id, date, items, total) {
        this.id = id;
        this.date = date;
        this.items = items;
        this.total = total;
    }

    toHTML() {
        return `
            <div class="order" data-id="${this.id}">
                <h3>Order #${this.id}</h3>
                <p>Date: ${new Date(this.date).toLocaleDateString()}</p>
                <p>Total: ${this.total}€</p>
                <ul>
                    ${this.items.map(item => `<li>${item.title} - ${item.price}€</li>`).join('')}
                </ul>
            </div>
        `;
    }

}

export default Order;