function Footer() {
  return (
    <footer className="dm-footer mt-5">

      <div className="container py-5">

        <div className="row g-4">

          <div className="col-md-4">

            <h4>
              <i className="bi bi-bag-check-fill me-2"></i>
              Digital Mart
            </h4>

            <p>
              Your one-stop destination for modern
              technology accessories.
            </p>

          </div>

          <div className="col-md-2">

            <h6>Quick Links</h6>

            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/login">Login</a>

          </div>

          <div className="col-md-3">

            <h6>Categories</h6>

            <a href="/products">Headphones</a>
            <a href="/products">Keyboards</a>
            <a href="/products">Mouse</a>
            <a href="/products">Chargers</a>

          </div>

          <div className="col-md-3">

            <h6>Contact</h6>

            <p>
              <i className="bi bi-envelope me-2"></i>
              support@digitalmart.com
            </p>

            <p>
              <i className="bi bi-telephone me-2"></i>
              +91 98765 43210
            </p>

          </div>

        </div>

      </div>

      <div className="footer-bottom text-center py-3">
        © 2026 Digital Mart. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;