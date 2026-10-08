import { Link, useParams } from "react-router-dom";

import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>

        <Link
          to="/products"
          className="btn btn-dark mt-3"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="container py-5">

      <div className="row g-5 align-items-center">

        <div className="col-lg-6">

          <div className="details-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

        </div>

        <div className="col-lg-6">

          <small className="text-muted">
            {product.category}
          </small>

          <h1 className="mt-2">
            {product.name}
          </h1>

          <div className="rating mb-3">
            ★★★★★
            <span> {product.rating}</span>
          </div>

          <div className="details-price">
            ₹{product.price}
            <del>₹{product.oldPrice}</del>
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <hr />

          <div className="d-flex gap-3">

            <button className="btn btn-dark px-4">
              <i className="bi bi-cart-plus me-2"></i>
              Add to Cart
            </button>

            <button className="btn btn-outline-dark">
              <i className="bi bi-heart"></i>
            </button>

          </div>

          <div className="product-benefits mt-4">

            <p>
              <i className="bi bi-check-circle-fill"></i>
              Free delivery available
            </p>

            <p>
              <i className="bi bi-check-circle-fill"></i>
              Secure payment
            </p>

            <p>
              <i className="bi bi-check-circle-fill"></i>
              Easy returns
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;