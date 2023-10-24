import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);
  return (
    <nav
      style={{ zIndex: "1" }}
      className="navbar navbar-expand-lg navbar-light bg-primary position-fixed w-100 top-0"
    >
      <div className="container px-4 px-lg-5 ">
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "white" }}
          className="navbar-brand text-light fw-bolder"
        >
          <i class="fa-solid fa-store fa-2x me-2"></i>E-CART
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4"></ul>
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <Link
                to={"/wishlist"}
                className="btn btn-outline-light text-danger  me-2"
                type="submit"
              >
                <i className="bi-cart-fill me-1 text-white"></i>
                Wishlist
                <span className="badge bg-light text-dark ms-1 rounded-pill">
                  {wishlist.length}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/cart"}
                className="btn btn-outline-light text-danger"
                type="submit"
              >
                <i className="bi-cart-fill me-1 text-white"></i>
                Cart
                <span className="badge bg-light text-dark ms-1 rounded-pill">
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
