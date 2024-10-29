"use client";

import { URL } from "@/app/Utils";
import React, { useState } from "react";

export default function ProductDescription({ product }) {
  const dimentionimage =
    product?.attributes?.dimentionimage?.data?.attributes?.url;
  const dimentiondescription = product?.attributes?.dimentiondescription;
  const [active, setActive] = useState("Description");

  return (
    // <div className="row mt-4">
    //   <div className="col-lg-12">
    //     <div className="portfolio-description">
    //       <h3></h3>
    //       <p>{product?.attributes?.description}</p>
    //     </div>
    //   </div>
    // </div>
    <section
      id="faq"
      className="faq section light-background"
      style={{ marginTop: "5%" }}
    >
      {/* <div className="container section-title" data-aos="fade-up">
        <h2>Product Details</h2>
        <p>Everything you need to know.</p>
      </div> */}

      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ marginBottom: "1%" }}>
            <div className="faq-container">
              <div
                onClick={() => {
                  setActive("Description");
                }}
                className={`faq-item ${
                  active === "Description" ? "faq-active" : ""
                }`}
              >
                <h3>Description</h3>
                <div className="faq-content">
                  <p>{product?.attributes?.description}</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-12" style={{ marginBottom: "1%" }}>
            <div className="faq-container">
              <div
                onClick={() => {
                  setActive("Dimention");
                }}
                className={`faq-item ${
                  active === "Dimention" ? "faq-active" : ""
                }`}
              >
                <h3>Dimention</h3>
                <div className="faq-content">
                  <p>{dimentiondescription}</p>

                  <img
                    style={{
                      width: active !== "Dimention" ? "0" : "500px",
                    }}
                    src={`${URL}${dimentionimage}`}
                  />
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
