import React from "react";
import './style.css';
import { Link } from "react-router-dom";
function Contact() {
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
      <div className="head" style={{ backgroundColor: "black" }}>
        <h1 style={{ color: "white", padding: "8%" }}>
          <b>Contact Us</b>
        </h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4 style={{ color: "red", textAlign: "center" }}>
        <b>GET IN TOUCH</b>
      </h4>
      <p style={{ textAlign: "center", fontSize: "55px" }}>
        <b>
          Contact With Our Support <br /> During Emergency!
        </b>
      </p>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div style={{ display: "flex", gap: "10px" }}>
              <div className="test">
                <i className="las la-map-marker-alt"></i>
              </div>
              <div style={{ paddingBottom: "50px" }}>
                <p style={{ fontSize: "30px" }}>
                  <b>Office Address</b>
                </p>
                <p style={{ fontSize: "20px", color: "grey" }}>
                  Lorem ipsum, 343 ShoppyKart,
                  <br /> #4148 Honey street, NY - 62617.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ display: "flex" }}>
              <div className="test1">
                <i className="las la-phone"></i>
              </div>
              <div>
                <p style={{ fontSize: "30px" }}>
                  <b>Call For Help :</b>
                </p>
                <p style={{ fontSize: "20px", color: "grey" }}
>
                  +1(21) 234 557 4567
                  <br />
                  +1(21) 234 557 4568
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ display: "flex" }}>
              <div className="test2">
                <i className="las la-envelope"></i>
              </div>
              <div>
                <p style={{ fontSize: "30px" }}>
                  <b>Mail Us:</b>
                </p>
                <p style={{ fontSize: "20px", color: "grey" }}>
                  support@mail.com
                  <br /> contact@mail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control form-control-lg"
                id="exampleInputName"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="tel"
                className="form-control form-control-lg"
                id="exampleInputPhone"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleInputSubject"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-control-lg"
              placeholder="Type your message here"
              id="exampleFormControlTextarea1"
              rows="7"
style={{ fontSize: "18px" }}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-danger btn-lg my-5">
              Send Message
            </button>
          </div>
        </div>
      </div>

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

export default Contact;
