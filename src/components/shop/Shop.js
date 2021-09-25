import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [count,setCount] = useState([])
    const [products, setProducts] = useState([])
     useEffect(()=>{
fetch('./products.JSON')
.then(res=>res.json())
.then(data=>setProducts(data))

    },[])

const handleClick = (product) => {
    const newCart = [...count,product]
    setCount(newCart)
}

    return (
        <div className="shop-container">
            <div>
            {
            products.map(product => <Product product = {product}
            key={product.key}
            handleClick={handleClick}
            ></Product>)
}
            </div>
            <div>
                <Cart cart={count}></Cart>
            </div>
            </div>
            
            

            
        
    );
};

export default Shop;