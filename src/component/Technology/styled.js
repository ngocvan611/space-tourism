import styled from "styled-components";
import bg_desktop from "../../assets/technology/background-technology-desktop.jpg";

export const WrapperTechnology = styled.div`
  background-image: url(${bg_desktop});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;

  .technology_title {
    padding-top: 8%;
  }

  span {
    opacity: 0.25;
    padding-right: 15px;
  }

  .technology {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 26px;
  }

  .technology_pagination {
    width: 80px;
  }

  .swiper_technology_pagination {
    width: fit-content;
    height: fit-content;
  }

  .slide_technology_pagination {
    width: 80px !important;
    height: 80px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(60, 255, 255, 0.25);
    border-radius: 50%;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      border: 1px solid #ffffff;
    }
  }

  .swiper-slide-thumb-active.slide_technology_pagination {
    background: #ffffff !important;

    .active_heading {
      color: #0b0d17 !important;
    }
  }

  .swiper_technology {
    width: calc(100% - 160px);
    margin-right: 0;
  }

  .slide_technology {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .technology_content {
    width: 50%;
  }

  .technology_heading {
    padding: 11px 0 17px;
  }

  .technology_img {
    width: fit-content;
  }

  @media (max-width: 1600px) {
    .technology_img img{
      width: 350px;
      height: 350px;
    }

    .technology_content {
      width:54%;
    }

    .technology{
      padding-top: 5%;
    }
  }
`;
