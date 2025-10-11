import React from "react";
import './style.css';
import { Link } from "react-router-dom";


// Import images
import d1 from './Images/d1.jpg';
import d2 from './Images/d2.jpg';
import d3 from './Images/d3.jpg';
import d4 from './Images/d4.jpg';
import d5 from './Images/d5.jpg';
import d6 from './Images/d6.jpg';

import shop1 from './Images/shop-1.jpg';
import shop2 from './Images/shop-2.jpg';
import shop3 from './Images/shop-3.jpg';
import shop4 from './Images/shop-4.jpg';

import cart1 from './Images/cart1.jpg';
import cart2 from './Images/cart2.jpg';
import cart3 from './Images/cart3.jpg';


function Productsingle() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ padding: "20px" }}
      >
        <div className="container">
          <a className="navbar-brand" style={{ paddingRight: "20px" }}>
            <h1>
              <span className="one" style={{ color: "red" }}>
                SHOPPY
              </span>
              KART
            </h1>
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-2 align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={'/'}
                  style={{
                    color: "rgb(235, 96, 96)",
                    fontWeight: 700,
                    fontSize: "17px",
                  }}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={'/about'}
                  style={{ fontWeight: 700, fontSize: "17px" }}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="./product.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: 700, fontSize: "17px" }}
                >
                  PRODUCTS
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={'/product'}
                      style={{ fontSize: "20px" }}
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={'/productsingle'}
                      style={{ fontSize: "20px" }}
                    >
                      Product single
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={'/cart'}
                      style={{ fontSize: "20px" }}
                    >
                      Cart Page
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                 to={'/contact'}
                  style={{ fontWeight: 700, fontSize: "17px" }}
                >
                  CONTACT
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ fontSize: "20px", color: "red" }}
              >
                <a className="nav-link" href="#">
                  <i className="las la-search"></i>
                </a>
              </li>
            </ul>
            <div
              className="maaz d-flex align-items-center gap-2"
              style={{ fontSize: "20px" }}
            >
              <button
                style={{ backgroundColor: "rgb(235, 96, 96)", color: "white" }}
              >
                {" "}
                <i className="las la-laugh"></i>
                Login
              </button>
              <button
                style={{ backgroundColor: "rgb(235, 96, 96)", color: "white" }}
              >
                {" "}
                <i className="las la-clipboard-list"></i>
                Cart
              </button>
              <i className="las la-moon" style={{ fontSize: "35px" }}></i>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <div className="head" style={{ backgroundColor: "black" }}>
        <h1 style={{ color: "white", padding: "6%" }}>Single</h1>
      </div>

      {/* <!-- Product Section --> */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={cart1}
                    className="d-block w-100"
                    alt="Product Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={cart2}
                    className="d-block w-100"
                    alt="Product Image 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={cart3}
                    className="d-block w-100"
                    alt="Product Image 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <br />
            <br />
            <div className="gh d-flex gap-2 flex-wrap">
              <button className="btn btn-dark text-white flex-grow-1">
                Add To Cart
              </button>
              <button className="btn btn-danger flex-grow-1">Buy Now</button>
            </div>
          </div>

          <div className="col-lg-8 col-md-6 col-sm-12">
            <h1 className="fw-bold">Men Slim Fit Checkered Casual Shirt</h1>
            <br />
            <div
              className="d-flex align-items-center flex-wrap"
              style={{ fontSize: "20px", color: "red" }}
            >
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <h3 className="ms-3">$575</h3>
              <div className="ms-3" style={{ color: "grey" }}>
                <h3>$1,199 Free Delivery</h3>
              </div>
            </div>

            <div className="d-flex gap-2 mt-3 flex-wrap">
              <p className="fw-bold" style={{ fontSize: "20px" }}>
                Special Price
              </p>
              <p style={{ fontSize: "20px" }}>
                Get extra 5% off (price inclusive of discount)
              </p>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <p className="fw-bold" style={{ fontSize: "20px" }}>
                Bank Offer
              </p>
              <p style={{ fontSize: "20px" }}>
                5% Unlimited Cashback on Flipkart Axis Bank Credit Card
              </p>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <p className="fw-bold" style={{ fontSize: "20px" }}>
                Bank Offer
              </p>
              <p style={{ fontSize: "20px" }}>
                5% Cashback* on HDFC Bank Debit Cards
              </p>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <p className="fw-bold" style={{ fontSize: "20px" }}>
                Bank Offer
              </p>
              <p style={{ fontSize: "20px" }}>
                Extra 5% off* with Axis Bank Buzz Credit Card
              </p>
            </div>

            <h2 className="mt-5">
              <strong>Description</strong>
            </h2>
            <p style={{ color: "grey", fontSize: "23px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              ratione et ipsam velit explicabo deleniti obcaecati a, numquam,
              unde quisquam quas quae accusamus eveniet magni. Nobis iure et
              porro aut.
            </p>

            <div className="row">
              {/* <!-- Highlights Column --> */}
              <div className="col-lg-6 col-12 mb-4">
                <h2 className="fw-bold">Highlights</h2>
                <div style={{ fontSize: "20px", color: "grey" }}>
                  <p>Neck: Collar Neck</p>
                  <p>Fit: Slim</p>
                  <p>Sleeve: Full Sleeve</p>
                  <p>Material: Pure Cotton</p>
                </div>
              </div>

              {/* <!-- Service Column --> */}
              <div className="col-lg-6 col-12 mb-4">
                <h2 className="fw-bold">Service</h2>
                <div style={{ fontSize: "20px", color: "grey" }}>
                  <p>30 Day Return Policy</p>
                  <p>Cash on Delivery available</p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mt-4">
                Check delivery, payment options and charges at your location
              </h5>
              <br />
              <form className="d-flex gap-2 flex-wrap">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  className="form-control"
                  style={{ fontSize: "25px", minWidth: "150px" }}
                />
                <button className="btn btn-danger" style={{ fontSize: "25px" }}>
                  Check
                </button>
              </form>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(222, 219, 219)" }}>
        <div className="container">
          <div className="row flex-wrap">
            <h1 className="fw-bold my-5">New Collections</h1>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <div className="card custom-card h-100">
                <img
                  src={d1}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "rgb(212, 209, 209)" }}
                >
                  <p className="card-text fw-bold fs-5">
                    Min. 40% off on Formal Wear
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <div className="card h-100">
                <img
                  src={d2}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "rgb(212, 209, 209)" }}
                >
                  <p className="card-text fw-bold fs-5">
                    Min. 60% off on Active Wear{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <div className="card h-100">
                <img
                  src={d3}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "rgb(212, 209, 209)" }}
                >
                  <p className="card-text fw-bold fs-5">
                    Min. 40% off on shoes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <div className="card h-100">
                <img
                  src={d4}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "rgb(212, 209, 209)" }}
                >
                  <p className="card-text fw-bold fs-5">
                    Min. 50% off on Shirt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <div className="card h-100">
                <img
                  src={d5}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "rgb(212, 209, 209)" }}
                >
                  <p className="card-text fw-bold fs-5">
                    Min. 50% off on Clothing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <div className="card h-100">
                <img
                  src={d6}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "rgb(212, 209, 209)" }}
                >
                  <p className="card-text fw-bold fs-5">
                    Min. 60% off on Sandals
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Featured Products Section --> */}
          <div className="container py-5">
            <div className=" mb-4">
              <h2 className="fw-bold" style={{ fontSize: "50px" }}>
                Featured Products
              </h2>
              <p className="text-secondary" style={{ fontSize: "22px" }}>
                Handpicked Favourites just for you
              </p>
            </div>

            <div className="row g-4">
              {/* <!-- Card 1 --> */}
              <div className="col-lg-3 col-md-6">
                <div className="card h-100">
                  <img
                    src={shop1}
                    className="card-img-top"
                    alt="Formal Wear Discount"
                  />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">
                      Checkerd Casual Shirt
                    </h4>
                    <p className="text-muted" style={{ fontSize: "22px" }}>
                      <del>$975.00</del>{" "}
                      <span className="text-danger fw-bold">$899.9</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="col-lg-3 col-md-6">
                <div className="card h-100">
                  <img
                    src={shop2}
                    className="card-img-top"
                    alt="Formal Wear Discount"
                  />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">Cotton Flared Kurta</h4>
                    <p className="text-muted" style={{ fontSize: "22px" }}>
                      <del>$775.00</del>{" "}
                      <span className="text-danger fw-bold">$599.9</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="col-lg-3 col-md-6">
                <div className="card h-100">
                  <img
                    src={shop3}
                    className="card-img-top"
                    alt="Formal Wear Discount"
                  />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">Men Casual Shirt</h4>
                    <p className="text-muted" style={{ fontSize: "22px" }}>
                      <del>$875.00</del>{" "}
                      <span className="text-danger fw-bold">$799.9</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Card 4 --> */}
              <div className="col-lg-3 col-md-6">
                <div className="card h-100">
                  <img
                    src={shop4}
                    className="card-img-top"
                    alt="Formal Wear Discount"
                  />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">Blend Straight Kurta</h4>
                    <p className="text-muted" style={{ fontSize: "22px" }}>
                      <del>$475.00</del>{" "}
                      <span className="text-danger fw-bold">$399.9</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
         <div style={{ backgroundColor: "black" }}>
  <div className="container">
    <div className="row">
      <h1
        style={{
          color: "white",
          fontSize: "32px",
          paddingTop: "70px",
        }}
      >
        <strong>
          Special Offer All Branded Sandals are <br /> Flat 50% Discount
        </strong>
      </h1>

      <div
        className="col-lg-3"
        style={{ color: "grey", fontSize: "16px" }}
      >
        <h4 style={{ color: "white" }}>Useful Links</h4>
        <p>Home</p>
        <p>About</p>
        <p>Blogs</p>
        <p>Contact</p>
        <p>Support</p>
        <p>News & Media</p>
        <p>Careers</p>
      </div>

      <div
        className="col-lg-3"
        style={{ color: "grey", fontSize: "16px" }}
      >
        <h4 style={{ color: "white" }}>Information</h4>
        <p>Terms & Conditions</p>
        <p>Delivery Terms</p>
        <p>Order Tracking</p>
        <p>Returns Policy</p>
        <p>Privacy Policy</p>
        <p>FAQ</p>
        <p>The Shop</p>
      </div>

      <div
        className="col-lg-3"
        style={{ color: "grey", fontSize: "16px" }}
      >
        <h4 style={{ color: "white" }}>Address</h4>
        <p>London, UK</p>
        <p>998 13h Street, Office 436</p>
        <p>Harlo 61466</p>
        <p>+(21) 255 999 8888</p>
        <p>ShoppyKart@mail.com</p>
      </div>

      <div className="col-lg-3 ps-5">
        <h4 style={{ color: "white" }}>Payment Method</h4>
        <div style={{ fontSize: "36px", color: "white" }}> {/* 28px → 36px */}
          <i className="lab la-paypal"></i>
          <i className="lab la-cc-visa"></i>
          <i className="lab la-cc-discover"></i>
          <i className="lab la-cc-stripe"></i>
          <i className="lab la-stripe-s"></i>
          <i className="lab la-cc-jcb"></i>
          <i className="lab la-cc-stripe"></i>
          <i className="lab la-cc-discover"></i>
          <i className="las la-audio-description"></i>
        </div>
      </div>

      <p
        style={{ color: "grey", fontSize: "16px", marginTop: "30px" }}
      >
        © 2021 ShoppyKart. All rights reserved | Designed by{" "}
        <span className="text-white">W3layouts</span>
      </p>
    </div>
  </div>
    </div>
        </div>
     
    </>
  );
}
export default Productsingle;
