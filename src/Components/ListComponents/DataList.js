import React from "react";
import PropTypes from "prop-types";

import Feedback from "./Feedback";
import Rate from "./Rate";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DataList.css";

function DataList({ data, component }) {
  return (
    <Swiper
      autoplay={
        component === "Rate"
          ? {
              delay: 5000000,
              disableOnInteraction: false,
            }
          : {
              delay: 5000,
              disableOnInteraction: false,
            }
      }
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {component === "Rate"
        ? data.map((rate) => (
            <SwiperSlide key={rate.id}>
              <Rate rate={rate} />
            </SwiperSlide>
          ))
        : data.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <Feedback feedback={feedback} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}

DataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.string.isRequired,
};

export default DataList;
