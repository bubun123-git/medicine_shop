import React, { useState } from 'react';

const CartModal = () => {
    const [medicineName, setMedicineName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddProduct = (event) => {
        event.preventDefault()


        // Clear the input fields after adding the product
        setMedicineName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    };

    return (
        <div className="cart-modal">
            <label htmlFor="medicineName">
                Medicine Name
                <input
                    type="text"
                    id="medicineName"
                    value={medicineName}
                    onChange={(e) => setMedicineName(e.target.value)}
                />
            </label>
            <label htmlFor="description">
                Description
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label htmlFor="price">
                Price
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </label>
            <label htmlFor="quantity">
                Quantity Available
                <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </label>

            <button className="cart-button" onClick={handleAddProduct}>
                Add product
            </button>
        </div>
    );
};

export default CartModal;
