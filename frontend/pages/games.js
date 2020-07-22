import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Wrapper } from "../style";
import { Item } from "../components/Item";

export default function GamesPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/games");
      const result = await response.json();
      setGames(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        ></link>
      </Head>
      <Wrapper>
        <div>
          <h1>Favourite games</h1>
          <Link href="/">Home</Link>
        </div>
        <List>
          {games.map((game) => (
            <Item key={game.id} {...game} />
          ))}
        </List>
      </Wrapper>
    </>
  );
}

const List = styled.div`
  display: grid;
  width: 1000px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;
`;
