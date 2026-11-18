import BannerInner from "../components/common/BannerInner";
import ContactSection from "../components/home/ContactSection";

export default function Contact() {
  return (
    <>
      <BannerInner title="Contact Us" breadcrumb="Contact" />
      {/* 
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-white shadow-sm h-100">
                <iconify-icon icon="lucide:building-2" className="display-6 text-primary mb-3"></iconify-icon>
                <h5 className="fw-bold mb-2">Corporate Office (Calabar)</h5>
                <p className="text-muted fs-6 mb-2">Onyx Plaza, 24 Ediba Road, Calabar, Cross River State, Nigeria</p>
                <small className="text-muted">Headquarters &amp; Administration</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-white shadow-sm h-100">
                <iconify-icon icon="lucide:trees" className="display-6 text-primary mb-3"></iconify-icon>
                <h5 className="fw-bold mb-2">Field Headquarters</h5>
                <p className="text-muted fs-6 mb-2">Edondon Community, Obubra LGA, Cross River State, Nigeria</p>
                <small className="text-muted">Eco-Guard &amp; Nursery Operations</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-white shadow-sm h-100">
                <iconify-icon icon="lucide:phone-call" className="display-6 text-primary mb-3"></iconify-icon>
                <h5 className="fw-bold mb-2">Direct Phone &amp; Email</h5>
                <p className="text-muted fs-6 mb-1">Dr. Martins Egot: <strong>+234 705 333 4505</strong></p>
                <p className="text-muted fs-6 mb-2">Alt: <strong>+234 806 359 7723</strong></p>
                <small className="text-primary fw-bold">info@padicafrica.com</small>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <ContactSection />
    </>
  );
}
