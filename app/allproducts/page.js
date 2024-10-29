import React from "react";
import Header from "../components/Header";
import Allproducts from "../components/Allproducts";
import Footer from "../components/Footer";
import { URL } from "../Utils";
import axios from "axios";

const page = async () => {
  const { data } = await axios.get(
    `${URL}/api/detail?populate[slider][populate]=*&populate[faqs][populate]=*`
  );
  return (
    <>
      <Header data={data?.data.attributes} />
      <Allproducts />
      <Footer data={data?.data.attributes} />
    </>
  );
};

export default page;
