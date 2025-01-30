import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const availableItems = [
        { id: 1, name: 'Laptop', price: 100000 },
        { id: 2, name: 'Mobile Phone', price: 50000 },
        { id: 3, name: 'TV', price: 85000 },
    ];
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };
    return (
        <div style={{ padding: '20px' }}>
            <h1>Shopping Cart</h1>
            <h2>Items in Cart:</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.name} - Rs {item.price}</li>
                    ))}
                </ul>
            ) : (
                <p>No items in the cart.</p>
            )}

            <h2>Available Items:</h2>
            <div>
                {availableItems.map((item) => (
                    <div key={item.id} style={{ marginBottom: '10px' }}>
                        <span>{item.name} - Rs {item.price}</span>
                        <button 
                            style={{ marginLeft: '10px' }} 
                            onClick={() => addToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Cart;
