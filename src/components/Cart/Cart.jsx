import React from 'react';
import './Cart.css'

const Cart = ({selectedProduct}) => {
    console.log(selectedProduct);
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for(const item of selectedProduct){
        quantity = quantity + item.quantity;
        total = total + item.price * item.quantity;
        shipping = shipping + item.shipping;
    }

    let tax = total * 0.1;
    let grandTotal = total + shipping + tax;

    return (
        <div className='leading-loose sticky top-0'>
            <h3 className='p-4 text-center font-semibold'>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping : $ {shipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <p>Grand Total: $ {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;