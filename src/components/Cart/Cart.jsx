import React from 'react';
import './Cart.css'

const Cart = ({selectedProduct}) => {
    console.log(selectedProduct);
    let quantity = 0;
    for(const item of selectedProduct){
        quantity = quantity + item.quantity;
    }

    return (
        <div className='leading-loose sticky top-0'>
            <h3 className='p-4 text-center font-semibold'>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <p>Grand Total: $1559</p>
        </div>
    );
};

export default Cart;