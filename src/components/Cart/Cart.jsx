import React from 'react';
import './Cart.css'

const Cart = ({selectedProduct}) => {

    return (
        <div className='leading-loose'>
            <h3 className='p-4 text-center font-semibold'>Order Summary</h3>
            <p>Selected Items: {selectedProduct.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <p>Grand Total: $1559</p>
        </div>
    );
};

export default Cart;