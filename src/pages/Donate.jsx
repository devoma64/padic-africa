import BannerInner from "../components/common/BannerInner";
import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <>
      <BannerInner title="Support Our Mission" breadcrumb="Donate & Partner" />

      <section className="py-5 py-lg-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Invest In Rainforests</span>
                <h2 className="display-6 fw-bold mb-3">Direct Financial &amp; Institutional Support</h2>
                <p className="fs-5 text-muted mb-0" style={{ maxWidth: "750px", margin: "0 auto" }}>
                  100% of non-profit contributions directly fund community Eco-Guard field patrols, indigenous tree seedling nurseries, and women agro-processing cooperatives in Cross River State.
                </p>
              </div>

              <div className="row g-4 mb-5">
                {/* Option 1: Direct Bank Transfer (Nigeria) */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm rounded-4 p-4 p-xl-5 bg-white h-100 border-top border-4 border-primary">
                    <span className="round-45 rounded-circle bg-light text-primary d-flex align-items-center justify-content-center mb-3" style={{ width: "45px", height: "45px" }}>
                      <iconify-icon icon="lucide:building-2" className="fs-5 text-primary"></iconify-icon>
                    </span>
                    <h4 className="fw-bold mb-3">Direct Bank Transfer (Nigeria)</h4>
                    <p className="text-muted fs-6 mb-4">
                      Official non-profit bank account details for direct contributions, institutional grants, and partner transfers:
                    </p>
                    <div className="p-3 rounded-3 bg-light border mb-4 fs-6">
                      <div className="mb-2"><strong>Account Name:</strong> PADIC-AFRICA</div>
                      <div className="mb-2"><strong>Bank Name:</strong> First Bank of Nigeria / Zenith Bank</div>
                      <div className="mb-2"><strong>Account Number:</strong> <em>Contact office for verified wire mandate</em></div>
                      <div><strong>Country:</strong> Nigeria</div>
                    </div>
                    <small className="text-muted">
                      Please send wire remittance receipts to <strong>info@padicafrica.com</strong> for formal acknowledgment.
                    </small>
                  </div>
                </div>

                {/* Option 2: International Grants & Partnerships */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm rounded-4 p-4 p-xl-5 bg-white h-100 border-top border-4 border-dark">
                    <span className="round-45 rounded-circle bg-light text-dark d-flex align-items-center justify-content-center mb-3" style={{ width: "45px", height: "45px" }}>
                      <iconify-icon icon="lucide:globe" className="fs-5 text-dark"></iconify-icon>
                    </span>
                    <h4 className="fw-bold mb-3">Institutional Partnerships &amp; Grants</h4>
                    <p className="text-muted fs-6 mb-4">
                      For bilateral donors, environmental foundations, and international grantmakers seeking collaborative project design:
                    </p>
                    <div className="d-flex flex-column gap-3 mb-4 fs-6">
                      <div className="d-flex align-items-center gap-2">
                        <iconify-icon icon="lucide:check-circle" className="text-primary"></iconify-icon>
                        <span>Rainforest Rescue &amp; CEPF Verified Partner</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <iconify-icon icon="lucide:check-circle" className="text-primary"></iconify-icon>
                        <span>Full Audit &amp; Financial Compliance Records</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <iconify-icon icon="lucide:check-circle" className="text-primary"></iconify-icon>
                        <span>Cross River State Government Endorsement</span>
                      </div>
                    </div>
                    <Link to="/contact" className="btn btn-dark py-3 rounded-pill fw-bold text-center text-decoration-none">
                      Initiate Partnership Inquiry
                    </Link>
                  </div>
                </div>
              </div>

              {/* What Your Contribution Achieves */}
              <div className="card border-0 rounded-4 p-4 p-lg-5 text-white" style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)" }}>
                <h4 className="fw-bold mb-4">What Your Support Powers</h4>
                <div className="row g-4">
                  <div className="col-md-4">
                    <h5 className="fw-bold text-white mb-2">₦50,000 (~$35 USD)</h5>
                    <p className="fs-7 text-white text-opacity-90 mb-0">Equips one community Eco-Guard with field uniform, boots, GPS tracking unit, and patrol rations for one month.</p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="fw-bold text-white mb-2">₦250,000 (~$175 USD)</h5>
                    <p className="fs-7 text-white text-opacity-90 mb-0">Cultivates and transplants 500 indigenous bush mango and hardwood tree seedlings to reforest degraded buffer corridors.</p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="fw-bold text-white mb-2">₦1,000,000 (~$700 USD)</h5>
                    <p className="fs-7 text-white text-opacity-90 mb-0">Provides a rural women cooperative with automated garri processing equipment and micro-enterprise management training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
