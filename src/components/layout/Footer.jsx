import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        {/* Call to Action Banner */}
        {/* <div className="p-4 p-lg-5 rounded-4 mb-5" style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)" }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="badge bg-white text-dark mb-2 fw-bold">Get Involved</span>
              <h3 className="display-6 fw-bold text-white mb-2">Do You Care About Tropical Rainforests Like We Do?</h3>
              <p className="fs-5 text-white text-opacity-90 mb-0">
                Partner with local Eco-Guards and forest communities to halt illegal logging and protect endangered primates.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contact" className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-bold text-dark me-2 mb-2 mb-sm-0 text-decoration-none">
                Contact Our Team
              </Link>
              <Link to="/donate" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-bold text-decoration-none">
                Support Conservation
              </Link>
            </div>
          </div>
        </div> */}

        {/* Footer Columns */}
        <div className="row g-4 mb-5">
          {/* Org Info */}
          <div className="col-lg-4">
            <div className="mb-3">
              <div className="bg-white p-2 rounded-3 d-inline-block shadow-sm">
                <img
                  src="/assets/images/logos/padic-africa-logo.png"
                  alt="PADIC - AFRICA"
                  style={{ maxHeight: "45px", width: "auto", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white text-uppercase tracking-wider fs-7 fw-bold mb-3">Organization</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 fs-6">
              <li><Link to="/about" className="text-white-50 text-decoration-none">About Us</Link></li>
              <li><Link to="/projects" className="text-white-50 text-decoration-none">Our Projects</Link></li>
              <li><Link to="/our-success-story" className="text-white-50 text-decoration-none">Rhoko Success Story</Link></li>
              <li><Link to="/blog" className="text-white-50 text-decoration-none">Field News</Link></li>
              <li><Link to="/donate" className="text-white-50 text-decoration-none">Support &amp; Donate</Link></li>
            </ul>
          </div>

          {/* Conservation Landscapes */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white text-uppercase tracking-wider fs-7 fw-bold mb-3">Focus Landscapes</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 fs-6 text-white-50">
              <li>Afi Mountain Sanctuary</li>
              <li>Rhoko Forest (Iko-Esai)</li>
              <li>Ekuri / Okpon Forest Bloc</li>
              <li>Edondon Agroforestry</li>
              <li>Cross River National Park</li>
            </ul>
          </div>

          {/* Offices & Contacts */}
          <div className="col-lg-4">
            <h6 className="text-white text-uppercase tracking-wider fs-7 fw-bold mb-3">Offices &amp; Contact</h6>
            <div className="d-flex flex-column gap-3 text-white-50 fs-6">
              <div className="d-flex align-items-start gap-2">
                <iconify-icon icon="lucide:map-pin" className="fs-5 text-primary flex-shrink-0 mt-1"></iconify-icon>
                <span><strong>Calabar Office:</strong> Onyx Plaza, 24 Ediba Road, Calabar, Cross River State, Nigeria</span>
              </div>
              <div className="d-flex align-items-start gap-2">
                <iconify-icon icon="lucide:home" className="fs-5 text-primary flex-shrink-0 mt-1"></iconify-icon>
                <span><strong>Field Headquarters:</strong> Edondon Community, Obubra LGA, Cross River State</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <iconify-icon icon="lucide:phone" className="fs-5 text-primary flex-shrink-0"></iconify-icon>
                <span>+234 705 333 4505 / +234 806 359 7723</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <iconify-icon icon="lucide:mail" className="fs-5 text-primary flex-shrink-0"></iconify-icon>
                <span>info@padicafrica.com / devcon2k1@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column align-items-center gap-3 fs-7 text-white-50">

          &copy; {new Date().getFullYear()} PADIC-Africa All rights reserved.

        </div>
      </div>
    </footer>
  );
}
