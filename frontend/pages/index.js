import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
import Link from "next/link";

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    user-select: none;
    box-sizing: border-box;
  }
`;

export default function IndexPage() {
  const click = () => {
    console.log("hello another world");
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Games list</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper>
        <H1 style={{ width: "200px" }}>Favourite games</H1>
        <List>
          {[1, 2, 3, 4, 5].map((a) => (
            <Item key={a}>{a}</Item>
          ))}
        </List>
      </Wrapper>
    </>
  );
}

const H1 = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const List = styled.div`
  display: grid;
  width: 1000px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;
`;

const Item = styled.div``;
