import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakeDb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleAddToCart = (product) =>{
        const newSelectedProduct = [...selectedProduct, product];
        setSelectedProduct(newSelectedProduct);

        addToDb(product.id)
    }

    return (
        // shop container
        <div className='grid grid-cols-5 gap-4 my-2'>

            {/* Product container */}
            <div className='col-span-4'>
               <div className='grid grid-cols-3 gap-4'>
               {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
               </div>
            </div>

            {/* cart container */}
            <div className='col-span-1 cart-summary rounded p-4'>
                <Cart selectedProduct={selectedProduct}></Cart>
            </div>
        </div>
    );
};

export default Shop;