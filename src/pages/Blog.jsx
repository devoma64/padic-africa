import { Link } from "react-router-dom";
import BannerInner from "../components/common/BannerInner";
import { blogData } from "../data/blogData";

export default function Blog() {
  return (
    <>
      <BannerInner title="Insights & Articles" breadcrumb="Blog" />

      <section className="blog-section py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="row g-4">
            {blogData.map((post) => (
              <div key={post.id} className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                  <div style={{ height: "300px" }} className="overflow-hidden position-relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-primary text-dark fw-bold">
                      {post.category}
                    </span>
                  </div>
                  <div className="card-body p-4 p-xl-5 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center gap-3 text-muted fs-7 mb-2">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="fw-bold mb-3">
                        <Link to={`/blog/${post.id}`} className="text-dark text-decoration-none">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted fs-6 mb-4">{post.summary}</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={post.authorImg}
                          alt={post.author}
                          className="rounded-circle"
                          width="38"
                          height="38"
                        />
                        <div>
                          <p className="mb-0 fw-bold fs-7">{post.author}</p>
                          <small className="text-muted fs-8">{post.authorRole}</small>
                        </div>
                      </div>

                      <Link to={`/blog/${post.id}`} className="btn btn-outline-dark btn-sm rounded-pill px-3">
                        Read Story
                      </Link>
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
