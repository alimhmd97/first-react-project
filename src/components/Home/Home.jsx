import React from "react";
import imgs from "../../imgs/1.png"
const Home = () => {

    return (
        <>
            <div className="fs-1 fw-bold pt-5">I'm Front-End Developer</div>
            <figure className="w-25 m-auto"><img src={imgs} alt="" /></figure>
        </>
    );
};
export default Home;
