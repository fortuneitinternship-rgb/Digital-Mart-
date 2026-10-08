import { Link } from "react-router-dom";

function Cart() {

  const item = {
    name: "Wireless Headphones",
    price: 1499,
    quantity: 1
  };

  const total = item.price * item.quantity;

  return (
    <section className="container py-5">

      <div className="page-title">

        <span>SHOPPING</span>

        <h1>Your Cart</h1>

      </div>

      <div className="row g-4">

        <div className="col-lg-8">

          <div className="cart-box">

            <div className="cart-item">

              <div className="cart-placeholder">
                <i className="bi bi-headphones"></i>
              </div>

              <div className="flex-grow-1">

                <h5>{item.name}</h5>

                <p>Premium Wireless Audio</p>

                <strong>
                  ₹{item.price}
                </strong>

              </div>

              <div className="quantity">

                <button>-</button>

                <span>{item.quantity}</span>

                <button>+</button>

              </div>

            </div>

          </div>

        </div>


        <div className="col-lg-4">

          <div className="summary-box">

            <h4>Order Summary</h4>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link
              to="/checkout"
              className="btn btn-dark w-100 mt-3"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Cart;