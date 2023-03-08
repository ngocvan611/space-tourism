import styled from "styled-components";
import bg_desktop from "../../assets/home/background-home-desktop.jpg";

export const WrapperHome = styled.div`
  background-image: url(${bg_desktop});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;

  .home_content {
    width: 45%;
  }

  .home_heading {
    padding: 24px 0;
  }

  .home_explore {
    width: fit-content;
    cursor: pointer;

    &:hover img {
      border: 88px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: all 0.3s ease-out;
    }
  }
`;
