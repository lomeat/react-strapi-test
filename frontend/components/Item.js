import React from "react";
import styled from "styled-components";

export const Item = (props) => {
  return (
    <Wrapper>
      <Poster src={props.poster.name} alt="poster" />
      <Col>
        <Title>{props.title}</Title>
        <ReleaseDate>{props.releaseDate}</ReleaseDate>
      </Col>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.1s ease;
  overflow: hidden;
  border-radius: 10px;
  &:hover {
    background: #ddd;
    cursor: pointer;
  }
`;

const Poster = styled.img`
  height: 280px;
  max-width: 220px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.h2`
  padding: 0 0 10px 0;
  margin: 0;
`;

const ReleaseDate = styled.span``;
