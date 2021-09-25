import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,key,category,seller,wholePrice,stock,img} = props.product
    return (
        <div className="product-container">
<div>
    <img src={img}></img>
</div>

            <div className="product-details">
<h4>{name}</h4>
<h5>Category: <small>{category}</small></h5>
<p>Seller: {seller} </p>
<h2>Price: {wholePrice}</h2>
<p>total {stock} are left in stock</p>
<button onClick={props.handleClick}>Add To Cart</button>

            </div>
            
        </div>
    );
};

export default Product;