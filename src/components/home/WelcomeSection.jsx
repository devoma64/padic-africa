import { Link } from "react-router-dom";

export default function WelcomeSection() {
  const points = [
    "Biodiversity conservation",
    "Livelihood/youths empowerment",
    "Health",
    "Good governance"
  ];

  return (
    <section className="welcome-section py-5 py-lg-11 bg-white">
      <div className="container">
        {/* Top Centered Header with Decorative Leaf Divider */}
        <div className="text-center mb-5">
          <p
            className="mb-1"
            style={{
              fontFamily: "'Playfair Display', cursive, serif",
              fontStyle: "italic",
              color: "#A8B8A0",
              fontSize: "2.1rem",
              fontWeight: 500,
              lineHeight: 1
            }}
          >
            About Us
          </p>
          <h2
            className="fw-bold mb-2 font-sans"
            style={{
              color: "#0F471E",
              fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
              letterSpacing: "-0.01em"
            }}
          >
            Welcome To PADIC - Africa
          </h2>

          {/* Leaf Divider */}
          <div className="d-flex align-items-center justify-content-center my-3">
            <span style={{ width: "65px", height: "1px", backgroundColor: "#CBD5E1" }}></span>
            <span className="mx-2 d-inline-flex align-items-center justify-content-center">
              <iconify-icon
                icon="lucide:leaf"
                className="fs-5"
                style={{ color: "#388E3C", transform: "rotate(45deg)" }}
              ></iconify-icon>
            </span>
            <span style={{ width: "65px", height: "1px", backgroundColor: "#CBD5E1" }}></span>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="row align-items-center g-5 justify-content-between">
          {/* Left Column: Mission, Description, Checklist, and Button */}
          <div className="col-lg-6 col-xl-6">
            <div className="pe-lg-3">
              <h3
                className="fw-bold mb-3 font-sans"
                style={{
                  color: "#0F471E",
                  fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                  lineHeight: 1.35
                }}
              >
                Our vision is to see a physically and environmentally healthy society with sustained economy.
              </h3>

              <p
                className="fs-6 mb-4"
                style={{
                  color: "#4B5563",
                  lineHeight: 1.75,
                  fontSize: "0.98rem"
                }}
              >
                Panacea For Developmental &amp; Infrastructural Challenges For Africa Initiative
                (PADIC-AFRICA ) formerly known as DEVCON is a nongovernmental
                organization geared towards improving the quality of rural environments, better
                living standards in rural communities, and ensuring a society where all
                stakeholders are able to play their part as agents of sustainable development.
              </p>

              {/* Checklist */}
              <div className="d-flex flex-column gap-3 mb-5">
                {points.map((point, index) => (
                  <div key={index} className="d-flex align-items-center gap-3">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{
                        width: "24px",
                        height: "24px",
                        border: "2px solid #1F2937",
                        color: "#1F2937"
                      }}
                    >
                      <iconify-icon icon="lucide:check" className="fs-7 fw-bold"></iconify-icon>
                    </span>
                    <span
                      className="fw-bold text-dark font-sans"
                      style={{ fontSize: "1.05rem", color: "#1F2937" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call-to-action button */}
              <div>
                <Link
                  to="/about"
                  className="btn px-4 py-3 rounded-pill fw-bold text-uppercase text-white shadow-sm text-decoration-none d-inline-flex align-items-center"
                  style={{
                    backgroundColor: "#0F471E",
                    letterSpacing: "1px",
                    fontSize: "0.85rem",
                    transition: "all 0.25s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0B3315")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0F471E")}
                >
                  SEE OUR PROFILE
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: PADIC - AFRICA Logo */}
          <div className="col-lg-5 col-xl-5 text-center">
            <div className="p-3">
              <img
                src="/assets/images/logos/padic-africa-logo.png"
                alt="PADIC - AFRICA"
                className="img-fluid"
                style={{
                  maxWidth: "360px",
                  height: "auto",
                  filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.04))"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
