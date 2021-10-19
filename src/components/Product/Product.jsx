import React from "react";
import { useState, useEffect } from "react";

import "./Product.css";
const Product = ({ match }) => {
    const [product, setproduct] = useState(null);
    useEffect(() => {
        getProduct();
        // eslint-disable-next-line
    }, []);

    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then((res) => res.json())
            .then((json) => {
                setproduct(json);
            });
    };

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
