import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import PostModal from "../Components/PostModal";

const GET_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
      commentCount
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default withRouter(
  ({
    match: {
      params: { id },
    },
    postModal,
    closeModal,
  }) => {
    const { data, loading } = useQuery(GET_POST, { variables: { id } });
    return (
      <Wrapper>
        {/* {loading && <Loader />} */}
        {!loading &&
          data &&
          data.seeFullPost &&
          data.seeFullPost.map((post) => (
            <PostModal
              key={post.id}
              id={post.id}
              user={post.user}
              files={post.files}
              likeCount={post.likeCount}
              isLiked={post.isLiked}
              comments={post.comments}
              createdAt={post.createdAt}
              location={post.location}
              caption={post.caption}
              postModal={postModal}
              closeModal={closeModal}
            />
          ))}
      </Wrapper>
    );
  }
);
