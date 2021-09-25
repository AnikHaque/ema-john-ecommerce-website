import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
            <div>
                <Cart></Cart>
            </div>
            </div>
            
            

            
        
    );
};

export default Shop;