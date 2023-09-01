import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay,EffectCoverflow } from "swiper";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay,EffectCoverflow ]);

export default function Swipers() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8000/blog/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.staysImages);
      });
  }, []);

  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          650: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        style={{height:"600px",padding:"120px 0"}}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {data.length > 0 &&
          data.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}
