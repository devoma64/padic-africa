import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-wrapper overflow-hidden bg-light-gray border-top border-primary border-4 d-flex align-items-center justify-content-center min-vh-100 py-5">
      <div className="container text-center">
        <div className="d-flex flex-column align-items-center gap-4">
          <img
            src="/assets/images/backgrounds/404.svg"
            alt="404 Not Found"
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
          <h2 className="display-5 fw-bold mb-0">Oops! Page Not Found</h2>
          <p className="text-muted fs-5 mb-3" style={{ maxWidth: "500px" }}>
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary px-5 py-3 rounded-pill fw-bold text-dark shadow">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
