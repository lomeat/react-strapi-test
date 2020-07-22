import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

export default function IndexPage() {
  const click = () => {
    console.log("hello another world");
  };

  return (
    <>
      <Head>
        <title>Games list</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Button onClick={click}>Click me</Button>
    </>
  );
}

const Button = styled.button`
  background: white;
  border: 3px solid black;
  border-radius: 20px;
  font-size: 40px;
  cursor: pointer;
  padding: 20px;
  outline: none;
  transition: 0.1s ease;
  &:hover {
    background: #eee;
  }
  &:active {
    background: #ccc;
  }
`;
