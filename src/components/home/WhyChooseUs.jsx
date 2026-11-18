export default function WhyChooseUs() {
  const points = [
    {
      title: "Indigenous Customary Governance",
      desc: "We do not impose outside solutions. We work through traditional councils, community assemblies, and customary by-laws to ensure lasting, voluntary compliance.",
      icon: "lucide:landmark"
    },
    {
      title: "Direct Economic Alternatives",
      desc: "Conservation succeeds when rural families prosper. Our high-yield bush mango orchards and mechanized cassava mills provide reliable income, replacing destructive logging.",
      icon: "lucide:coins"
    },
    {
      title: "Community Eco-Guard Surveillance",
      desc: "Local youths and former hunters are trained and equipped as certified Eco-Guards, maintaining continuous on-the-ground vigilance across critical primate corridors.",
      icon: "lucide:shield-check"
    },
    {
      title: "Verified International Accountability",
      desc: "Over 20 years of continuous grant performance with premier international institutions including Rainforest Rescue, CEPF, GEF SGP, and the United Nations.",
      icon: "lucide:award"
    }
  ];

  return (
    <section className="why-choose-us py-5 py-lg-11">
      <div className="container">
        <div className="row justify-content-between align-items-center g-5">
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              <span className="badge text-bg-dark text-uppercase tracking-wider w-fit">Our Methodology</span>
              <h2 className="display-6 fw-bold">Why Our Community-Led Model Succeeds</h2>
              <p className="fs-5 text-muted mb-4">
                Top-down militarized conservation often alienates forest people. PADIC-Africa empowers indigenous communities as the primary stewards and direct economic beneficiaries of their natural heritage.
              </p>
              <div className="p-4 rounded-4 bg-light border">
                <span className="text-primary fw-bold d-block mb-1">Zero-Deforestation Commitment</span>
                <p className="fs-6 text-muted mb-0">
                  By pairing customary land zoning with lucrative non-timber agroforestry, participating communities have achieved up to an 80% reduction in illegal logging incursions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {points.map((pt, idx) => (
                <div key={idx} className="card border-0 shadow-sm p-4 rounded-4 bg-white">
                  <div className="d-flex align-items-start gap-4">
                    <span className="round-45 rounded-circle bg-light text-primary d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "48px", height: "48px" }}>
                      <iconify-icon icon={pt.icon} className="fs-5 text-primary"></iconify-icon>
                    </span>
                    <div>
                      <h5 className="fw-bold mb-1 text-dark">{pt.title}</h5>
                      <p className="text-muted fs-6 mb-0">{pt.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
