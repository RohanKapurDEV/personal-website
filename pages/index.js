import styled from "styled-components";
import Image from "next/image";

const Bodywrapper = styled.div`
  width: 48rem;
  margin: 0 auto;
  background-color: rebeccapurple;
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
  background-color: red;
  margin-right: 1rem;
`;

export default function Home() {
  return (
    <Bodywrapper>
      <Header>
        <HeaderTitle>👋 Hi, I'm Rohan.</HeaderTitle>
        <HeaderContactBar>
          {/* <Image src="/images/twitter.png" height="20px" width="20px"></Image> */}
        </HeaderContactBar>
      </Header>
    </Bodywrapper>
  );
}
