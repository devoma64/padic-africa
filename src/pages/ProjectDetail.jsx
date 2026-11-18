import { useParams, Link } from "react-router-dom";
import BannerInner from "../components/common/BannerInner";
import { projectsData } from "../data/projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  return (
    <>
      <BannerInner title={project.title} breadcrumb={`Projects / ${project.title}`} />

      <section className="py-5 py-lg-11">
        <div className="container">
          <div className="mb-4">
            <Link to="/projects" className="btn btn-outline-dark rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2">
              <iconify-icon icon="lucide:arrow-left" className="fs-6"></iconify-icon>
              Back to All Projects
            </Link>
          </div>

          <div className="row g-5 align-items-start mb-5">
            <div className="col-lg-8">
              <div className="rounded-4 overflow-hidden shadow-sm mb-4" style={{ maxHeight: "450px" }}>
                <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover" />
              </div>
              <h2 className="fw-bold mb-3">{project.title}</h2>
              <p className="lead fs-5 text-muted mb-4">{project.summary}</p>

              <h4 className="fw-bold mb-3">Core Strategic Objectives</h4>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-3 fs-6 text-dark">
                    <iconify-icon icon="lucide:check-circle" className="text-primary fs-5 mt-1 flex-shrink-0"></iconify-icon>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>

              <h4 className="fw-bold mb-3">Key Outcomes &amp; Achievements</h4>
              <div className="p-4 rounded-4 bg-light border text-dark fs-6 lh-lg mb-4">
                {project.achievements}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4 rounded-4 bg-light sticky-top" style={{ top: "100px" }}>
                <h5 className="fw-bold mb-4">Project Information</h5>
                <div className="d-flex flex-column gap-3 fs-6">
                  <div>
                    <span className="text-muted d-block fs-8">Funder / Donor Partner</span>
                    <strong className="text-dark">{project.funder}</strong>
                  </div>
                  <div>
                    <span className="text-muted d-block fs-8">Timeline</span>
                    <strong className="text-dark">{project.period}</strong>
                  </div>
                  <div>
                    <span className="text-muted d-block fs-8">Geographic Location</span>
                    <strong className="text-dark">{project.location}</strong>
                  </div>
                  <div>
                    <span className="text-muted d-block fs-8">Thematic Category</span>
                    <span className="badge bg-primary text-white mt-1">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-muted d-block fs-8 mb-1">Tags</span>
                    <div className="hstack gap-2 flex-wrap">
                      {project.tags.map((t, idx) => (
                        <span key={idx} className="badge bg-white text-dark border fs-8">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-top">
                  <Link to="/contact" className="btn btn-primary w-100 py-3 rounded-pill fw-bold text-white text-center text-decoration-none">
                    Support Similar Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
