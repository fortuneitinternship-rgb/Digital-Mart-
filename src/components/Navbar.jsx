import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark dm-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-bag-check-fill me-2"></i>
          Digital Mart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#categories">
                Categories
              </a>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3">

            <Link
              to="/login"
              className="nav-icon"
              title="Login"
            >
              <i className="bi bi-person"></i>
            </Link>

            <Link
              to="/products"
              className="nav-icon"
              title="Wishlist"
            >
              <i className="bi bi-heart"></i>
            </Link>

            <Link
              to="/cart"
              className="nav-icon"
              title="Cart"
            >
              <i className="bi bi-cart3"></i>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;