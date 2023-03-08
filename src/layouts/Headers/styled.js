import styled from "styled-components";

export const WrapperHeaders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .logo {
    padding-left: 10%;
  }

  .line {
    height: 1px;
    background-color: #fff;
    opacity: 0.25;
    mix-blend-mode: normal;
    width: 38%;
    position: absolute;
    left: 15%;
    z-index: 9;
  }

  .nav_menu {
    width: 30%;
    padding: 0 12% 0 7%;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav_link {
    display: flex;
    align-items: center;
    padding: 40px 0;

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }

    span {
      font-weight: 700;
      padding-right: 5px;
    }
  }

  .active_link {
    .nav_link {
      border-bottom: 3px solid #fff;
    }
  }

  @media (max-width: 1440px) {
    .logo {
      padding-left: 5%;
    }

    .nav_menu {
      padding: 0 10% 0 7%;
    }

    .line {
      width: 44%;
      left: 12%;
    }
  }

  @media (max-width: 1366px) {
    padding: 25px 0;
    
    .nav_link{
      padding: 25px 0;
    }
  }
`;
