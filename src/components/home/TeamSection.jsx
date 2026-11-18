import { teamData } from "../../data/teamData";

export default function TeamSection() {
  return (
    <section className="meet-our-team py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2">
                <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium" style={{ width: "36px", height: "36px" }}>
                  06
                </span>
                <hr className="border-line flex-grow-1" />
                <span className="badge text-bg-dark">The team</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="d-flex flex-column gap-3">
                <h2 className="mb-0 display-6 fw-bold">Meet our team</h2>
                <p className="fs-5 text-muted mb-0">
                  Multidisciplinary designers, strategists, and engineers driven by passion.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {teamData.map((member, idx) => (
              <div key={idx} className="col-sm-6 col-lg-3">
                <div className="card border-0 shadow-sm overflow-hidden h-100 rounded-4">
                  <div style={{ height: "300px" }} className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary fs-7 fw-semibold mb-2">{member.role}</p>
                    <p className="text-muted fs-7 mb-0">{member.bio}</p>
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
