import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
import Link from "next/link";

import { Wrapper } from "../style";

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    user-select: none;
    box-sizing: border-box;
  }
`;

export default function IndexPage() {
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
        <div>
          <h1>Home page</h1>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">Games</Link>
        </div>
      </Wrapper>
    </>
  );
}
