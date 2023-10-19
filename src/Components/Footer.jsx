import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-primary">
        <hr />
        <div className="d-flex w-100 flex-column">
          <div className="d-flex justify-content-center align-items-center mt-2">
            <h5 className="text-white">You can find us at </h5>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link
              to={"https://www.facebook.com"}
              className="me-2"
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link
              to={"https://twitter.com/i/flow/login"}
              className="me-2"
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              to={"https://www.instagram.com"}
              className="me-2"
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to={"https://www.youtube.com"}
              className="me-2"
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link
              to={"https://www.google.com/intl/en_in/gmail/about/"}
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
        <Row
          className="container-fluid justify-content-center w-100 mt-4"
          style={{ height: "68vh" }}
        >
          <Col className="text-center">
            <h4 className="fw-bold text-white">Get to Know Us</h4>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>About Us</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Careers</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Press Releases</h5>
            </Link>
          </Col>
          <Col className="text-center">
            <h4 className="fw-bold text-white">Connect with Us</h4>
            <Link
              to={"https://www.google.com/intl/en_in/gmail/about/"}
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <h5>GMAIL</h5>
            </Link>
            <Link
              to={"https://twitter.com/i/flow/login"}
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <h5>Twitter</h5>
            </Link>
            <Link
              to={"https://www.google.com/intl/en_in/gmail/about/"}
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <h5>Facebook</h5>
            </Link>
            <Link
              to={"https://www.instagram.com"}
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <h5>Instagram</h5>
            </Link>
            <Link
              to={"https://www.youtube.com"}
              style={{ textDecoration: "none", color: "#00265c" }}
            >
              <h5>Youtube</h5>
            </Link>
          </Col>
          <Col className="text-center">
            <h4 className="fw-bold text-white">Make Money with Us</h4>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Sell with Us</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Advertise Your Products</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Protect and Build Your Brand</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Become an Affiliate</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Global Selling</h5>
            </Link>
          </Col>
          <Col className="text-center">
            <h4 className="fw-bold text-white">Let Us Help You</h4>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Your Account</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Wishlist</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Cart</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Purchase Protection</h5>
            </Link>
            <Link style={{ textDecoration: "none", color: "#00265c" }}>
              <h5>Return centre</h5>
            </Link>
          </Col>
          <hr />
          <div>
            <p className="text-center text-white mb-2">
              All Copyrights &copy; reserved to E-commerce
            </p>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Footer;
