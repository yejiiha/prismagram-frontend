import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import PostModal from "../Components/PostModal";

const Container = styled.div``;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: none;
  z-index: 5;
  cursor: auto;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 10px;
  background-color: transparent;
  border: 0;
  font-size: 18px;
  border: none;
  outline: none;
`;

const Body = styled.div``;

const Posts = (props) => {
  const { state, closeModal } = props;

  return state ? (
    <Container>
      <Overlay onClick={(event) => closeModal(event)} />
      <Contents>
        <Title>
          모달 타이틀
          <Close onClick={(event) => closeModal(event)}>X</Close>
        </Title>
        <Body>모달내용</Body>
      </Contents>
    </Container>
  ) : (
    <></>
  );
};

Posts.propTypes = {
  state: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Posts;
