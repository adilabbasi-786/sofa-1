import React from "react";
import Swiper from "swiper";
import Category from "./Category";
import BestSelling from "./BestSelling";
import CustomerImage from "./CustomerImage";
import Crousel from "./Crousel";
import Contact from "./Contact";
import FAQ from "./FAQ";

const Main = ({ data }) => {
  return (
    <main class="main">
      <Crousel data={data} />

      {/* <p style={{ background: "red", width: "100%", height: "20px" }}>hello</p> */}
      <Category />
      <BestSelling />
      <CustomerImage />
      <FAQ data={data} />
      <Contact data={data} />
    </main>
  );
};

export default Main;
