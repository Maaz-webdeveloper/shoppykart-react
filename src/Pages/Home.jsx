import React from "react";
import './style.css';
import { Link } from "react-router-dom";

// Import images
import banner1 from './Images/banner1.jpg';
import banner2 from './Images/banner2.jpg';
import banner3 from './Images/banner3.jpg';
import banner4 from './Images/banner4.jpg';
import banner5 from './Images/banner5.jpg';
import d1 from './Images/d1.jpg';
import d2 from './Images/d2.jpg';
import d3 from './Images/d3.jpg';
import d4 from './Images/d4.jpg';
import d5 from './Images/d5.jpg';
import d6 from './Images/d6.jpg';
import d7 from './Images/d7.jpg';
import d8 from './Images/d8.jpg';
import d9 from './Images/d9.jpg';
import d10 from './Images/d10.jpg';
import d11 from './Images/d11.jpg';
import d12 from './Images/d12.jpg';
import d13 from './Images/d13.jpg';
import d14 from './Images/d14.jpg';
import d15 from './Images/d15.jpg';
import d16 from './Images/d16.jpg';
import d17 from './Images/d17.jpg';
import shop1 from './Images/shop-1.jpg';
import shop2 from './Images/shop-2.jpg';
import shop3 from './Images/shop-3.jpg';
import shop4 from './Images/shop-4.jpg';

