import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="banner-section position-relative d-flex align-items-center min-vh-100 overflow-hidden pt-5">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: 0, filter: "brightness(0.7) contrast(1.1)" }}
      >
        <source src="/assets/images/backgrounds/banner-video.mp4" type="video/mp4" />
      </video>

      {/* Multi-layered Nature Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(135deg, rgba(8, 28, 14, 0.93) 0%, rgba(5, 18, 9, 0.84) 45%, rgba(11, 38, 19, 0.95) 100%)",
          zIndex: 1
        }}
      ></div>

      {/* Ambient Emerald Glow Accent */}
      <div
        className="position-absolute start-0 bottom-0 rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(46, 204, 113, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      ></div>

      <div className="container position-relative py-5 mt-5" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-11 col-xl-10">
            <div className="d-flex flex-column gap-4">
              {/* Conservation Kicker Badge */}
              {/* <div
                className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-20 px-3 py-2 rounded-pill text-white shadow-sm"
                style={{ width: "fit-content", backdropFilter: "blur(8px)" }}
              >
                <iconify-icon icon="lucide:trees" className="text-warning fs-5"></iconify-icon>
                <span className="fs-7 fw-bold text-uppercase tracking-wider">
                  Community-Led Conservation in Nigeria Since 2001
                </span>
              </div> */}

              {/* Main Headline */}
              <h1 className="display-3 fw-bold text-white lh-sm mb-0">
                Enhancing Holistic Community Development Through{" "}
                <span style={{ color: "#4ADE80", textShadow: "0 0 25px rgba(74, 222, 128, 0.3)" }}>
                  Participatory Action
                </span>
              </h1>

              {/* Mission Statement */}

              {/* <div
                className="d-flex flex-wrap align-items-center gap-4 gap-md-5 pt-4 mt-2 border-top border-white border-opacity-15 text-white fs-7"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <div className="d-flex align-items-center gap-2">
                  <iconify-icon icon="lucide:shield-check" className="text-warning fs-5"></iconify-icon>
                  <span className="text-white-50"><strong className="text-white">80,000+</strong> Hectares Protected</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <iconify-icon icon="lucide:users" className="text-warning fs-5"></iconify-icon>
                  <span className="text-white-50"><strong className="text-white">35,000+</strong> People Reached</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <iconify-icon icon="lucide:badge-check" className="text-warning fs-5"></iconify-icon>
                  <span className="text-white-50"><strong className="text-white">CEPF &amp; Rainforest Rescue</strong> Partner</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
