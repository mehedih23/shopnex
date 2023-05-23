import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    useEffect(()=>{
        const storedProduct = getStoredCart();
        const savedProduct = [];
        for(const id in storedProduct){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedProduct[id];
                addedProduct.quantity = quantity;
                savedProduct.push(addedProduct)
            }
        }
        setSelectedProduct(savedProduct)
    },[products])

    const handleAddToCart = (product) =>{
        let newSelectedProduct = [];
        const exists = selectedProduct.find(item => item.id === product.id);
        if(!exists){
            product.quantity = 1;
            newSelectedProduct  = [...selectedProduct, product ]
        }else{
            const rest = selectedProduct.filter(item => item.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newSelectedProduct = [...rest, exists]
        }
        setSelectedProduct(newSelectedProduct);
        addToDb(product.id);
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