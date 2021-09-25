import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
     useEffect(()=>{
fetch('./products.JSON')
.then(res=>res.json())
.then(data=>setProducts(data))

    },[])
    return (
        <div className="shop-container">
            <div>
            {
            products.map(product => <Product product = {product}
            key={product.key}
            ></Product>)
}
            </div>
            
            
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

export default Shop;