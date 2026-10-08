import { Link } from "react-router-dom";

function Register() {

  return (
    <section className="auth-section">

      <div className="auth-card">

        <div className="auth-logo">
          <i className="bi bi-person-plus"></i>
        </div>

        <h2>Create Account</h2>

        <p>Join Digital Mart today</p>

        <form>

          <label>Full Name</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />

          <label>Email Address</label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            className="form-control"
            placeholder="Create password"
          />

          <button className="btn btn-dark w-100 mt-4">
            Create Account
          </button>

        </form>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Register;