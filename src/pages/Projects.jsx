import { useState } from "react";
import { Link } from "react-router-dom";
import BannerInner from "../components/common/BannerInner";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Biodiversity Conservation", "Habitat & Species Conservation", "Climate Resilience & REDD+", "Policy & Environmental Justice", "Sustainable Livelihoods"];

  const filtered = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <>
      <BannerInner title="Projects Implemented" breadcrumb="Our Projects" />

      <section className="py-5 py-lg-11">
        <div className="container">
          {/* Category Filter */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`btn px-4 py-2 rounded-pill fw-semibold fs-7 ${filter === c ? "btn-primary text-white" : "btn-outline-dark"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="row g-4">
            {filtered.map((p) => (
              <div key={p.id} className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm overflow-hidden rounded-4 h-100 bg-white">
                  <div className="position-relative" style={{ height: "300px" }}>
                    <img src={p.image} alt={p.title} className="w-100 h-100 object-fit-cover" />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-primary text-white fw-bold">
                      {p.category}
                    </span>
                  </div>
                  <div className="card-body p-4 p-xl-5 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center gap-2 text-muted fs-7 mb-2">
                        <iconify-icon icon="lucide:award" className="text-primary"></iconify-icon>
                        <span>Funder: <strong>{p.funder}</strong> ({p.period})</span>
                      </div>
                      <h3 className="fw-bold mb-3">
                        <Link to={`/projects/${p.id}`} className="text-dark text-decoration-none">
                          {p.title}
                        </Link>
                      </h3>
                      <p className="text-muted fs-6 mb-4">{p.summary}</p>
                    </div>

                    <div>
                      <div className="d-flex align-items-center gap-2 text-muted fs-7 mb-4">
                        <iconify-icon icon="lucide:map-pin" className="text-primary"></iconify-icon>
                        <span>{p.location}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                        <div className="hstack gap-2 flex-wrap">
                          {p.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="badge bg-light text-dark border fs-8">{t}</span>
                          ))}
                        </div>
                        <Link to={`/projects/${p.id}`} className="btn btn-primary rounded-pill px-4 py-2 fs-7 fw-bold text-white">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
