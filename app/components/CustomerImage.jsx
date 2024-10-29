"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const CustomerImage = () => {
  return (
    <>
      {/* <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Customer Images</h2>
          <p>These are images of products, cliked by real customers</p>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href="assets/img/gallery/gallery-3.jpg"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section> */}
    </>
  );
};

export default CustomerImage;
