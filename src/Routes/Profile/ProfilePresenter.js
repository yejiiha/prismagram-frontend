import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import Button from "../../Components/Button";
import ProfilePost from "../../Components/ProfilePost";
import FollowersModal from "../../Components/FollowersModal";
import FollowingModal from "../../Components/FollowingModal";
import "./style.css";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div`
  &:first-child {
    flex-basis: 0;
    flex-grow: 1;
    margin-right: 28px;
  }
  &:last-child {
    flex-basis: 30px;
    flex-grow: 2;
  }
`;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
`;

const Username = styled.span`
  font-size: 26px;
  display: block;
  margin-right: 20px;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:not(:first-child) {
    cursor: pointer;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

export default ({ loading, data, logOut }) => {
  const [followersModal, setFollowersModal] = useState(false);
  const [followingModal, setFollowingModal] = useState(false);

  if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
        fullName,
        isFollowing,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts,
        followers,
        following,
      },
    } = data;
    return (
      <Wrapper>
        <Helmet>
          <title>{username} | Prismagram</title>
        </Helmet>
        <Header>
          <HeaderColumn>
            <Avatar size="lg" url={avatar} />
          </HeaderColumn>
          <HeaderColumn>
            <UsernameRow>
              <Username>{username}</Username>{" "}
              {isSelf ? (
                <Button onClick={logOut} text="Log Out" />
              ) : (
                <FollowButton isFollowing={isFollowing} id={id} />
              )}
            </UsernameRow>
            <Counts>
              <Count>
                <FatText text={String(postsCount)} /> posts
              </Count>

              <Count onClick={() => setFollowersModal(!followersModal)}>
                <FatText text={String(followersCount)} /> followers
                <FollowersModal
                  followers={followers}
                  followersModal={followersModal}
                  setFollowersModal={setFollowersModal}
                />
              </Count>

              <Count onClick={() => setFollowingModal(!followingModal)}>
                <FatText text={String(followingCount)} /> following
                <FollowingModal
                  following={following}
                  followingModal={followingModal}
                  setFollowingModal={setFollowingModal}
                />
              </Count>
            </Counts>
            <FullName text={fullName} />
            <Bio>{bio}</Bio>
          </HeaderColumn>
        </Header>

        <ProfilePost posts={posts} />
      </Wrapper>
    );
  }
  return null;
};
