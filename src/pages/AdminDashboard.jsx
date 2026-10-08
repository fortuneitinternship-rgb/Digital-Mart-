function AdminDashboard() {

  return (
    <section className="container py-5">

      <div className="page-title">

        <span>ADMIN</span>

        <h1>Dashboard</h1>

        <p>Manage your Digital Mart store.</p>

      </div>

      <div className="row g-4">

        <div className="col-md-3">

          <div className="admin-card">

            <i className="bi bi-box-seam"></i>

            <h3>125</h3>

            <p>Total Products</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="admin-card">

            <i className="bi bi-cart-check"></i>

            <h3>86</h3>

            <p>Total Orders</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="admin-card">

            <i className="bi bi-people"></i>

            <h3>240</h3>

            <p>Customers</p>

          </div>

        </div>

        <div className="col-md-3">

          <div className="admin-card">

            <i className="bi bi-currency-rupee"></i>

            <h3>₹85K</h3>

            <p>Total Sales</p>

          </div>

        </div>

      </div>

      <div className="admin-panel mt-5">

        <h4>Quick Management</h4>

        <div className="row g-3 mt-2">

          <div className="col-md-3">
            <button className="admin-action">
              <i className="bi bi-plus-circle"></i>
              Add Product
            </button>
          </div>

          <div className="col-md-3">
            <button className="admin-action">
              <i className="bi bi-grid"></i>
              Categories
            </button>
          </div>

          <div className="col-md-3">
            <button className="admin-action">
              <i className="bi bi-receipt"></i>
              Orders
            </button>
          </div>

          <div className="col-md-3">
            <button className="admin-action">
              <i className="bi bi-person-lines-fill"></i>
              Customers
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AdminDashboard;