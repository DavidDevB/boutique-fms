import Order from '/classes/models/Order.js';

class OrderFactory {

    static createOrder(orderData) {
        return new Order(
            orderData.id,
            orderData.date,
            orderData.items,
            orderData.total
        );
    }
}


export default OrderFactory;