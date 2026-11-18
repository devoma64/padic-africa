import { pillarsData } from "../../data/pillarsData";

export default function ServicesSection() {
  return (
    <section className="services py-5 py-lg-11 text-white" id="services" style={{ background: "linear-gradient(180deg, #0B2414 0%, #06140B 100%)", borderTop: "4px solid #155D27" }}>
      <div className="container">
        <div className="mb-5">
          <span className="badge bg-white text-dark mb-2 text-uppercase tracking-wider">Strategic Framework</span>
          <h2 className="display-5 fw-bold text-white mb-2 font-serif">Four Pillars of Community Empowerment</h2>
          <p className="fs-5 text-white text-opacity-75 mb-0 lh-base" style={{ maxWidth: "750px" }}>
            Our integrated approach links ecosystem protection directly to sustainable rural livelihood generation and democratic institutional organizing.
          </p>
        </div>

        <div className="row g-4">
          {pillarsData.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-3">
              <div
                className="card bg-white bg-opacity-5 border border-white border-opacity-10 p-4 p-xl-5 h-100 d-flex flex-column justify-content-between rounded-4 shadow-sm"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <div>
                  <span className="display-4 fw-bold mb-3 d-block font-serif" style={{ color: "#4ADE80" }}>{p.number}</span>
                  <h4 className="text-white fw-bold mb-3 font-sans fs-5">{p.title}</h4>
                  <p className="text-white text-opacity-80 fs-6 mb-4 lh-base">{p.description}</p>
                </div>
                <div className="d-flex flex-wrap gap-2 pt-3 border-top border-white border-opacity-10">
                  {p.highlights.map((h, i) => (
                    <span key={i} className="badge bg-white bg-opacity-10 text-white border border-white border-opacity-15 fs-8">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
