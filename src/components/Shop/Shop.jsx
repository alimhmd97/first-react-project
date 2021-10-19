import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetchProducts();
    });

    const fetchProducts = async () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    };
    // index.js:1

    //    Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    // at Product (http://localhost:3000/static/js/main.chunk.js:905:3)
    // كنت بحاول اشوف حل للايرور دا
    // const getProducts = () => {
    //     let isMounted = true;
    //     fetch("https://fakestoreapi.com/products")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             if (isMounted) setProducts(json);
    //         });
    //     return () => {
    //         isMounted = false;
    //     };
    // };
    // useEffect(() => {
    //     getProducts();
    // }, []);

    return (
        <div>
            {products ? (
                <>
                    <h1 className=" text-light">Shop</h1>
                    <div className="d-flex flex-wrap container ">
                        {products.map((product) => {
                            return (
                                <Link
                                    to={`/Shop/${product.id}`}
                                    key={product.id}
                                    className="containeer text-decoration-none d-flex flex-wrap"
                                >
                                    <figure className="">
                                        <img
                                            className="w-25"
                                            src={product.image}
                                            alt=""
                                        />
                                    </figure>
                                    <h4>{product.title}</h4>{" "}
                                    <p>{product.description}</p>
                                    <p className=" mx-5">
                                        {product.rating.rates}
                                    </p>
                                    <p className="fs-2 fw-bold mx-5">
                                        price : {product.price}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </>
            ) : (
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
            )}
        </div>
    );
};
export default Shop;
