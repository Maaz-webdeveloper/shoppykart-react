import React from "react";
import './style.css';
import { Link } from "react-router-dom";


// Import images
import shop1 from './Images/shop-1.jpg';
import shop2 from './Images/shop-2.jpg';
import shop3 from './Images/shop-3.jpg';
import shop4 from './Images/shop-4.jpg';
import shop5 from './Images/shop-5.jpg';
import shop6 from './Images/shop-6.jpg';
import shop7 from './Images/shop-7.jpg';
import shop8 from './Images/shop-8.jpg';
import shop9 from './Images/shop-9.jpg';
import banner5 from './Images/banner5.jpg';
import banner4 from './Images/banner4.jpg';




function Product() {
  return (
    <>
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
                  style={{
                    fontWeight: 700,
                    fontSize: "17px",
                  }}
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
                  style={{ fontWeight: "700", fontSize: "17px" }}
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
      <div className="head">
        <h1 style={{ color: "white", padding: "8%" }}>Products</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-12 mb-4 bg-light p-3">
            <h5 className="mb-3">Product Categories</h5>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="mb-0">Accessories</p>
              <button className="btn btn-sm btn-outline-secondary">14</button>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="mb-0">Suits</p>
              <button className="btn btn-sm btn-outline-secondary">18</button>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="mb-0">Footwear</p>
              <button className="btn btn-sm btn-outline-secondary">12</button>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0">Blazers</p>
              <button className="btn btn-sm btn-outline-secondary">10</button>
            </div>

            <h5 className="mb-2">Filter By Price</h5>
            <p>$50 - $6000</p>
            <input type="range" className="form-range" id="customRange1" />

            <h5 className="mt-4 mb-2">Discount</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="discount15"
              />
              <label className="form-check-label" for="discount15">
                15% or More
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="discount20"
                checked
              />
              <label className="form-check-label" for="discount20">
                20% or More
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="discount35"
              />
              <label className="form-check-label" for="discount35">
                35% or More
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="discount55"
              />
              <label className="form-check-label" for="discount55">
                55% or More
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="discount65"
              />
              <label className="form-check-label" for="discount65">
                65% or More
              </label>
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="discount75"
              />
              <label className="form-check-label" for="discount75">
                75% or More
              </label>
            </div>

            <h5 className="mb-3">Customer Ratings</h5>
            <div
              className="d-flex align-items-center mb-2"
              style={{ fontSize: "20px" }}
            >
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star-half-alt"></i>
              <p className="mb-0 ms-2" style={{ fontSize: "15px" }}>
                4.5
              </p>
            </div>
            <div
              className="d-flex align-items-center mb-2"
              style={{ fontSize: "20px" }}
            >
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <p className="mb-0 ms-2" style={{ fontSize: "15px" }}>
                5.0
              </p>
            </div>
            <div
              className="d-flex align-items-center mb-2"
              style={{ fontSize: "20px" }}
            >
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star-half-alt"></i>
              <i className="las la-star"></i>
              <p className="mb-0 ms-2" style={{ fontSize: "15px" }}>
                4.0
              </p>
            </div>

            <h5 className="mt-4">Recent Products</h5>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={shop8}
                    className="img-fluid rounded-start"
                    alt="Blue Sweater"
                  />
                </div>
                <div className="col-8 bg-light">
                  <div className="card-body text-center py-4">
                    <h6 className="mb-1">Blue Sweater</h6>
                    <p className="card-text text-danger mb-0">$499.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={shop7}
                    className="img-fluid rounded-start"
                    alt="White T-Shirt"
                  />
                </div>
                <div className="col-8 bg-light">
                  <div className="card-body text-center py-4">
                    <h6 className="mb-1">White T-Shirt</h6>
                    <p className="card-text text-danger mb-0">$575.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-7 col-12">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
              <p className="mb-0">Showing All 9 Results</p>
              <select
                className="form-select w-auto"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop1}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>Checkerd Casual Shirt</strong>
                    </h4>
                    <p>
                      {" "}
                      <strong>
                        <del>$975.00 </del>
                        <span style={{ color: "red" }}>$899.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop2}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      {" "}
                      <strong>Cotton Flared Kurta</strong>
                    </h4>
                    <p>
                      <strong>
                        {" "}
                        <del>$775.00 </del>
                        <span style={{ color: "red" }}>$599.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop3}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>Men Casual Shirt</strong>
                    </h4>
                    <p>
                      {" "}
                      <strong>
                        <del>$875.00 </del>
                        <span style={{ color: "red" }}>$799.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop4}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>Blend Straight Kurta</strong>
                    </h4>
                    <p>
                      <strong>
                        {" "}
                        <del>$475.00 </del>
                        <span style={{ color: "red" }}>$399.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop5}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>Women Maroon Top</strong>
                    </h4>
                    <p>
                      {" "}
                      <strong>
                        <del>$575.00 </del>
                        <span style={{ color: "red" }}>$299.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop6}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>Pink Shirt</strong>
                    </h4>
                    <p>
                      <strong>
                        {" "}
                        <del>$775.00 </del>
                        <span style={{ color: "red" }}>$699.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop7}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>Dark Blue Top</strong>
                    </h4>
                    <p>
                      <strong>
                        {" "}
                        <del>$675.00 </del>
                        <span style={{ color: "red" }}>$599.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop8}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>White T-Shirt</strong>
                    </h4>
                    <p>
                      <strong>
                        {" "}
                        <del>$675.00 </del>
                        <span style={{ color: "red" }}>$899.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img
                    src={shop9}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      <strong>Pink Bag</strong>
                    </h4>
                    <p>
                      <strong>
                        <del>$975.00 </del>{" "}
                        <span style={{ color: "red" }}>$599.00</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row g-4">
              <div className="col-lg-6 col-12">
                <div className="card text-bg-dark h-100 border-0">
                  <img
                    src={banner5}
                    className="card-img img-fluid"
                    style={{ filter: "brightness(0.6) contrast(1.2)" }}
                    alt="..."
                  />
                  <div className="card-img-overlay d-flex align-items-end">
                    <h1 className="card-title pb-4">Platform Velvet Sandals</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="card text-bg-dark h-100 border-0">
                  <img
                    src={banner4}
                    className="card-img img-fluid"
                    style={{ filter: "brightness(0.6) contrast(1.2)" }}
                    alt="..."
                  />
                  <div className="card-img-overlay d-flex align-items-end">
                    <h1 className="card-title pb-4">Pebbled Weekend Bag</h1>
                  </div>
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
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default Product;
