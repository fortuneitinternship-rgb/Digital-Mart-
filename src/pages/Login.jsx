import { Link } from "react-router-dom";

function Login() {

  return (
    <section className="auth-section">

      <div className="auth-card">

        <div className="auth-logo">
          <i className="bi bi-bag-check-fill"></i>
        </div>

        <h2>Welcome Back</h2>

        <p>Login to your Digital Mart account</p>

        <form>

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
            placeholder="Enter your password"
          />

          <button className="btn btn-dark w-100 mt-4">
            Login
          </button>

        </form>

        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Login;