import { Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";

export default function FeaturedProjects() {
  return (
    <section className="featured-projects py-5 py-lg-11 bg-white">
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div>
              <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Our Conservation Programs</span>
              <h2 className="display-5 fw-bold mb-2">Current &amp; Strategic Programs</h2>
              <p className="fs-5 text-muted mb-0">Multi-year participatory initiatives supported by leading global environmental grantmakers.</p>
            </div>
            <Link to="/projects" className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold text-decoration-none">
              View All 6 Programs
            </Link>
          </div>

          <div className="row g-4">
            {projectsData.slice(0, 4).map((project) => (
              <div key={project.id} className="col-md-6">
                <div className="card border-0 shadow-sm overflow-hidden rounded-4 h-100 bg-white">
                  <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover transition-transform"
                      style={{ transition: "transform 0.4s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-primary text-white fw-bold shadow-sm fs-8">
                      {project.category}
                    </span>
                  </div>
                  <div className="card-body p-4 p-xl-5 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center gap-2 text-muted fs-7 mb-2">
                        <iconify-icon icon="lucide:award" className="text-warning fs-6"></iconify-icon>
                        <span>Funder: <strong className="text-dark">{project.funder}</strong></span>
                      </div>
                      <h4 className="fw-bold mb-3 font-serif">
                        <Link to={`/projects/${project.id}`} className="text-dark text-decoration-none">
                          {project.title}
                        </Link>
                      </h4>
                      <p className="text-muted fs-6 mb-4 lh-base">{project.summary}</p>
                    </div>

                    <div>
                      <div className="d-flex align-items-center gap-2 text-muted fs-7 mb-3">
                        <iconify-icon icon="lucide:map-pin" className="text-primary fs-6"></iconify-icon>
                        <span>{project.location}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                        <div className="hstack gap-2 flex-wrap">
                          {project.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="badge bg-light text-dark border fs-8">{t}</span>
                          ))}
                        </div>
                        <Link to={`/projects/${project.id}`} className="btn btn-sm btn-primary rounded-pill px-4 py-2 fw-bold text-decoration-none">
                          Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
