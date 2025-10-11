import React from "react";
import './style.css';
import { Link } from "react-router-dom";


// Import images
import team1 from './Images/team1.jpg'
import team2 from './Images/team2.jpg'
import team3 from './Images/team3.jpg'
function About() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ paddingRight: "20px" }}
      >
        <div className="container">
          <a className="navbar-brand" style={{ paddingRight: "20px" }}>
            <h1>
              <span className="one text-danger">SHOPPY</span>KART
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
              <button className="btn btn-danger">
                {" "}
                <i className="las la-laugh"></i>
                Login
              </button>
              <button className="btn btn-danger">
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
        <div className="container">
          <h1 className="text-white py-5">About Us</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        <p className="text-danger fw-bold">OUR INFO</p>
        <h1 className="fw-bold display-4">About Our ShoppyKart</h1>
        <p
          className="fs-5 text-secondary mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit
          ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla non ipsum soluta perferendis veniam qui esse magnam commodi
          quisquam.
        </p>
        <br />
        <button className="btn btn-danger rounded-pill px-4 py-2">
          Read More
        </button>
      </div>
      <br />
      <br />
      <br />

      <div className="stats-section">
        <div className="container">
          <div className="row stats-row">
            <div className="col-lg-3 col-md-6 col-12 stat-box mb-4">
              <div className="icon-circle">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">960</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 stat-box mb-4">
              <div className="icon-circle">
                <i className="fas fa-image"></i>
              </div>
              <div className="stat-number">1560</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 stat-box mb-4">
              <div className="icon-circle">
                <i className="fas fa-headset"></i>
              </div>
              <div className="stat-number">1660</div>
              <div className="stat-label">Hours Of Support</div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 stat-box mb-4">
              <div className="icon-circle">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="stat-number">860</div>
              <div className="stat-label">Hard Workers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="heady pt-5 px-3 px-md-5">
        <div className="container">
          <p className="fw-bold fs-5 text-danger">Our Special Offer</p>
          <h1 className="fw-bold text-white">
            Up To 60% Off Now <br /> Enjoy The Season Sale
          </h1>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <p style={{ color: "red", textAlign: "center" }}>
        <strong>Our Team</strong>
      </p>
      <h1 className="fw-bold" style={{ textAlign: "center" }}>
        Our Creative Team
      </h1>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={team1}
                className="card-img-top img-fluid"
                alt="Walter White"
              />
              <div className="card-body">
                <h4>Walter White</h4>
                <p className="card-text">Chief Executive Officer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={team2}
                className="card-img-top img-fluid"
                alt="Sarah Jhonson"
              />
              <div className="card-body">
                <h4>Sarah Jhonson</h4>
                <p className="card-text">Product Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={team3}
                className="card-img-top img-fluid"
                alt="William Anderson"
              />
              <div className="card-body">
                <h4>William Anderson</h4>
                <p className="card-text">Sales Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default About;
