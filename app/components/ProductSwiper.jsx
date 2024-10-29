"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { URL } from "../Utils";

const ProductSwiper = ({ product, selectedColor }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Function to handle the zoom toggle on click
  const handleZoomClick = (e) => {
    e.preventDefault();
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        Zoom={true}
        thumbs={{ swiper: null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product?.attributes?.images
          ?.filter((image) => {
            if (!selectedColor) return true;
            return image.color === selectedColor.split(":::")[1];
          })
          ?.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`swiper-image-container ${isZoomed ? "zoomed" : ""}`}
                style={{
                  overflow: "hidden",
                  cursor: isZoomed ? "zoom-out" : "zoom-in",
                }}
                onClick={handleZoomClick}
              >
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    transition: "transform 0.3s ease",
                  }}
                  src={`${URL}${image?.images?.data?.[0]?.attributes?.url}`}
                  alt={product.attributes?.title}
                  className="swiper-image"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <style jsx>{`
        .swiper-image-container {
          overflow: hidden;
        }

        .swiper-image-container img {
          transition: transform 0.3s ease;
        }

        .swiper-image-container:not(.zoomed) img:hover {
          transform: scale(1.1); /* Zoom on hover */
        }

        .swiper-image-container.zoomed img {
          transform: scale(2); /* 100% zoom on click */
          cursor: zoom-out;
        }

        .swiper-image-container:not(.zoomed) {
          cursor: zoom-in;
        }
      `}</style>
    </div>
  );
};

export default ProductSwiper;