function Home() {
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
                  style={{ fontWeight: 700, fontSize: "17px" }}
                >
                  CONTACT
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ fontSize: "20px", color: "red" }}
              >
                <a className="nav-link" href="/">
                  <i className="las la-search"></i>
                </a>
              </li>
            </ul>
            <div className="maaz d-flex align-items-center gap-2 fs-5">
              <button className="btn btn-danger d-flex align-items-center gap-2">
                <i className="las la-laugh"></i> Login
              </button>
              <button className="btn btn-danger d-flex align-items-center gap-2">
                <i className="las la-clipboard-list"></i> Cart
              </button>
              <i className="las la-moon fs-3"></i>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100 img-fluid" alt="..." />
            <div className="carousel-caption d-none d-md-block pb-5">
              <p className="text-danger fs-3">Up to 60% off Now</p>
              <h1 className="display-1">Mid Season Sale off 40%</h1>
              <p className="fs-5">
                Final Clearance:Take 20% off 'Sale Must-Haves'
              </p>
              <button className="btn btn-danger btn-lg rounded-2 px-4 py-2">
                Start Shopping <i className="las la-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block pb-5">
              <h5 className="text-danger fs-3">Full Summer Clearance</h5>
              <h1 className="display-1">Enjoy The Season Sale</h1>
              <p className="fs-5">
                Final Clearance:Take 20% off 'Sale Must-Haves'
              </p>
              <button className="btn btn-danger btn-lg rounded-2 px-4 py-2">
                Start Shopping <i className="las la-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block pb-5">
              <h5 className="text-danger fs-3">Full Summer Clearance</h5>
              <h1 className="display-1">Enjoy The Season Sale</h1>
              <p className="fs-5">
                Final Clearance:Take 20% off 'Sale Must-Haves'
              </p>
              <button className="btn btn-danger btn-lg rounded-2 px-4 py-2">
                Start Shopping<i className="las la-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#f7f6f6",
          fontSize: "35px",
          padding: "48px 0px",
          fontWeight: 700,
        }}
      >
        {" "}
        Free Shopping For You Till Midnight <i className="las la-truck"></i>
      </h1>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4">
            <div
              className="card text-bg-dark border-0"
              style={{ width: "100%", maxWidth: "900px", margin: "auto" }}
            >
              <img
                src={banner5}
                className="card-img img-fluid"
                alt="..."
              />
              <div className="card-img-overlay p-3 p-md-5">
                <h5 className="card-title" style={{ fontSize: "2rem" }}>
                  {" "}
                  Platform Velvet <br />
                  Sandals
                </h5>
                <button type="button" className="btn btn-danger btn-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-4">
            <div
              className="card text-bg-dark border-0"
              style={{ width: "100%", maxWidth: "900px", margin: "auto" }}
            >
              <img
                src={banner4}
                className="card-img img-fluid"
                alt="..."
              />
              <div className="card-img-overlay p-3 p-md-5">
                <h5 className="card-title" style={{ fontSize: "2rem" }}>
                  Pebbled Weekend <br /> Bag
                </h5>
                <button type="button" className="btn btn-danger btn-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div
        className="card"
        style={{ backgroundColor: "#f7f6f6", border: "none" }}
      ></div>
      <br />
      <br />
      <br />
      <div className="container">
        {/* Deals Of The Day */}
        <h1 className="fw-bold my-5">Deals Of The Day</h1>
        <div className="row flex-wrap">
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card custom-card h-100">
              <img src={d1} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 40% off on Formal Wear</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card h-100">
              <img src={d2} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Active Wear </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card h-100">
              <img src={d3} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 40% off on shoes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card h-100">
              <img src={d4} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Shirt</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card h-100">
              <img src={d5} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Clothing</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card h-100">
              <img src={d6} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Sandals</p>
              </div>
            </div>
          </div>
        </div>
        {/* Best Discounts for You */}
        <h1 className="my-5 fw-bold">Best Discounts for You</h1>
        <div className="row flex-wrap">
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d7} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Swings</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d8} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Office chairs</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d9} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Glass Mirror</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d10} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Makeup kit</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d11} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Handbags</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d12} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Perfumes</p>
              </div>
            </div>
          </div>
        </div>
        {/* Best Offers for You */}
        <br />
        <br />
        <h1 className="my-5 fw-bold">Best Offers for You</h1>
        <div className="row flex-wrap">
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d13} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Kids Wear</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d14} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Face packs</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d15} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Women heels</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d16} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Baby toys</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d17} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 50% off on Herbal Products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card">
              <img src={d11} className="card-img-top img-fluid" alt="..." />
              <div className="card-body" style={{ backgroundColor: "rgb(212, 209, 209)" }}>
                <p className="card-text fw-bold fs-5">Min. 60% off on Office chairs</p>
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
      <div
        className="card text-bg-dark border-0"
        style={{ minHeight: "300px", maxHeight: "80vh" }}
      >
        <img src={banner5} className="card-img img-fluid" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <p className="card-text fs-1 fw-bold pt-4">
            Pre-Fall Collection, That Mid-summer <br />
            Craving For Fall styles
          </p>
          <i className="las la-play" style={{ fontSize: "110px" }}></i>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <h1 className="fw-bold">Shop With Us</h1>
            <p className="fs-4">Handpicked Favourites just for you</p>
          </div>
        </div>
        <div className="row gy-4 custom-gap">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card h-100">
              <img
                src={shop1}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body text-center">
                <h4 className="fw-bold">Checkered Casual Shirt</h4>
                <p className="card-text fs-5 ">
                  <span style={{ textDecoration: "line-through" }}>
                    $975.00
                  </span>
                  <span className="text-danger fw-bold"> $899.99</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="card h-100">
              <img
                src={shop2}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body text-center">
                <h4 className="fw-bold">Cotton Flared Kurta</h4>
                <p className="card-text fs-5 ">
                  <span style={{ textDecoration: "line-through" }}>
                    $775.00
                  </span>
                  <span className="text-danger fw-bold"> $599.99</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="card h-100">
              <img
                src={shop3}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body text-center">
                <h4 className="fw-bold">Men Casual Shirt</h4>
                <p className="card-text fs-5 ">
                  <span style={{ textDecoration: "line-through" }}>
                    $775.00
                  </span>
                  <span className="text-danger fw-bold"> $599.99</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="card h-100">
              <img
                src={shop4}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body text-center">
                <h4 className="fw-bold">Blend Straight Kurta</h4>
                <p className="card-text fs-5 ">
                  <span style={{ textDecoration: "line-through" }}>
                    $475.00
                  </span>
                  <span className="text-danger fw-bold"> $399.99</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="d-block w-100"
                style={{
                  backgroundImage: `url(${banner3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "60px 10px",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    {/* <!-- 1st row: Section heading and description --> */}
                    <div className="col-lg-5 text-white">
                      <p className="text-danger fw-bold fs-4 mb-1">REVIEWS</p>
                      <h2 className="fw-bold fs-1 mb-3">What Clients Say ?</h2>
                      <p className="fs-5 mb-0">
                        Lorem ipsum viverra feugiat. Pellen
                        <br />
                        tesque libero ut justo, ultrices in ligula.
                        <br />
                        Semper at tempufddfel.
                      </p>
                    </div>
                    {/* <!-- 2nd row: Review cards --> */}
                    <div className="col-lg-7">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="review-card bg-white p-4 shadow rounded position-relative">
                            <span
                              className="text-danger fs-2"
                              style={{
                                position: "absolute",
                                top: "20px",
                                left: "20px",
                              }}
                            >
                              &#10077;
                            </span>
                            <p className="mb-0 ps-4" style={{ color: "#555" }}>
                              Lorem ipsum dolor sit amet elit. hic odio tenetur.
                              ante ipsum primis in cibus orci luctus et ultrices
                              posuere.
                            </p>

                            <div className="review-arrow"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="review-card bg-white p-4 shadow rounded position-relative">
                            <span
                              className="text-danger fs-2"
                              style={{
                                position: "absolute",
                                top: "20px",
                                left: "20px",
                              }}
                            >
                              &#10077;
                            </span>
                            <p className="mb-0 ps-4" style={{ color: "#555" }}>
                              Lorem ipsum dolor sit amet elit. hic odio tenetur.
                              ante ipsum primis in faucibus orci luctus et
                              ultrices posuere.
                            </p>
                            <div className="review-arrow"></div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- 3rd row: Reviewer info --> */}
                      <div className="row mt-4">
                        <div className="col-md-6 d-flex align-items-center gap-3">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Johnson william"
                            className="rounded-circle img-fluid"
                            width="56"
                            height="56"
                            style={{ objectFit: "cover" }}
                          />
                          <div>
                            <div className="fw-bold fs-4 text-white">
                              Johnson william
                            </div>
                            <div className="text-white-50 fs-5">
                              Example City
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center gap-3">
                          <img
                            src="https://randomuser.me/api/portraits/men/33.jpg"
                            alt="Alexander sakura"
                            className="rounded-circle img-fluid"
                            width="56"
                            height="56"
                            style={{ objectFit: "cover" }}
                          />
                          <div>
                            <div className="fw-bold text-white fs-4">
                              Alexander sakura
                            </div>
                            <div className="text-white-50 fs-5">
                              Example City
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <i
              className="las la-envelope"
              style={{ color: "red", fontSize: "90px", paddingTop: "90px" }}
            ></i>
            <h1 className="fw-bold">Get On The List</h1>
            <h5>Shop Exclusive Promos & SAVE 20% on Your First Order</h5>
            <div className="email-box">
              <div className="input-group mb-3 gap-2">
                <span className="input-group-text py-3 fs-5">
                  <i className="las la-envelope-check"></i>
                </span>
                <input
                  type="email"
                  className="form-control py-3 fs-5"
                  placeholder="Your email here"
                />
                <button className="btn btn-danger py-3 fs-5" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
            <p style={{ fontSize: "20px" }}>
              By entering your email, you are accepting our{" "}
              <span className="text-danger">Terms of Use</span> and <br />
              <span className="text-danger">Privacy Policy.</span>
            </p>
          </div>
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
      </div>
    </>
  );
}

export default Home;
