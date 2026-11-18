import { impactStats } from "../../data/impactStats";

export default function StatsSection() {
  return (
    <section id="stats-section" className="stats-facts py-5 py-lg-11" style={{ background: "linear-gradient(180deg, #F8FAF7 0%, #EFF5F0 100%)" }}>
      <div className="container">
        <div className="row mb-5 align-items-end justify-content-between g-4">
          <div className="col-lg-7">
            <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Quantifiable Impact</span>
            <h2 className="display-5 fw-bold text-dark mb-2">Two Decades of Field-Verified Conservation</h2>
            <p className="fs-5 text-muted mb-0">
              Grassroots community action that balances biodiversity protection with direct household economic prosperity.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <div className="d-inline-flex align-items-center gap-2 bg-white px-3 py-2 rounded-pill shadow-sm border">
              <span className="round-10 rounded-circle bg-success d-inline-block" style={{ width: "10px", height: "10px" }}></span>
              <span className="fs-7 fw-bold text-dark">Active Field Operations in 16 Communities</span>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {impactStats.map((item, idx) => (
            <div key={idx} className="col-sm-6 col-lg-3">
              <div
                className="card border-0 rounded-4 p-4 p-xl-5 h-100 bg-white"
                style={{
                  borderTop: "5px solid #155D27 !important",
                  boxShadow: "0 10px 25px -5px rgba(21, 93, 39, 0.08)"
                }}
              >
                <span className="display-4 fw-bold text-primary mb-1 d-block font-serif">{item.metric}</span>
                <span className="badge bg-light text-dark border mb-3 w-fit fs-8 fw-bold">{item.unit}</span>
                <h5 className="fw-bold mb-2 text-dark font-sans">{item.label}</h5>
                <p className="text-muted fs-7 mb-0 lh-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
