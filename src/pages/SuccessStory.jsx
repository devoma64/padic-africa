import { useState } from "react";
import BannerInner from "../components/common/BannerInner";
import { Link } from "react-router-dom";

export default function SuccessStory() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const sections = [
    {
      title: "1. Baseline Context: Iko-Esai & The 20,000-Hectare Rhoko Primate Camp",
      icon: "lucide:trees",
      content: (
        <div>
          <p>
            Iko-Esai community is an agrarian, forest-dependent settlement situated in Akamkpa Local Government Area of Cross River State, Nigeria. The community encompasses approximately <strong>20,000 hectares of pristine primary tropical rainforest</strong>, serving as a critical biological corridor connecting the Oban Division of Cross River National Park with the Afi Mountain Wildlife Sanctuary.
          </p>
          <p>
            This forest is globally recognized for harboring endangered IUCN Red List species, notably the <strong>drill monkey (Mandrillus leucophaeus)</strong>, the <strong>Nigeria-Cameroon chimpanzee (Pan troglodytes ellioti)</strong>, Preuss's red colobus, and transient troops of the critically endangered <strong>Cross River gorilla</strong>.
          </p>
          <p className="mb-0">
            Historically, external illegal timber merchants and commercial poachers exploited rural poverty to clear timber and set indiscriminate wire snares. PADIC-Africa partnered with the community through support from the <strong>Critical Ecosystem Partnership Fund (CEPF)</strong> to establish an enduring, community-owned conservation sanctuary centered around Rhoko Primate Camp.
          </p>
        </div>
      )
    },
    {
      title: "2. Community Institutional Governance: Esai Conservation Organisation (ECO)",
      icon: "lucide:shield",
      content: (
        <div>
          <p>
            Real conservation cannot be achieved through top-down enforcement. PADIC-Africa facilitated the democratic formation and formal registration of the <strong>Esai Conservation Organisation (ECO)</strong> as the legitimate community management authority.
          </p>
          <ul>
            <li><strong>Customary Forest By-Laws:</strong> Enacted community-wide laws banning farming, chainsaw logging, and commercial hunting within the 20,000-hectare Rhoko core reserve.</li>
            <li><strong>Community Patrol Mandate:</strong> Appointed indigenous youth as official community Eco-Guards equipped with GPS units and patrol allowances.</li>
            <li><strong>Boundary Demarcation:</strong> Surveyed and physically demarcated the boundary between agricultural community farmland and protected biodiversity corridors.</li>
          </ul>
        </div>
      )
    },
    {
      title: "3. Forest Business Development: Bush Mango & Tree-Friendly Beekeeping",
      icon: "lucide:sprout",
      content: (
        <div>
          <p>
            To eliminate the economic temptation of illegal timber sales, PADIC-Africa introduced high-value sustainable agroforestry enterprises:
          </p>
          <ul>
            <li><strong>Bush Mango (Irvingia gabonensis) Orchards:</strong> Provided farmers with high-yield, early-maturing bush mango seedlings. One hectare of cultivated bush mango generates an average annual household income of <strong>₦1,500,000 (~$4,200 USD)</strong>.</li>
            <li><strong>Modern Apiculture (Beekeeping):</strong> Installed modern top-bar beehives along the forest periphery. Honey harvesting provides eco-guards with seasonal revenue while bees deter crop-raiding wildlife naturally.</li>
            <li><strong>Microcredit Access:</strong> Through the DEVCON Multi-purpose Cooperative, smallholder farmers access micro-loans to purchase processing tools and seedlings.</li>
          </ul>
        </div>
      )
    },
    {
      title: "4. Women's Livelihood Transformation: Semi-Mechanized Cassava Garri Processing",
      icon: "lucide:cog",
      content: (
        <div>
          <p>
            In Iko-Esai, women shoulder the heaviest burdens of rural food processing. Previously, preparing cassava garri required up to <strong>three days of backbreaking manual labor per basin</strong> (manual peeling, grating, sack-pressing, and open-fire frying).
          </p>
          <p>
            PADIC-Africa financed and installed modern <strong>semi-mechanized cassava processing equipment</strong>, including automated mechanical graters, hydraulic de-watering presses, and ergonomic roasting bays:
          </p>
          <div className="row g-3 my-3">
            <div className="col-md-6">
              <div className="p-3 rounded-3 bg-light border">
                <span className="text-muted d-block fs-8">Processing Capacity</span>
                <strong className="fs-5 text-dark">5 Basins / Day</strong>
                <span className="text-muted d-block fs-8">Up from 1 basin every 3 days</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 rounded-3 bg-light border">
                <span className="text-muted d-block fs-8">Gross Women Revenue</span>
                <strong className="fs-5 text-primary">₦1,500,000+ / Year</strong>
                <span className="text-muted d-block fs-8">Direct community cooperative income</span>
              </div>
            </div>
          </div>
          <p className="mb-0">
            This technological leap liberated hundreds of hours for rural women, financed children's higher education, and established women as powerful advocates for forest preservation.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <BannerInner title="Our Success Story" breadcrumb="Rhoko Forest Action" />

      <section className="py-5 py-lg-11">
        <div className="container">
          {/* Overview Card */}
          <div className="p-4 p-lg-5 rounded-4 bg-light border mb-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-2">CEPF Flagship Program</span>
                <h2 className="display-6 fw-bold mb-3">Securing 20,000 Hectares of Primate Habitat Through Community Action</h2>
                <p className="fs-5 text-muted mb-0">
                  How the partnership between PADIC-Africa, the Critical Ecosystem Partnership Fund (CEPF), and the Iko-Esai community established Nigeria's premier community-managed rainforest sanctuary.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link to="/contact" className="btn btn-primary px-4 py-3 rounded-pill fw-bold text-white text-decoration-none shadow">
                  Partner On Similar Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Accordion Sections */}
          <div className="d-flex flex-column gap-3 mb-5">
            {sections.map((sec, idx) => (
              <div key={idx} className="border rounded-4 bg-white shadow-sm overflow-hidden">
                <button
                  type="button"
                  className="w-100 p-4 border-0 bg-transparent text-start d-flex justify-content-between align-items-center gap-3 text-dark fw-bold fs-5"
                  onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span className="round-40 rounded-circle bg-light text-primary d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                      <iconify-icon icon={sec.icon} className="fs-5 text-primary"></iconify-icon>
                    </span>
                    <span>{sec.title}</span>
                  </div>
                  <iconify-icon
                    icon={activeAccordion === idx ? "lucide:chevron-up" : "lucide:chevron-down"}
                    className="fs-5 text-primary flex-shrink-0"
                  ></iconify-icon>
                </button>
                {activeAccordion === idx && (
                  <div className="p-4 pt-0 border-top mt-2 text-muted fs-6 lh-lg">
                    {sec.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Next Steps / CTA */}
          <div className="text-center pt-3">
            <h4 className="fw-bold mb-3">Want to scale this model to more forest communities?</h4>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/donate" className="btn btn-primary px-5 py-3 rounded-pill fw-bold text-white">
                Support Community Conservation
              </Link>
              <Link to="/projects" className="btn btn-outline-dark px-5 py-3 rounded-pill fw-bold">
                Review Other Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
