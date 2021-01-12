import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, CommentFull } from "./Icons";
import { Link } from "react-router-dom";
import PostModal from "./PostModal";
import Posts from "../Routes/Posts";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s linear;
  svg {
    fill: white;
  }
`;

const Container = styled.div`
  background-image: url(${(props) => props.bg});
  height: 200px;
  background-size: cover;
  cursor: pointer;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Number = styled.div`
  color: white;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 30px;
  }
`;

const NumberText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const SquarePost = ({ id, likeCount, commentCount, file }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <Container bg={file.url} onClick={() => setDisplayModal(!displayModal)}>
        <Overlay>
          <Number>
            <HeartFull />
            <NumberText>{likeCount}</NumberText>
          </Number>
          <Number>
            <CommentFull />
            <NumberText>{commentCount}</NumberText>
          </Number>
        </Overlay>
      </Container>

      <Posts
        id={id}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </>
  );
};

SquarePost.propTypes = {
  id: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.object.isRequired,
};

export default SquarePost;
