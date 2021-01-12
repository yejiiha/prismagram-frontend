import React from "react";
import { withRouter } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import PostModal from "../Components/PostModal";

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

export default withRouter(({ id, displayModal, setDisplayModal }) => {
  const { data, loading } = useQuery(SEE_POST, { variables: { id } });
  return (
    <>
      {!loading && data && data.seeFullPost && (
        <PostModal
          key={data.seeFullPost.id}
          id={data.seeFullPost.id}
          user={data.seeFullPost.user}
          files={data.seeFullPost.files}
          likeCount={data.seeFullPost.likeCount}
          isLiked={data.seeFullPost.isLiked}
          comments={data.seeFullPost.comments}
          createdAt={data.seeFullPost.createdAt}
          location={data.seeFullPost.location}
          caption={data.seeFullPost.caption}
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
        />
      )}
    </>
  );
});
