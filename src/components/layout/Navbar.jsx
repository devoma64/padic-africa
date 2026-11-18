import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Projects", to: "/projects" },
    { label: "Success Story", to: "/our-success-story" },
    { label: "News & Blog", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <header
      className={`header border-top border-4 border-primary position-fixed start-0 top-0 w-100 bg-white ${isScrolled ? "fixed-header shadow-sm" : "shadow-xs"
        }`}
      style={{
        zIndex: 1050,
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid rgba(21, 93, 39, 0.1)"
      }}
    >
      <div className="container">
        <div className="header-wrapper d-flex align-items-center justify-content-between py-3">
          {/* Brand Logo & Title (Sharp High-DPI Horizontal Lockup) */}
          <div className="logo">
            <Link to="/" className="d-flex align-items-center gap-3 text-decoration-none">
              <img
                src="/assets/images/logos/padic-emblem.png"
                alt="PADIC-Africa"
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
              <div className="d-flex flex-column justify-content-center">
                <span
                  className="fw-black fs-4 text-dark lh-1 font-sans"
                  style={{
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#0B2816"
                  }}
                >
                  PADIC-Africa
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="d-none d-xl-flex align-items-center gap-4">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className={({ isActive }) =>
                  `fw-semibold fs-6 text-decoration-none transition-colors ${isActive ? "text-primary fw-bold" : "text-dark"
                  }`
                }
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid #155D27" : "2px solid transparent",
                  paddingBottom: "4px"
                })}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              className="btn btn-primary px-4 py-2 rounded-pill fw-bold text-white shadow-sm d-flex align-items-center gap-2 text-decoration-none"
            >
              <iconify-icon icon="lucide:heart-handshake" className="fs-6"></iconify-icon>
              <span>Donate</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="d-flex align-items-center gap-3 d-xl-none">
            <Link
              to="/donate"
              className="btn btn-sm btn-primary px-3 py-2 rounded-pill fw-bold text-white shadow-sm text-decoration-none"
            >
              Donate
            </Link>
            <button
              type="button"
              className="btn btn-light round-45 p-2 d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm border"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{ width: "42px", height: "42px" }}
            >
              <iconify-icon
                icon={isMenuOpen ? "lucide:x" : "solar:hamburger-menu-line-duotone"}
                className="fs-6 text-dark"
              ></iconify-icon>
            </button>
          </div>

          {/* Mobile Drawer */}
          {isMenuOpen && (
            <div
              className="dropdown-menu dropdown-menu-end show p-4 shadow-lg position-absolute end-0 top-100 mt-2 d-xl-none bg-white rounded-4"
              style={{ minWidth: "300px", zIndex: 1100, border: "1px solid #e0e0e0" }}
            >
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                  <span className="fw-bold fs-6 text-dark">Menu Navigation</span>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                  {navItems.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `d-block py-2 px-2 rounded-2 text-decoration-none fw-semibold ${isActive ? "bg-light text-primary fw-bold" : "text-dark"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-top">
                  <Link
                    to="/donate"
                    className="btn btn-primary w-100 py-2 rounded-pill fw-bold text-white text-center text-decoration-none"
                  >
                    Support Our Mission
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
