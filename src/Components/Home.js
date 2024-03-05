import React from "react";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/asset/img2.jpg"
          className="card-img"
          alt="Background"
          height={"550px"}
        />
        <div className="container">
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h5
              style={{ color: "" }}
              className="card-title display-3 fw-bolder mb-0"
            >
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS </p>
          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
