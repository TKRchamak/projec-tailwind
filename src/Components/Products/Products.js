import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    // .then(res=> res.json())
    // .then(data=> setProducts(data))
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch("https://fakestoreapi.com/products")
        // fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[ ])

    return (
        <div className="grid grid-cols-4">
            {
                products.map((p)=> <Product key={p.id} p={p}></Product>)
            }
        </div>
    );
};

export default Products;