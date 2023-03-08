import styled from "styled-components";
import bg_desktop from "../../assets/crew/background-crew-desktop.jpg";

export const WrapperCrew = styled.div`
  background-image: url(${bg_desktop});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;

  span {
    opacity: 0.25;
    padding-right: 15px;
  }

  .swiper_crew {
    width: 100%;
  }

  .slide_crew {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .crew_content {
    width: 48%;
    padding-bottom: 20%;
  }

  .crew_heading {
    padding: 15px 0 27px;
  }

  .crew_img {
    width: fit-content;
  }

  @media (max-width:1600px) {
    .crew_content{
      width: 52%;
      margin-right: 5%;
    }
  }
`;
