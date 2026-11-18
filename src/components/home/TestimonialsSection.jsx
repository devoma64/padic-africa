export default function TestimonialsSection() {
  const voices = [
    {
      quote: "Before the Eco-Guard patrols were formalized, outside timber merchants were cutting down our grandfather trees at night. Today, our community guards have impounded multiple chainsaws and the forest canopy is standing tall.",
      author: "Chief Elder, Afi Buffer Community",
      location: "Afi Mountain Wildlife Sanctuary Corridor"
    },
    {
      quote: "The cassava processing machines installed by PADIC-Africa changed everything for our women cooperative. We used to spend three grueling days peeling and pressing one basin; now we process five basins in a single afternoon.",
      author: "Chairlady, Esai Women Cassava Association",
      location: "Iko-Esai Community, Akamkpa LGA"
    },
    {
      quote: "Cultivating bush mango on our family farm brings in over ₦1.5 million each harvest season. We no longer need to depend on logging contracts to pay our children's school fees.",
      author: "Agroforestry Farmer",
      location: "Edondon Community, Obubra LGA"
    }
  ];

  return (
    <section className="testimonials py-5 py-lg-11 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          {/* <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Community Voices</span> */}
          <h2 className="display-6 fw-bold mb-2">Stories From the Frontline</h2>
          <p className="fs-5 text-muted mb-0">Perspectives from village assemblies, women cooperatives, and indigenous forest rangers.</p>
        </div>

        <div className="row g-4">
          {voices.map((v, idx) => (
            <div key={idx} className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white d-flex flex-column justify-content-between">
                <div className="mb-4">
                  <iconify-icon icon="lucide:quote" className="display-6 text-primary mb-3 opacity-50"></iconify-icon>
                  <p className="fs-6 text-dark fst-italic">"{v.quote}"</p>
                </div>
                <div className="pt-3 border-top">
                  <h6 className="fw-bold mb-1 text-dark">{v.author}</h6>
                  <small className="text-primary fw-semibold">{v.location}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
