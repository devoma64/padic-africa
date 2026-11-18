import { partnersData } from "../../data/partnersData";

export default function PartnersSection() {
  return (
    <section className="partners py-5 bg-white border-top border-bottom">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Global Alliances</span>
          <h2 className="display-6 fw-bold mb-2">Funders &amp; Conservation Partners</h2>
          <p className="fs-5 text-muted mb-0">Working in trusted collaboration with leading international institutions and grantmakers.</p>
        </div>

        <div className="row g-4">
          {partnersData.map((p, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="p-4 rounded-4 bg-light border h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-primary text-white mb-2 fs-8">{p.role}</span>
                  <h5 className="fw-bold text-dark mb-2">{p.name}</h5>
                  <p className="text-muted fs-7 mb-0">{p.focus}</p>
                </div>
                <div className="pt-3 mt-3 border-top d-flex justify-content-between align-items-center text-muted fs-8">
                  <span>Scope: {p.country}</span>
                  <iconify-icon icon="lucide:check-circle" className="text-primary fs-6"></iconify-icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
