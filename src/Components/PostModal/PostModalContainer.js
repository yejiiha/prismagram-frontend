import React from "react";
import { withRouter } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import PostModalPresenter from "./PostModalPresenter";

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

export default withRouter(
  ({
    match: {
      params: { id },
    },
  }) => {
    const { data, loading } = useQuery(GET_POST, { variables: { id } });
    console.log(data, loading);
    return <PostModalPresenter loading={loading} data={data} />;
    // return null;
  }
);
