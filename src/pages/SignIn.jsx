import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="page-wrapper overflow-hidden bg-light-gray border-top border-primary border-4 d-flex align-items-center justify-content-center min-vh-100 py-5">
      <div className="container">
        <div className="card mx-auto shadow-lg border-0 rounded-4" style={{ maxWidth: "480px" }}>
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <Link to="/">
                <img src="/assets/images/logos/padic-africa-logo.png" alt="logo" className="img-fluid" style={{ maxHeight: "65px", width: "auto" }} />
              </Link>
            </div>

            <div className="d-flex gap-3 mb-4">
              <button type="button" className="btn btn-outline-light bg-white border text-dark w-50 py-2 d-flex align-items-center justify-content-center gap-2 rounded-3">
                <img src="/assets/images/svgs/icon-google.svg" alt="google" width="18" height="18" />
                <span>Google</span>
              </button>
              <button type="button" className="btn btn-outline-light bg-white border text-dark w-50 py-2 d-flex align-items-center justify-content-center gap-2 rounded-3">
                <iconify-icon icon="lucide:apple" className="fs-5"></iconify-icon>
                <span>Apple</span>
              </button>
            </div>

            <div className="d-flex align-items-center gap-2 my-4 text-muted fs-7">
              <hr className="flex-grow-1 m-0" />
              <span>or sign in with email</span>
              <hr className="flex-grow-1 m-0" />
            </div>

            <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
              <div>
                <label className="form-label fw-bold fs-7">Email address</label>
                <input
                  type="email"
                  required
                  className="form-control rounded-3"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label fw-bold fs-7">Password</label>
                <input
                  type="password"
                  required
                  className="form-control rounded-3"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center fs-7">
                <label className="form-check-label d-flex align-items-center gap-2">
                  <input type="checkbox" className="form-check-input" />
                  <span>Remember me</span>
                </label>
                <a href="#!" className="text-primary text-decoration-none fw-semibold">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill fw-bold text-dark mt-2 shadow-sm">
                Sign In
              </button>
            </form>

            <div className="text-center mt-4 fs-7 text-muted">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-dark fw-bold text-decoration-none">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
