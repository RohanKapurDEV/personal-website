import styled from "styled-components";
import Image from "next/image";

const Bodywrapper = styled.div`
  width: 48rem;
  margin: 0 auto;
  /* background-color: rebeccapurple; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  margin-left: 1rem;
`;

const HeaderContactBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
  margin-right: 1rem;
`;

const IntroRow = styled.div`
  margin: 0 0 1rem 1rem;
`;

// constZ

export default function Home() {
  return (
    <Bodywrapper>
      <Header>
        <HeaderTitle>👋 Hi, I'm Rohan.</HeaderTitle>
        <HeaderContactBar>
          <Image
            onClick={() => {
              console.log("click");
            }}
            src="/images/twitter.png"
            height="32px"
            width="32px"
          ></Image>
          <div style={{ width: "1rem" }}></div>
          <Image src="/images/gmail.png" height="32px" width="32px"></Image>
        </HeaderContactBar>
      </Header>

      <IntroRow>
        <p>
          I’m an independent software developer thats passionate about the decentralisation of the traditional
          institutions that underpin society. This is why most of the software I work on is to help advance the adoption
          of decentralised money systems. The easiest ways to contact me are by using any of the options available in
          the header.
        </p>
      </IntroRow>
    </Bodywrapper>
  );
}
