import { Link } from "react-router-dom";
import { blogData } from "../../data/blogData";

export default function RecentNewsSection() {
  return (
    <section className="recent-news py-5 py-lg-11" style={{ background: "linear-gradient(180deg, #F8FAF7 0%, #EFF5F0 100%)" }}>
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div>
              <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Field Dispatches</span>
              <h2 className="display-5 fw-bold mb-2 font-serif">Conservation News &amp; Updates</h2>
              <p className="fs-5 text-muted mb-0">Verified updates on rainforest surveillance, Cocoa Farmer Field Schools, and rural enterprise.</p>
            </div>
            <Link to="/blog" className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold text-decoration-none">
              View All Articles
            </Link>
          </div>

          <div className="row g-4">
            {blogData.slice(0, 3).map((article) => (
              <div key={article.id} className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                  <div style={{ height: "230px" }} className="overflow-hidden position-relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-primary text-white fs-8 fw-bold">
                      {article.category}
                    </span>
                  </div>
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold mb-2 font-serif" style={{ fontSize: "1.2rem", lineHeight: 1.35 }}>
                        <Link to={`/blog/${article.id}`} className="text-dark text-decoration-none">
                          {article.title}
                        </Link>
                      </h5>
                      <p className="text-muted fs-7 mb-4 lh-base">{article.summary}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-3 border-top text-muted fs-8">
                      <span className="d-flex align-items-center gap-1">
                        <iconify-icon icon="lucide:calendar" className="text-primary"></iconify-icon>
                        {article.date}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <iconify-icon icon="lucide:clock" className="text-primary"></iconify-icon>
                        {article.readTime}
                      </span>
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
