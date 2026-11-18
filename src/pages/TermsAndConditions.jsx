import BannerInner from "../components/common/BannerInner";

export default function TermsAndConditions() {
  return (
    <>
      <BannerInner title="Terms & Conditions" breadcrumb="Terms" />

      <section className="py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="max-w-800 mx-auto fs-6 lh-lg text-dark">
            <h3 className="fw-bold mb-3">1. Agreement to Terms</h3>
            <p className="text-muted mb-4">
              By accessing and using our website and services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
            </p>

            <h3 className="fw-bold mb-3">2. Intellectual Property Rights</h3>
            <p className="text-muted mb-4">
              All website content, visual identity assets, source code, designs, and multimedia are the exclusive property of PADIC Africa or licensed from original creators under applicable open-source or commercial terms.
            </p>

            <h3 className="fw-bold mb-3">3. Service Delivery & Scope</h3>
            <p className="text-muted mb-4">
              Project timelines, deliverables, and service scopes are governed by individual master service agreements and statements of work agreed upon prior to project initiation.
            </p>

            <h3 className="fw-bold mb-3">4. Limitation of Liability</h3>
            <p className="text-muted mb-0">
              PADIC Africa shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital products or third-party cloud services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
