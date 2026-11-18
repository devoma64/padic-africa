import { Link } from "react-router-dom";
import { pricingData } from "../../data/pricingData";

export default function PricingSection() {
  return (
    <section className="pricing-section py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2">
                <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium" style={{ width: "36px", height: "36px" }}>
                  07
                </span>
                <hr className="border-line flex-grow-1" />
                <span className="badge text-bg-dark">Investment</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="d-flex flex-column gap-3">
                <h2 className="mb-0 display-6 fw-bold">Affordable pricing</h2>
                <p className="fs-5 text-muted mb-0">
                  Transparent packages engineered for early-stage ventures and enterprise teams alike.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 align-items-stretch">
            {pricingData.map((plan, idx) => (
              <div key={idx} className="col-lg-4">
                <div className={`card h-100 p-4 p-xl-5 rounded-4 border-0 shadow-sm d-flex flex-column justify-content-between ${plan.highlighted ? "border-top border-4 border-primary bg-white" : "bg-white"}`}>
                  <div>
                    {plan.highlighted && (
                      <span className="badge bg-primary text-dark mb-3 px-3 py-2 fs-7 fw-bold">
                        Most Popular
                      </span>
                    )}
                    <h4 className="fw-bold mb-2">{plan.name}</h4>
                    <p className="text-muted fs-7 mb-4">{plan.description}</p>
                    <div className="d-flex align-items-baseline gap-1 mb-4">
                      <span className="display-5 fw-bold text-dark">{plan.price}</span>
                      <span className="text-muted fs-6">{plan.period}</span>
                    </div>

                    <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="d-flex align-items-center gap-3 fs-6">
                          <iconify-icon icon="lucide:check" className="text-primary fs-5"></iconify-icon>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`btn py-3 rounded-pill fw-bold text-center text-decoration-none ${plan.highlighted ? "btn-primary text-dark" : "btn-dark text-white"}`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
