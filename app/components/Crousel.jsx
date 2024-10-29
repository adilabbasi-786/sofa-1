"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { URL } from "../Utils";
import { Link } from "react-router-dom";
const Crousel = ({ data }) => {
  const Swiperdata = data?.slider.map((each) => ({
    Title: each.title,
    Description: each.description,
    Img: `${URL}${each?.image?.data?.attributes?.url}`,
  }));
  return (
    <>
      <section id="shero" class="hero section light-background">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {Swiperdata.map((data) => (
            <SwiperSlide key={data.Title}>
              <div style={{ height: "450px" }} className="hero-img">
                <img src={data.Img} alt="" />
                <div class="carousel-container">
                  <h2>{data.Title}</h2>
                  <p>{data.Description}</p>
                  <a href="" class="btn-get-started">
                    Contact Us
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div class="featured container">
          <div class="row gy-4">
            <div
              class="col-lg-3 d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="featured-item position-relative">
                <h4>
                  <a href="" class="stretched-link">
                    Order today, delivered tomorrow.
                  </a>
                </h4>
                <p>Transform your living room in 24 hours.</p>
              </div>
            </div>

            <div
              class="col-lg-3 d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="featured-item position-relative">
                <h4>
                  <a href="" class="stretched-link">
                    Money Back Guarantee.
                  </a>
                </h4>
                <p>Free returns on all orders.</p>
              </div>
            </div>

            <div
              class="col-lg-3 d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="featured-item position-relative">
                <h4>
                  <a href="" class="stretched-link">
                    Recycle Your Sofa.
                  </a>
                </h4>
                <p>We will take away your old sofa on delivery date.</p>
              </div>
            </div>

            <div
              class="col-lg-3 d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="featured-item position-relative">
                <h4>
                  <a href="" class="stretched-link">
                    Spread The Cost.
                  </a>
                </h4>
                <p>Flexible finance options available, including 0%.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crousel;
