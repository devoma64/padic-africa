import { Link } from "react-router-dom";

export default function BannerInner({ title, breadcrumb, bgImage = "/assets/images/backgrounds/aboutus-banner.jpg" }) {
  return (
    <section
      className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
      style={{
        minHeight: "44vh",
        background: `linear-gradient(135deg, rgba(8, 28, 14, 0.92) 0%, rgba(15, 50, 24, 0.86) 100%), url('${bgImage}') center/cover no-repeat`
      }}
    >
      {/* Ambient Glow */}
      <div
        className="position-absolute end-0 top-0 rounded-circle"
        style={{
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}
      ></div>

      <div className="container position-relative z-1 pb-5 pt-5">
        <div className="d-flex flex-column gap-3">
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 bg-white bg-opacity-10 px-3 py-2 rounded-pill d-inline-flex border border-white border-opacity-15" style={{ width: "fit-content" }}>
              <li className="breadcrumb-item">
                <Link to="/" className="text-white-50 text-decoration-none fs-7 fw-semibold">
                  <iconify-icon icon="lucide:home" className="me-1 fs-8"></iconify-icon>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-white fs-7 fw-bold" aria-current="page">
                {breadcrumb || title}
              </li>
            </ol>
          </nav> */}
          <h1 className="display-4 fw-bold text-white mb-0" style={{ letterSpacing: "-0.02em" }}>{title}</h1>
        </div>
      </div>
    </section>
  );
}
