import styled from "styled-components";
import bg_desktop from "../../assets/destination/background-destination-desktop.jpg";

export const WrapperDestination = styled.div`
  background-image: url(${bg_desktop});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;

  span {
    opacity: 0.25;
    padding-right: 15px;
  }

  .destination_pagination {
    width: 30%;
    padding: 5% 0 0 57%;
  }

  .swiper_destination_pagination {
    width: 100%;
  }

  .swiper-slide-thumb-active.slide_destination_pagination .active_subheading {
    color: #ffffff;
    width: fit-content;
    border-bottom: 3px solid #ffffff;
  }

  .slide_destination_pagination {
    cursor: pointer;
  }

  .active_subheading {
    padding-bottom: 12px;

    &:hover {
      width: fit-content;
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      transition: all 0.1s;
    }
  }

  .swiper_destination {
    width: 90%;
  }

  .slide_destination {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .destination_content {
    width: 42%;
  }

  .destination_text {
    padding: 15px 0 54px;
    border-bottom: 1px solid #383b4b;
  }

  .destination_avg_est {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .avg_est {
    padding: 28px 0 12px;
  }

  @media (max-width: 1600px) {
    .destination_img img {
      width: 90%;
      height: 90%;
    }

    .destination_pagination {
      padding-bottom: 15px;
    }

    .destination_content {
      width: 48%;
    }

    .destination_pagination{
      padding-left: 52%;
    }
  }
`;
