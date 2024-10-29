import React from "react";
import { URL } from "../Utils";
import axios from "axios";
import Link from "next/link";

const Allproducts = async () => {
  const response = await axios.get(`${URL}/api/products?populate=*`);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get(`${URL}/api/products?populate=*`);
  //     setProducts(response.data.data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  return (
    <section id="blog-posts" className="blog-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>All Products</h2>
        <p>These are All products</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {response.data.data.length > 0 ? (
            response.data.data.map((prod) => (
              <div className="col-lg-4" key={prod.id}>
                <a href="dylansofa.html">
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
                        <span className="post-date">
                          {prod.attributes.price}£
                        </span>
                      </div>

                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">{prod.attributes.title}</h3>
                      </div>
                    </article>
                  </Link>
                </a>
              </div>
            ))
          ) : (
            <p>Loading products...</p> // Loading state while fetching data
          )}
        </div>
      </div>
    </section>
  );
};

export default Allproducts;
