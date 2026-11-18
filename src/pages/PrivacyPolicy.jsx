import BannerInner from "../components/common/BannerInner";

export default function PrivacyPolicy() {
  return (
    <>
      <BannerInner title="Privacy Policy" breadcrumb="Privacy" />

      <section className="py-5 py-lg-11 py-xl-12">
        <div className="container">
          <div className="max-w-800 mx-auto fs-6 lh-lg text-dark">
            <h3 className="fw-bold mb-3">1. Information We Collect</h3>
            <p className="text-muted mb-4">
              We collect information you provide directly through our contact and project inquiry forms, including your name, email address, company details, and project objectives.
            </p>

            <h3 className="fw-bold mb-3">2. How We Use Information</h3>
            <p className="text-muted mb-4">
              We utilize collected data solely to deliver client services, coordinate project timelines, communicate proposals, and optimize the performance of our web applications.
            </p>

            <h3 className="fw-bold mb-3">3. Data Protection & Security</h3>
            <p className="text-muted mb-4">
              We apply industry-standard security protocols and encryption to safeguard your confidential business details against unauthorized access, alteration, or disclosure.
            </p>

            <h3 className="fw-bold mb-3">4. Contact Information</h3>
            <p className="text-muted mb-0">
              For any inquiries regarding this policy or data practices, please reach out directly to privacy@padic-africa.com or info@wrappixel.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
