import OrderFactory from '/classes/factories/OrderFactory.js'; 

const OrdersDisplay = async (orders) => {

const style = `
    <style>
        .orders-display {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .orders-display h2 {
            margin-bottom: 15px;
            font-size: 24px;
            color: #333;
        }
        .order-item {
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
        }
        .order-item h3 {
            margin: 0 0 5px 0;
            font-size: 20px;
            color: #555;
        }
        .order-item p {
            margin: 0 0 10px 0;
            color: #777;
        }
        .order-item ul {
            list-style-type: disc;
            padding-left: 20px;
        }
        .order-item ul li {
            margin-bottom: 5px; 
            color: #555;
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