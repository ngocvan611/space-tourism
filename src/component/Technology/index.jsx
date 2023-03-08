import { FreeMode, Keyboard, Mousewheel, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading, Subheading, Text, Wrapper } from "../../App";
import { WrapperTechnology } from "./styled";
import data from "../../data/data.json";
import { useState } from "react";

function Technology() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <WrapperTechnology>
      <Wrapper
        alignItems="start"
        justifyContent="center"
        flexDirection="column"
        height="100%"
      >
        <Subheading
          size="28px"
          lineHeight="34px"
          color="#ffffff"
          className="lt_sp5 technology_title"
        >
          <span>03</span> SPACE LAUNCH 101
        </Subheading>

        <div className="technology">
          <div className="technology_pagination">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              // spaceBetween={10}
              direction={"vertical"}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="swiper_technology_pagination"
            >
              <SwiperSlide className="slide_technology_pagination">
                <Heading
                  size="32px"
                  lineHeight="37px"
                  color="#ffffff"
                  className="active_heading"
                >
                  1
                </Heading>
              </SwiperSlide>

              <SwiperSlide className="slide_technology_pagination">
                <Heading
                  size="32px"
                  lineHeight="37px"
                  color="#ffffff"
                  className="active_heading"
                >
                  2
                </Heading>
              </SwiperSlide>

              <SwiperSlide className="slide_technology_pagination">
                <Heading
                  size="32px"
                  lineHeight="37px"
                  color="#ffffff"
                  className="active_heading"
                >
                  3
                </Heading>
              </SwiperSlide>
            </Swiper>
          </div>

          <Swiper
            loop={true}
            // spaceBetween={30}
            slidesPerView={1}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard, FreeMode, Thumbs]}
            className="swiper_technology"
          >
            {data?.technology.map((item, i) => (
              <SwiperSlide key={i} className="slide_technology">
                <div className="technology_content">
                  <Subheading
                    size="16px"
                    lineHeight="19px"
                    color="#d0d6f9"
                    className="lt_sp3"
                  >
                    THE TECHNOLOGY..
                  </Subheading>

                  <Heading
                    size="56px"
                    lineHeight="64px"
                    color="#ffffff"
                    className="technology_heading"
                  >
                    {item.name}
                  </Heading>

                  <Text>{item.description}</Text>
                </div>

                <div className="technology_img">
                  <img
                    src={item.images.landscape}
                    alt="Technology"
                    width={445}
                    height={445}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </WrapperTechnology>
  );
}

export default Technology;
