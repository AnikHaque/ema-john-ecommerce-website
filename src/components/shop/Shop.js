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
            <h1>
Products:{products.length}
            </h1>
            {
            products.map(product => <Product product = {product}
            key={product.key}
            ></Product>)
}
            </div>
            
            
            <div>
                <h1>Order summary</h1>
            </div>
        </div>
    );
};

export default Shop;