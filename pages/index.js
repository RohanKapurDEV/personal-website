import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

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
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 1rem;
`;

const IntroText = styled.div`
  width: 80%;
  /* background-color: red; */
`;

const BuiltWrapper = styled.div`
  margin: 3rem 1rem;
`;

const BlogWrapper = styled.div`
  margin: 3rem 1rem;
`;

const copyToClipboard = () => {
  navigator.clipboard.writeText("kapurrohan56@gmail.com");
  alert("My email has been copied to your clipboard 🤝");
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohan's website</title>
        <meta name="viewport" content="width=initial-scale=1.0, width=device-width" />
      </Head>
      <Bodywrapper>
        <Header>
          <HeaderTitle>👋 Hi, I'm Rohan.</HeaderTitle>
          <HeaderContactBar>
            <Image
              src="/images/twitter.png"
              height="32px"
              width="32px"
              onClick={() => {
                window.location = "https://www.twitter.com/0xrohan";
              }}
            ></Image>
            <div style={{ width: "1rem" }}></div>
            <Image src="/images/gmail.png" height="32px" width="32px" onClick={() => copyToClipboard()}></Image>
          </HeaderContactBar>
        </Header>

        <IntroRow>
          <Image src="/images/me.png" height="150" width="150"></Image>
          <div style={{ width: "1rem" }}></div>
          <IntroText>
            I’m an independent software researcher that's passionate about the decentralisation of the traditional
            institutions that underpin society. This is why most of the software I work on is to help advance the
            adoption of decentralised money systems like Bitcoin. <br></br> <br></br> The easiest ways to contact me are
            by using any of the options available in the header.
          </IntroText>
        </IntroRow>

        <BuiltWrapper>
          <h1>Things I've built:</h1>
          <button
            onClick={() => {}}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              border: "none",
              backgroundColor: "inherit",
              color: "inherit",
              margin: "0",
              padding: "0",
              font: "inherit",
            }}
          >
            Paymint - A bitcoin wallet for Android devices
          </button>
          <p>More here soon ;)</p>
        </BuiltWrapper>

        <BlogWrapper>
          <h1>Writings:</h1>
          <p>Sorry, nothing to see here for now :(</p>
        </BlogWrapper>
      </Bodywrapper>
    </>
  );
}
