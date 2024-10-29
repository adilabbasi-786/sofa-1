import axios from "axios";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { URL } from "@/app/Utils";
import ProductSwiper from "@/app/components/ProductSwiper";
import ProductDescription from "./ProductDesc";
import ProductCard from "@/app/components/ProductCard";

const ProductDetail = async (props) => {
  const { prodId } = props.params;

  const response = await axios.get(
    `${URL}/api/products?filters[slug]=${prodId}&populate[images][populate]=*&populate[dimentionimage][populate]=*`
  );
  const product = response.data.data[0];
  console.log("priii", product.attributes.images[0].color);

  const { data } = await axios.get(
    `${URL}/api/detail?populate[slider][populate]=*&populate[faqs][populate]=*`
  );

  let colors = new Set();
  let fabrics = new Set();

  product?.attributes?.images?.map((each) => {
    colors.add(`${each.colorhexacode}:::${each.color}`);
    fabrics.add(`${each.fabric}`);
  });
  colors = Array.from(colors);
  fabrics = Array.from(fabrics);
  console.log({ colors, fabrics });

  const whatsppLink = data?.data?.attributes?.whatsapp_url;

  return (
    <>
      <Header data={data?.data.attributes} />
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Product Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">{product?.attributes?.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up">
          {/* Swiper on the left side */}
          {/* <div className="col-lg-6">
              <ProductSwiper product={product} />
            </div> */}

          {/* Product Information on the right side */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <ProductCard
              colors={colors}
              whatsppLink={whatsppLink}
              fabrics={fabrics}
              title={product?.attributes?.title}
              price={`£${product?.attributes?.price}`}
              description={`${product?.attributes?.description?.slice(0, 250)}`}
              product={product}
            />
          </div>
        </div>

        <ProductDescription product={product} />
      </section>

      <Footer data={data?.data.attributes} />
    </>
  );
};

export default ProductDetail;

// Static params for generating product pages
export async function generateStaticParams() {
  const response = await axios.get(`${URL}/api/products`);
  const products = response.data.data;

  return products.map((product) => {
    return {
      prodId: product.attributes.slug,
    };
  });
}
