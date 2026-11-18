import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", inquiryType: "General Partnership", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="get-in-touch py-5 py-lg-11 bg-light" id="contact-form">
      <div className="container">
        <div className="text-center mb-5">
          {/* <span className="badge text-bg-dark mb-2 text-uppercase tracking-wider">Engage With Us</span> */}
          <h2 className="display-6 fw-bold mb-2">Partner With PADIC-Africa</h2>
          <p className="fs-5 text-muted mb-0" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Whether you are a funding institution, environmental researcher, volunteer, or community advocate, let us connect.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card border-0 shadow p-4 p-lg-5 rounded-4 bg-white">
              {submitted ? (
                <div className="alert alert-success p-4 rounded-4 text-center my-4">
                  <iconify-icon icon="lucide:check-circle" className="display-4 text-success mb-3"></iconify-icon>
                  <h4 className="fw-bold">Message sent!</h4>
                  <p className="mb-0">Thank you for reaching out to PADIC-Africa. Our secretariat will review your message and reply promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-bold fs-7">Full Name</label>
                      <input
                        type="text"
                        required
                        className="form-control form-control-lg rounded-3"
                        placeholder="e.g. Marvelous Won / Organization Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold fs-7">Email Address</label>
                      <input
                        type="email"
                        required
                        className="form-control form-control-lg rounded-3"
                        placeholder="contact@organization.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label fw-bold fs-7">Subject</label>
                    <select
                      className="form-select form-select-lg rounded-3"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="Conservation Partnership">Conservation Partnership &amp; Grant Support</option>
                      <option value="Eco-Guard Sponsorship">Eco-Guard Network Support</option>
                      <option value="Agroforestry & Livelihood">Agroforestry &amp; Cassava Processing Expansion</option>
                      <option value="Research & Volunteering">Academic Research &amp; Field Volunteering</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label fw-bold fs-7">Message</label>
                    <textarea
                      required
                      rows="4"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Please describe your organization, program interest, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold text-white shadow">
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
