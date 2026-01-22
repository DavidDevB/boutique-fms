import OrderFactory from '/classes/factories/OrderFactory.js'; 

const OrdersDisplay = async (orders) => {

const style = `
    <style>

        .orders-display {
            font-family: 'Kosugi', sans-serif;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 16px;
            padding: 20px;
            margin-top: 20px;
        }
        .order {
            border: 1px solid #ccc;
            padding: 16px;
            margin-bottom: 16px;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
    </style>
`;

    const ordersHTML = orders.map(order => {
        let items = [];
        if (Array.isArray(order.items)) {
            items = order.items;
        } else if (order.items && typeof order.items === 'object') {
            items = Object.values(order.items);
        } else {
            console.error('Invalid items structure for order:', order);
            items = [];
        }
        const orderInstance = OrderFactory.createOrder({
            id: order.id,
            date: order.date,
            items,
            total: order.total
        });
        return orderInstance.toHTML();
    }).join('');

    return style + `
        <section class="orders-display">
            ${ordersHTML}
        </section>
    `;
}

export default OrdersDisplay;