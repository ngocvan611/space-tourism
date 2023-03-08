import { WrapperDestination } from "./styled";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Mousewheel, Keyboard, FreeMode, Thumbs } from "swiper";
import { Heading, Subheading, Text, Wrapper } from "../../App";
import data from "../../data/data.json";

function Destination() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <WrapperDestination>
      <Wrapper alignItems="start" justifyContent="end" flexDirection="column" height="85%">
        <Subheading
          size="28px"
          lineHeight="34px"
          color="#ffffff"
          className="lt_sp5"
        >
          <span>01</span> PICK YOUR DESTINATION
        </Subheading>

        <div className="destination_pagination">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            // spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="swiper_destination_pagination"
          >
            {data?.destinations.map((items, j) => (
              <SwiperSlide key={j} className="slide_destination_pagination">
                <Subheading
                  size="16px"
                  lineHeight="19px"
                  color="#d0d6f9"
                  className="active_subheading"
                >
                  {items.name}
                </Subheading>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Swiper
          loop={true}
          // spaceBetween={4}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Mousewheel, Keyboard, FreeMode, Thumbs]}
          className="swiper_destination"
        >
          {data?.destinations.map((item, i) => (
            <SwiperSlide key={i} className="slide_destination">
              <div className="destination_img">
                <img
                  src={item.images.png}
                  alt="Destination"
                  width={445}
                  height={445}
                />
              </div>

              <div className="destination_content">
                <Heading size="100px" lineHeight="115px" color="#ffffff">
                  {item.name}
                </Heading>

                <Text className="destination_text">{item.description}</Text>

                <div className="destination_avg_est">
                  <div>
                    <Subheading
                      size="14px"
                      lineHeight="17px"
                      color="#d0d6f9"
                      className="lt_sp3 avg_est"
                    >
                      AVG. DISTANCE
                    </Subheading>

                    <Heading size="28px" lineHeight="32px" color="#ffffff">
                      {item.distance}
                    </Heading>
                  </div>

                  <div>
                    <Subheading
                      size="14px"
                      lineHeight="17px"
                      color="#d0d6f9"
                      className="lt_sp3 avg_est"
                    >
                      EST. TRAVEL TIME
                    </Subheading>

                    <Heading size="28px" lineHeight="32px" color="#ffffff">
                      {item.travel}
                    </Heading>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </WrapperDestination>
  );
}

export default Destination;
