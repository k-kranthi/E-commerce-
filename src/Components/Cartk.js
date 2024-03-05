import React from "react";
import { useSelector } from "react-redux";

const Cartk = () => {
  const product = useSelector((state) => state.handleCart);
  return (
    <div>
      <ul>
        {product.map((product) => (
          <div>
            <div className="container mb-5">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    height={"200px"}
                    width={"180px"}
                  />
                </div>
                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                    {product.qty} X ${product.price}=$
                    {product.qty * product.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cartk;
