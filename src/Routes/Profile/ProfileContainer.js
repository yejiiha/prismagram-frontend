import React from "react";
import { withRouter } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
      followers {
        id
        username
        avatar
        fullName
        isFollowing
      }
      following {
        id
        username
        avatar
        fullName
        isFollowing
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username } });
    const logOut = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} data={data} logOut={logOut} />;
  }
);
