import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Floating button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      id="scrollToTopBtn"
      className="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle p-2 d-flex align-items-center justify-content-center shadow-lg"
      style={{
        display: visible ? "flex" : "none",
        width: "50px",
        height: "50px",
        zIndex: 9999,
        border: "none",
        cursor: "pointer"
      }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <iconify-icon icon="lucide:arrow-up" className="fs-6 text-dark"></iconify-icon>
    </button>
  );
}
