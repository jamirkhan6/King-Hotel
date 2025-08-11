import React from "react";
import "./SwiperSlide.css";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MySwiper = () => {
  const slidesData = [
    {
      title: "Discover your dream stay",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dignissimos. Porro magni, magnam velit saepe consequuntur quae ipsa laboriosam neque vero libero voluptates",
      image: "./img/bannar1.jpg",
    },
    {
      title: "Adventure Awaits",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dignissimos. Porro magni, magnam velit saepe consequuntur quae ipsa laboriosam neque vero libero voluptates",
      image: "./img/bannar2.jpg",
    },
    {
      title: "Relax & Recharge",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dignissimos. Porro magni, magnam velit saepe consequuntur quae ipsa laboriosam neque vero libero voluptates",
      image: "./img/bannar3.jpg",
    },
    {
      title: "Your Perfect Getaway",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dignissimos. Porro magni, magnam velit saepe consequuntur quae ipsa laboriosam neque vero libero voluptates",
      image: "./img/bannar4.png",
    },
  ];

  return (
    <div className="my-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="absolute top-2/5 left-[80px] w-1/3">
              <h1 className="text-5xl text-[#90e0ef] font-bold">
                {slide.title}
              </h1>
              <p className="text-md mt-3 text-[#d8d8d8]">{slide.description}</p>
              <button className="py-2 px-4 text-black rounded-xl font-semibold bg-[#e9c46a] mt-8">
                Discover More
              </button>
            </div>
            <img
              className="w-full h-full object-cover"
              src={slide.image}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
