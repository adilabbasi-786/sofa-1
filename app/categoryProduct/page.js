import React from "react";
import Header from "../components/Header";
import { URL } from "../Utils";
import axios from "axios";
import Footer from "../components/Footer";

const CategoryProducts = async () => {
  const { data } = await axios.get(
    `${URL}/api/detail?populate[slider][populate]=*&populate[faqs][populate]=*`
  );
  return (
    <>
      <Header data={data?.data.attributes} />
      <section id="blog-posts" className="blog-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>All Products</h2>
          <p>These are All products</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <a href="dylansofa.html">
                <article className="position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img
                      // src={`${URL}${prod?.attributes?.SofaImage?.data?.attributes?.url}`}
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="meta d-flex align-items-end">
                    <span className="post-date">4999£</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">prod.attributes.title</h3>
                  </div>
                </article>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer data={data?.data.attributes} />
    </>
  );
};

export default CategoryProducts;
