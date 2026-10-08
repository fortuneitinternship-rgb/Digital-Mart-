import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">

      <div className="product-card h-100">

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

          <button className="wishlist-btn">
            <i className="bi bi-heart"></i>
          </button>

        </div>

        <div className="product-info">

          <small className="text-muted">
            {product.category}
          </small>

          <h5>{product.name}</h5>

          <div className="rating">
            ★★★★★
            <span>
              ({product.rating})
            </span>
          </div>

          <div className="price">

            <strong>
              ₹{product.price}
            </strong>

            <del>
              ₹{product.oldPrice}
            </del>

          </div>

          <Link
            to={`/product/${product.id}`}
            className="btn btn-dark w-100"
          >
            View Product
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;