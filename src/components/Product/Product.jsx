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

    return (
        <div>
            {!product ? (
                <>
                    {" "}
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </>
            ) : (
                <div>
                    <div className="product">
                        <figure className="m-2 product__img">
                            <img src={product.image} alt="" />
                            <p className="m-2">title : {product.title}</p>
                            <p className="m-2 fw-bold ">
                                price: {product.price}
                            </p>
                            <p className="m-2">rete :{product.rating.rate}</p>
                        </figure>
                        <div className="product__wrapper">
                            <p className="m-2">{product.description}</p>

                            <h4 className="m-2">
                                category :{product.category}
                            </h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Product;
