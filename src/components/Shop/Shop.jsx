import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    const fetchProducts = async () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    };

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
