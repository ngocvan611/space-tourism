import { Heading, Subheading, Text, Wrapper } from "../../App";
import { WrapperHome } from "./styled";
import explore from "../../assets/home/explore.png";

function Home() {
  return (
    <WrapperHome>
      <Wrapper
        alignItems="end"
        justifyContent="space-between"
        flexDirection="row"
        height="80%"
      >
        <div className="home_content">
          <Subheading
            color="#d0d6f9"
            size="28px"
            lineHeight="34px"
            className="lt_sp5"
          >
            SO, YOU WANT TO TRAVEL TO
          </Subheading>

          <Heading
            color="#ffffff"
            size="150px"
            lineHeight="172px"
            className="home_heading"
          >
            SPACE
          </Heading>

          <Text color="#d0d6f9" size="18px" lineHeight="32px">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </div>

        <div className="home_explore">
          <img src={explore} alt="Explore" width={274} height={274} />
        </div>
      </Wrapper>
    </WrapperHome>
  );
}

export default Home;
