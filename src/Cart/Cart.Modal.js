import './CartModal.css';

const CartModal = () => {
    return (
        <div className="cart-modal">

            <label htmlFor='medicineName'>MedicineName
                <input type='text' id="medicineName" />
            </label>
            <label htmlFor='description'>Description
                <input type="text" />
            </label>
            <label htmlFor='description'>Price
                <input type="text" />
            </label>
            <label htmlFor='description'>Quantity Available
                <input type="text" />
            </label>


            <button className="cart-button">Add product</button>
        </div>
    )
}

export default CartModal;