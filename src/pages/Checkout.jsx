import { Link } from "react-router-dom";

function Checkout() {

  return (
    <section className="container py-5">

      <div className="page-title">

        <span>ORDER</span>

        <h1>Checkout</h1>

      </div>

      <div className="row g-5">

        <div className="col-lg-7">

          <div className="form-card">

            <h4>Delivery Information</h4>

            <div className="row g-3 mt-2">

              <div className="col-md-6">

                <label>First Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />

              </div>

              <div className="col-md-6">

                <label>Last Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />

              </div>

              <div className="col-12">

                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />

              </div>

              <div className="col-12">

                <label>Address</label>

                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Delivery Address"
                ></textarea>

              </div>

              <div className="col-md-6">

                <label>City</label>

                <input
                  className="form-control"
                  placeholder="City"
                />

              </div>

              <div className="col-md-6">

                <label>PIN Code</label>

                <input
                  className="form-control"
                  placeholder="PIN Code"
                />

              </div>

            </div>

          </div>

        </div>

        <div className="col-lg-5">

          <div className="summary-box">

            <h4>Payment</h4>

            <div className="payment-option">
              <input
                type="radio"
                name="payment"
                defaultChecked
              />
              <span>Cash on Delivery</span>
            </div>

            <div className="payment-option">
              <input
                type="radio"
                name="payment"
              />
              <span>UPI / Card</span>
            </div>

            <hr />

            <h5>Total: ₹1,499</h5>

            <Link
              to="/"
              className="btn btn-dark w-100 mt-3"
            >
              Place Order
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;