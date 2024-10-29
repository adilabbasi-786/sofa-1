import Image from "next/image";
import Head from "next/head";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import { URL } from "./Utils";

export default async function Home(props) {
  const { data } = await axios.get(
    `${URL}/api/detail?populate[slider][populate]=*&populate[faqs][populate]=*`
  );
  const slider = data?.attributes?.slider || [];
  const faqs = data?.attributes?.faqs || [];
  return (
    <>
      <Header data={data?.data.attributes} />
      <Main data={data?.data.attributes} />
      <Footer data={data?.data.attributes} />
    </>
  );
}
