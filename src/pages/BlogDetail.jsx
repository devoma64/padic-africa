import { useParams, Link } from "react-router-dom";
import BannerInner from "../components/common/BannerInner";
import { blogData } from "../data/blogData";

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === id) || blogData[0];

  return (
    <>
      <BannerInner title={post.title} breadcrumb={`Blog / ${post.title}`} />

      <section className="blog-detail py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="max-w-800 mx-auto">
            <div className="mb-4">
              <Link to="/blog" className="btn btn-outline-dark rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2">
                <iconify-icon icon="lucide:arrow-left" className="fs-6"></iconify-icon>
                Back to Blog
              </Link>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4">
              <img
                src={post.authorImg}
                alt={post.author}
                className="rounded-circle"
                width="50"
                height="50"
              />
              <div>
                <h6 className="mb-0 fw-bold">{post.author}</h6>
                <small className="text-muted">{post.authorRole} &bull; {post.date} &bull; {post.readTime}</small>
              </div>
            </div>

            <div className="rounded-4 overflow-hidden shadow-sm mb-5" style={{ maxHeight: "450px" }}>
              <img
                src={post.image}
                alt={post.title}
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <div className="article-body fs-5 lh-lg text-dark">
              <p className="lead fw-normal text-muted mb-4">{post.summary}</p>
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-4 bg-light mt-5 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div>
                <h6 className="mb-1 fw-bold">Share this article</h6>
                <small className="text-muted">Spread the insight across your network</small>
              </div>
              <div className="hstack gap-2">
                <a href="#!" className="btn btn-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px" }}>
                  <iconify-icon icon="lucide:twitter" className="fs-6"></iconify-icon>
                </a>
                <a href="#!" className="btn btn-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px" }}>
                  <iconify-icon icon="lucide:linkedin" className="fs-6"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
