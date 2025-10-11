import React from "react";
import './style.css';
import { Link } from "react-router-dom";
// Import images
import shop1 from './Images/shop-1.jpg';
import shop2 from './Images/shop-2.jpg';
import shop3 from './Images/shop-3.jpg';

function Cart() {
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>

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
                </Link>{" "}
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
                  style={{
                    fontWeight: 700,
                    fontSize: "17px",
                  }}
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
      <div className="head">
        <h1 style={{ color: "white", padding: "8%" }}>Products</h1>
      </div>
      <br />
      <br />

      <div className="container py-5">
        <h1 className="fw-bold ">Checkout</h1>
        <p className="fs-5 ">
          Your shopping cart contains: <strong>3 Products</strong>
        </p>

        <div className="table-responsive">
          <table
            className="table table-bordered text-center align-middle"
            cellpadding="10"
            width="100%"
          >
            <thead className="table-dark">
              <tr className="bh">
                <th>SL NO.</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={shop1}
                    alt=""
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      className="form-control form-control-sm text-center"
                      style={{ maxWidth: "60px" }}
                    />
                    <button className="btn btn-sm btn-outline-secondary">
                      +
                    </button>
                  </div>
                </td>
                <td>Checkered Casual Shirt</td>
                <td>$899.00</td>
                <td>
                  <a href="#" className="btn btn-sm btn-danger">
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img
                    src={shop2}
                    alt=""
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      className="form-control form-control-sm text-center"
                      style={{ maxWidth: "60px" }}
                    />
                    <button className="btn btn-sm btn-outline-secondary">
                      +
                    </button>
                  </div>
                </td>
                <td>Cotton Flared Kurta</td>
                <td>$599.00</td>
                <td>
                  <a href="#" className="btn btn-sm btn-danger">
                    Remove
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img
                    src={shop3}
                    alt=""
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      className="form-control form-control-sm text-center"
                      style={{ maxWidth: "60px" }}
                    />
                    <button className="btn btn-sm btn-outline-secondary">
                      +
                    </button>
                  </div>
                </td>
                <td>Men Casual Shirt</td>
                <td>$799.00</td>
                <td>
                  <a href="#" className="btn btn-sm btn-danger">
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2
              className="p-3 text-white text-center rounded"
              style={{ backgroundColor: "#f13d3d", fontSize: "25px" }}
            >
              Continue to basket
            </h2>
            <div
              className="container text-secondary"
              style={{ fontSize: "18px" }}
            >
              <div className="d-flex justify-content-between p">
                <h5>Product1 -</h5>
                <h5>$599.00</h5>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h5>Product2 -</h5>
                <h5>$899.99</h5>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h5>Product3 -</h5>
                <h5>$799.99</h5>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h5>Total Service Charges -</h5>
                <h5>$10.00</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between py-2">
                <h5>
                  <strong>Total -</strong>
                </h5>
                <h5>
                  <strong>$2297.00</strong>
                </h5>
              </div>
            </div>

            <hr />
          </div>
          <div className="col-lg-8">
            <div className="details-form">
              <h2 className="mb-4 fw-bold fs-3">Add a new Detail</h2>
              <form className="fs-5">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="form-control"
                    style={{ backgroundColor: "rgb(241, 241, 241)" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="form-control"
                    style={{ backgroundColor: "rgb(241, 241, 241)" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Landmark"
                    className="form-control"
                    style={{ backgroundColor: "rgb(241, 241, 241)" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Town/City"
                    className="form-control"
                    style={{ backgroundColor: "rgb(241, 241, 241)" }}
                  />
                </div>
                <select
                  className="form-select"
                  style={{
                    backgroundColor: "rgb(241, 241, 241)",
                    color: "grey",
                  }}
                >
                  <option value="1">Office</option>
                  <option value="2">Home</option>
                  <option value="3">Commercial</option>
                </select>
              </form>
              <br />
              <button className="delivery-btn w-100">
                Delivery To This Address
              </button>
              <div>
                <button className="delivery-btn w-100 mt-4">
                  Make A Payment{" "}
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
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
    </>
  );
}

export default Cart;
