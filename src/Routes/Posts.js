import React from "react";
import { withRouter } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import PostModal from "../Components/PostModal";
import Modal from "../Components/Modal";

const SEE_POST = gql`
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

export default withRouter(
  ({
    match: {
      params: { id },
    },
    postId,
    displayModal,
    setDisplayModal,
  }) => {
    const { data, loading } = useQuery(SEE_POST, { variables: { id } });
    console.log(data, loading);
    return (
      <>
        {/* {loading && <Loader />} */}
        {!loading &&
          data &&
          data?.seeFullPost &&
          data?.seeFullPost.map((post) => (
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
              displayModal={displayModal}
              setDisplayModal={setDisplayModal}
            />
          ))}
      </>
    );
  }
);
