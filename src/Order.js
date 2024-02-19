import React from "react";
import { connect } from "react-redux";
import Header from "./Container/Header";
import Footer from "./Footer";

const Order = ({ list }) => {
  return (
    <div>
      <Header />

      <center>
        {list.length > 0 ? (
          <div className="container">
            <div className="row">
              {list.map((item) => (
                <div
                  className="col-md-4"
                  style={{ padding: "5px" }}
                  key={item.id}
                >
                  <div
                    className="card"
                    style={{ width: "18rem", padding: "3px" }}
                  >
                    <img src={item.url} className="card-img-top" />
                    <div className="card-body"></div>
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-text">
                      Billing Amount Rs.{item.prize}
                    </div>
                    <p>Table number:{item.table_number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="">no order place yet</div>
        )}
      </center>
    </div>
  );
};
<div>
  <Footer />
</div>;

const mapStateToProps = (state) => ({
  list: state.orderreducer,
});

export default connect(mapStateToProps)(Order);
