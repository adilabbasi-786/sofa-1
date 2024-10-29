import React from "react";
import axios from "axios";
import { URL } from "../Utils";
import Link from "next/link";

const BestSelling = async () => {
  const BestSelling = await axios.get(
    `${URL}/api/products?filters[BestSelling][$eq]=true&populate=*`
  );

  return (
    <section id="best" className="blog-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Best Selling</h2>
        <p>These are the most sold products</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {BestSelling.data.data.length > 0 ? (
            BestSelling.data.data.map((prod, index) => (
              <React.Fragment key={index}>
                <Product prod={prod} />
              </React.Fragment>
            ))
          ) : (
            <p>Loading products...</p> // Loading state while fetching data
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;

function Product({ prod }) {
  let colors = new Set();
  prod.attributes.images?.map((each) => {
    colors.add(each.colorhexacode || "black");
  });
  colors = Array.from(colors);
  console.log({ colors });
  return (
    <>
      <div className="col-lg-4" key={prod.id}>
        <Link href={`/productDetail/${prod.attributes.slug}`}>
          <article className="position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <img
                src={`${URL}${prod?.attributes?.SofaImage?.data?.attributes?.url}`}
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="meta d-flex align-items-end">
              <span className="post-date">£{prod.attributes.price}</span>
            </div>

            <div className="post-content d-flex flex-column">
              <h3 className="post-title">{prod.attributes.title}</h3>
            </div>
            {/* 
            <div
              class="post-content d-flex"
              style={{
                paddingTop: 0,
                flexDirection: "row",
                gap: "5px",
              }}
            >
              {colors?.map((each) => (
                <div
                  key={each}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: each,
                    border: "3px solid #eb5d1f",
                  }}
                ></div>
              ))}
            </div> */}
          </article>
        </Link>
      </div>
    </>
  );
}
