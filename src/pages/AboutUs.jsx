import BannerInner from "../components/common/BannerInner";
import { teamData } from "../data/teamData";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const components = [
    {
      title: "Sustainable forest management",
      icon: "lucide:trees",
      number: "01",
      description:
        "Sustainable forest management component with focus on community land use and forest management planning by clarifying land use zones for sustainable land/forest management and developing by-laws for effective rule enforcement; as well as developing community nurseries and regenerating degraded forest sites with indigenous tree species."
    },
    {
      title: "Ecotourism/community tourism",
      icon: "lucide:compass",
      number: "02",
      description:
        "Ecotourism/community tourism component to improve forest value and create opportunity for education, leisure, and income for the community and others from outside."
    },
    {
      title: "Livelihoods component",
      icon: "lucide:coins",
      number: "03",
      description:
        "Livelihoods component with focus on improving agricultural and forest products value chains e.g. cocoa, cassava, bush mango etc. to address the food and income needs of communities including youth, men, and women, without undermining other ecosystem services. DEVCON Multi-purpose Cooperative Society support small scale business owners and rural farmers through capacity building and small loan facilities to enhance their businesses and farm productivity."
    },
    {
      title: "Institutional organizing component",
      icon: "lucide:landmark",
      number: "04",
      description:
        "Institutional organizing component that supports capacity building for local communities and facilitates linkages with and between relevant government institutions to sustain conservation outcomes from DEVCON’s work."
    }
  ];

  return (
    <>
      <BannerInner title="About Us" breadcrumb="Organisational Profile" bgImage="/assets/images/backgrounds/aboutus-banner.jpg" />

      {/* Organisational Profile Section */}
      <section className="py-5 py-lg-11 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              {/* Header Badge & Title */}
              <div className="mb-4">
                <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">
                  Organisational Profile
                </span>
                <h2 className="display-5 fw-bold text-dark font-serif mb-4">
                  Organisational Profile
                </h2>
              </div>

              {/* Profile Paragraphs */}
              <div className="profile-text fs-5 text-dark lh-lg d-flex flex-column gap-4 mb-5">
                <p className="mb-0">
                  We are a registered charity organisation with over 20 years of experience working with rural communities in Cross River State of Nigeria. Cross River State is largely agrarian and forest dependent with highly vulnerable rural populations exposed to degraded natural resource base exacerbated by poverty, disadvantaged economy, social exclusion, limited knowledge and very low capacity to influence and/or adapt to environmental and/or socio economic shifts. DEVCON positions itself to respond to these challenges to build social and environmental resilience while improving the living conditions of rural/peasant communities.
                </p>

                <p className="mb-0">
                  DEVCON works in forest dependent communities in Cross River State, reaching out to over 35,000 people. These communities include those in Afi forest area and the Ekuri/Iko/Okpon forest bloc. DEVCON is directly working with these communities to protect at least 80,000ha of community-managed pristine forest. These sites are critical as habitats to endemic species of plants and animals, some of them identified as endangered. These community-managed forests are also contiguous with protected areas (National Park, Forestry Reserve, and Wildlife Sanctuary) in Cross River State and so provide the very important buffer and corridors for wildlife.
                </p>

                <div className="p-4 rounded-4 bg-light border-start border-4 border-primary">
                  <p className="mb-0 fs-5 fw-semibold text-dark font-sans">
                    In the past 5 years especially DEVCON has intensified its response to deforestation and forest degradation through large-scale support for community forestry, livelihoods improvement, and policy influence. DEVCON focuses on four components as follows:
                  </p>
                </div>
              </div>

              {/* Four Focus Components */}
              <div className="row g-4 mb-5">
                {components.map((item, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="card border-0 shadow-sm p-4 p-xl-5 rounded-4 h-100 bg-white border-top border-4 border-primary">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="round-45 rounded-circle bg-light text-primary d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                          <iconify-icon icon={item.icon} className="fs-5 text-primary"></iconify-icon>
                        </span>
                        <span className="fs-6 fw-bold text-muted font-serif">{item.number}</span>
                      </div>
                      <h4 className="fw-bold text-dark font-serif mb-3 fs-5">
                        {item.title}
                      </h4>
                      <p className="text-muted fs-6 mb-0 lh-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Highlights Metrics */}
              <div className="row g-3 py-4 px-3 rounded-4 bg-light border text-center mb-5">
                <div className="col-md-4">
                  <h3 className="display-6 fw-bold text-primary font-serif mb-1">20+</h3>
                  <span className="text-muted fs-7 fw-semibold text-uppercase">Years of Experience</span>
                </div>
                <div className="col-md-4">
                  <h3 className="display-6 fw-bold text-primary font-serif mb-1">35,000+</h3>
                  <span className="text-muted fs-7 fw-semibold text-uppercase">People Reached</span>
                </div>
                <div className="col-md-4">
                  <h3 className="display-6 fw-bold text-primary font-serif mb-1">80,000 ha</h3>
                  <span className="text-muted fs-7 fw-semibold text-uppercase">Pristine Forest Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Banner */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="p-4 p-xl-5 rounded-4 bg-white bg-opacity-5 border border-white border-opacity-10 h-100">
                <span className="badge bg-primary text-white mb-3">Our Vision</span>
                <h3 className="fw-bold font-serif mb-3 text-white">
                  "To see a physically and environmentally healthy society with sustained economy."
                </h3>
                <p className="text-white text-opacity-75 fs-6 mb-0">
                  A society where community prosperity and rainforest biodiversity exist in enduring harmony.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="p-4 p-xl-5 rounded-4 bg-primary text-white h-100">
                <span className="badge bg-white text-dark mb-3">Our Mission</span>
                <h3 className="fw-bold font-serif mb-3 text-white">
                  "Enhancing Holistic Community Development through Participatory Action."
                </h3>
                <p className="text-white text-opacity-90 fs-6 mb-0">
                  Empowering rural and forest-dependent communities with sustainable resource governance and economic alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-5 py-lg-11 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Leadership</span>
            <h2 className="display-5 fw-bold mb-2 font-serif">Executive Leadership &amp; Field Leads</h2>
            <p className="fs-5 text-muted mb-0">Grassroots conservation leaders dedicated to Cross River State communities.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {teamData.map((m, idx) => (
              <div key={idx} className="col-sm-6 col-lg-3">
                <div className="card border-0 shadow-sm overflow-hidden h-100 rounded-4 bg-white text-center">
                  <div style={{ height: "260px" }} className="overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-1 font-sans">{m.name}</h5>
                    <p className="text-primary fs-7 fw-semibold mb-2">{m.role}</p>
                    <p className="text-muted fs-8 mb-0">{m.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-5">
            <Link to="/contact" className="btn btn-primary px-5 py-3 rounded-pill fw-bold text-white shadow text-decoration-none">
              Get In Touch With Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
