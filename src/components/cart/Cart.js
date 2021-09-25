import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className="cart">
                <h2>Order summary</h2>
                <p>Items Ordered:</p>
                <small>Items:</small>
                <br></br>
                <small>Shipping & Handling:</small>
                <br></br>
                <small>Total before tax:</small>
                <br></br>
                <small>Estimated tax:</small>
                <br></br>
                <h3>Order Total:</h3>
            </div>
        </div>
    );
};

export default Cart;