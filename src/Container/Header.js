import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ count }) => {
  console.log(count);
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a href="/" className="navbar-brand">Restuarant</a>
        <div className="text-center">
          <p style={{ color: "red" }}>TASTY FOOD... AT Your Finger Tips </p>
        </div>

        <button className="btn btn-primary">
          <Link to="/order" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            Orders <span className="badge bg-secondary">{count}</span>
          </Link>
          
        </button>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state.orderreducer.length
});

export default connect(mapStateToProps)(Header);
