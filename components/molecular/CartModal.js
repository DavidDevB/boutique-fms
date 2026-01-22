

const CartModal = async (storage, checkout) => {

    const response = await fetch('../../data/items.json');
    const data = await response.json();

    if (checkout) {
        return `
        <!-- Modal -->
        <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" >
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cartModalLabel">Checkout</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Order registered successfully!</p>
                    </div>
                    <div class="modal-footer">
                        <button id="close-checkout-button" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    if (storage === undefined || Object.keys(storage).length === 0) {
    return `
    <!-- Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" >
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="cartModalLabel">Your Shopping Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Your cart is currently empty.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }  
    
    return `
    <!-- Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" >
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="cartModalLabel">Your Shopping Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        ${Object.entries(storage).map(([itemId, quantity]) => {
                            const item = data.items.find(i => i.id === parseInt(itemId));
                        return `<div class="cart-item" data-price=${item.price} data-id="${itemId}">
                                    <li>${item ? item.title : 'Unknown Item'}</li>
                                    <p data-price=${item.price * quantity}>${item ? (item.price * quantity).toFixed(2) : '0.00'}€</p>
                                    <div>
                                        <button class="quantity-button" id="subtract" data-action="subtract"><img src="/assets/subtraction.png"/></button>
                                        <input class="quantity-input" type="number" value="${quantity}"/>
                                        <button class="quantity-button" id="add" data-action="add"><img src="/assets/addition.png"/></button>
                                        <button><img src="/assets/cross.png" id="cross-button"/></button>
                                    </div>
                                </div>`;
                        }).join('')}
                    </ul>
                </div>
                <div class="modal-total">
                    <span data-total=${Object.entries(storage).reduce((total, [itemId, quantity]) => {
                        const item = data.items.find(i => i.id === parseInt(itemId));
                        return total + (item ? item.price * quantity : 0);
                    }, 0).toFixed(2)}>Total: ${Object.entries(storage).reduce((total, [itemId, quantity]) => {
                        const item = data.items.find(i => i.id === parseInt(itemId));
                        return total + (item ? item.price * quantity : 0);
                    }, 0).toFixed(2)}€</span>
                </div>
                <div class="modal-footer">
                    <button id="close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="checkout" type="button" class="btn btn-primary">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
    `;
    } 

export default CartModal;