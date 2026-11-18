import { useState } from "react";
import { faqData } from "../../data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2">
                <span className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium" style={{ width: "36px", height: "36px" }}>
                  08
                </span>
                <hr className="border-line flex-grow-1" />
                <span className="badge text-bg-dark">FAQ</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="d-flex flex-column gap-3">
                <h2 className="mb-0 display-6 fw-bold">Frequently asked questions</h2>
                <p className="fs-5 text-muted mb-0">
                  Quick answers to common questions about our engagement and development processes.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-column gap-3">
                {faqData.map((item, idx) => (
                  <div key={item.id} className="border rounded-4 p-4 shadow-sm bg-white">
                    <button
                      type="button"
                      className="w-100 bg-transparent border-0 d-flex justify-content-between align-items-center text-start p-0 text-dark fw-bold fs-5"
                      onClick={() => toggle(idx)}
                      aria-expanded={openIndex === idx}
                    >
                      <span>{item.question}</span>
                      <iconify-icon
                        icon={openIndex === idx ? "lucide:chevron-up" : "lucide:chevron-down"}
                        className="fs-5 text-primary flex-shrink-0 ms-3"
                      ></iconify-icon>
                    </button>
                    {openIndex === idx && (
                      <div className="pt-3 text-muted fs-6 border-top mt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
