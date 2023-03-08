import styled from "styled-components";

export const Heading = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: 400;
  line-height: ${(props) => props.lineHeight};
  font-style: normal;
  font-family: "Bellefair", serif;
`;

export const Subheading = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: 400;
  line-height: ${(props) => props.lineHeight};
  font-style: normal;
  font-family: "Barlow Condensed", sans-serif;
`;

export const Text = styled.p`
  color: #d0d6f9;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  font-style: normal;
  font-family: "Barlow", sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  width: 62%;
  flex-direction: ${(props) => props.flexDirection}; 
  margin: auto auto;

  @media (max-width: 1600px){
    width: 65%;
  }

  @media (max-width: 1440px){
    width: 75%;
  }

  @media (max-width: 1366px){
    height: ${(props) => props.height === "100%" ?  props.height : `props.height + 5`};
  }

  @media (max-width: 1280px){
    width: 80%;
  }
`;
