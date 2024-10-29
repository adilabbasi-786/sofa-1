"use client";
import React, { useState } from "react";

const FAQ = ({ data }) => {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {data?.faqs?.map((each, index) => (
                <div
                  onClick={() => {
                    setActive(index);
                  }}
                  className={`faq-item ${active === index ? "faq-active" : ""}`}
                  key={index}
                >
                  <h3>{each.question}</h3>
                  <div className="faq-content">
                    <p>{each.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
