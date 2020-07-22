import React, { useState } from "react";
import styled from "styled-components";

export const Item = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    setIsModalOpen((state) => !state);
  };

  return (
    <>
      {isModalOpen ? (
        <Modal>
          <ModalOuter onClick={toggleModal}></ModalOuter>
          <ModalInner>
            <CloseButton onClick={toggleModal}>X</CloseButton>
            <p>{props.description}</p>
          </ModalInner>
        </Modal>
      ) : null}
      <Wrapper onClick={toggleModal}>
        <Poster src={props.poster.name} alt="poster" />
        <Col>
          <Title>{props.title}</Title>
          <ReleaseDate>{props.releaseDate}</ReleaseDate>
        </Col>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.1s ease;
  overflow: hidden;
  border-radius: 10px;
  outline: none;
  user-select: none;
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

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  outline: none;
  user-select: none;
`;

const ModalOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalInner = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  z-index: 5;
  background: white;
  padding: 20px;
`;

const CloseButton = styled.button`
  background: white;
  font-weight: bold;
  font-size: 30px;
  border: 0;
  outline: none;
  user-select: none;
  border-radius: 100%;
  transition: 0.1s ease;
  padding: 5px 10px;
  float: right;
  &:hover {
    background: #ddd;
    cursor: pointer;
  }
`;
