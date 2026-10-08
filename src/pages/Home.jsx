import { Link } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {

  return (
    <>

      {/* HERO */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="hero-tag">
                NEW COLLECTION 2026
              </span>

              <h1>
                Upgrade Your
                <span> Digital Lifestyle</span>
              </h1>

              <p>
                Discover premium tech accessories
                designed for work, gaming and everyday life.
              </p>

              <Link
                to="/products"
                className="btn btn-dark btn-lg"
              >
                Shop Now
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>

            <div className="col-lg-6 text-center">

              <div className="hero-product">

                <i className="bi bi-headphones"></i>

                <h4>Premium Tech Accessories</h4>

                <p>
                  Quality • Style • Performance
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}

      <section
        className="container py-5"
        id="categories"
      >

        <div className="section-heading">

          <span>SHOP BY</span>

          <h2>Categories</h2>

        </div>

        <div className="row g-4">

          {[
            ["bi-headphones", "Headphones"],
            ["bi-keyboard", "Keyboards"],
            ["bi-mouse", "Mouse"],
            ["bi-battery-charging", "Chargers"]
          ].map((item) => (

            <div
              className="col-6 col-md-3"
              key={item[1]}
            >

              <Link
                to="/products"
                className="category-card"
              >

                <i className={`bi ${item[0]}`}></i>

                <h5>{item[1]}</h5>

                <small>Explore Products</small>

              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* FEATURED */}

      <section className="container py-5">

        <div className="section-heading">

          <span>OUR PRODUCTS</span>

          <h2>Featured Products</h2>

        </div>

        <div className="row g-4">

          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="text-center mt-5">

          <Link
            to="/products"
            className="btn btn-outline-dark px-4"
          >
            View All Products
          </Link>

        </div>

      </section>


      {/* FEATURES */}

      <section className="feature-strip">

        <div className="container">

          <div className="row g-4 text-center">

            <div className="col-md-3">
              <i className="bi bi-truck"></i>
              <h6>Fast Delivery</h6>
              <p>Quick doorstep delivery</p>
            </div>

            <div className="col-md-3">
              <i className="bi bi-shield-check"></i>
              <h6>Secure Payment</h6>
              <p>100% secure transactions</p>
            </div>

            <div className="col-md-3">
              <i className="bi bi-arrow-repeat"></i>
              <h6>Easy Returns</h6>
              <p>Simple return process</p>
            </div>

            <div className="col-md-3">
              <i className="bi bi-headset"></i>
              <h6>24/7 Support</h6>
              <p>We're here to help</p>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;