import { Mousewheel, Pagination } from "swiper";
import { Heading, Subheading, Text, Wrapper } from "../../App";
import { WrapperCrew } from "./styled";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../data/data.json";

function Crew() {
  return (
    <WrapperCrew>
      <Wrapper
        alignItems="start"
        justifyContent="end"
        flexDirection="column"
        height="100%"
      >
        <Subheading
          size="28px"
          lineHeight="34px"
          color="#ffffff"
          className="lt_sp5"
        >
          <span>02</span> PICK YOUR DESTINATION
        </Subheading>

        <Swiper
          slidesPerView={1}
        //   spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="swiper_crew"
        >
          {data?.crew.map((item, i) => (
            <SwiperSlide className="slide_crew">
                <div className="crew_content">
                  <Heading
                    size="32px"
                    lineHeight="37px"
                    color="rgba(255,255,255,0.5)"
                  >
                    {item.name}
                  </Heading>

                  <Heading size="56px" lineHeight="64px" color="#ffffff" className="crew_heading">
                    {item.role}
                  </Heading>

                  <Text>{item.bio}</Text>
                </div>

                <div className="crew_img">
                  <img
                    src={item.images.png}
                    alt="Crew"
                    width="100%"
                    height="100%"
                  />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </WrapperCrew>
  );
}

export default Crew;
