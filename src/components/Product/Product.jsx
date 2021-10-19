import React from "react";
import { useState, useEffect } from "react";

import "./Product.css";
const Product = ({ match }) => {
    const [product, setproduct] = useState(null);
    useEffect(() => {
        getProduct();
    });

    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then((res) => res.json())
            .then((json) => {
                setproduct(json);
            });
    };
    // const getProduct = () => {
    //     let isMounted = true;
    //     fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    //         .then((res) => res.json())
    //         .then((json) => {
    //             if (isMounted) setproduct(json);
    //         });
    //     return () => {
    //         isMounted = false;
    //     };
    // };
    // useEffect(() => {
    //     getProduct();
    // });
    // useEffect(() => {
    //   let isMounted = true;               // note mutable flag
    //   someAsyncOperation().then(data => {
    //     if (isMounted) setState(data);    // add conditional check
    //   })
    //   return () => { isMounted = false }; // cleanup toggles value, if unmounted
    // }, []);
    return (
        <div>
            {!product ? (
                <div className="spinner-grow text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div>
                    <div className="product">
                        <figure className="m-2 product__img">
                            <img src={product.image} alt="" />
                        </figure>
                        <div className="product__wrapper">
                            <h4 className="m-2">{product.category}</h4>
                            <p className="m-2">{product.title}</p>
                            <p className="m-2 fw-bold ">
                                price: {product.price}
                            </p>
                            <p className="m-2">rete :{product.rating.rate}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Product;
