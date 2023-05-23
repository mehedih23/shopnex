import React from 'react';
import './Product.css'

const Product = ({ product ,handleAddToCart }) => {
    const {img, name, price, seller,ratings} = product;
    return (
        <div className=''>
            <div className='card h-96 bg-base-100 shadow-xl relative border border-emerald-200'>
                <figure className="px-2 pt-2">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body p-2">
                    <h2 title={name} className="card-title">{name.slice(0,20)}</h2>
                    <p>Price : ${price}</p>
                    <p>Manufacturer : {seller}</p>
                    <p>Ratings : {ratings}star</p>
                    <div className="card-actions">
                        <button className="buy-btn btn btn-ghost w-full" onClick={()=>handleAddToCart(product)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;