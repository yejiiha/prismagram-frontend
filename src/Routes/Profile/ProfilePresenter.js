import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";
import { PostIcon, Tv, Tagged } from "../../Components/Icons";

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

const Menus = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #828282;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.lightGreyColor};
`;

const MenuColumn = styled.div`
  padding: 20px 0;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 60px;
  }
`;

const PLink = styled(Link)`
  color: inherit;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
  grid-gap: 20px;
`;

export default ({ loading, data, logOut }) => {
  // if (loading === true) {
  //   return (
  //     <Wrapper>
  //       <Loader />
  //     </Wrapper>
  //   );
  // } else
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
              <Count>
                <FatText text={String(followersCount)} /> followers
              </Count>
              <Count>
                <FatText text={String(followingCount)} /> following
              </Count>
            </Counts>
            <FullName text={fullName} />
            <Bio>{bio}</Bio>
          </HeaderColumn>
        </Header>
        <Menus>
          <MenuColumn>
            <PostIcon size={12} />
            Posts
          </MenuColumn>
          <MenuColumn>
            <PLink to={`/${username}/channel`}>
              <Tv size={12} />
              IGTV
            </PLink>
          </MenuColumn>
          <MenuColumn>
            <PLink to={`/${username}/tagged`}>
              <Tagged size={12} />
              Tagged
            </PLink>
          </MenuColumn>
        </Menus>
        <Posts>
          {posts &&
            posts.map((post) => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))}
        </Posts>
      </Wrapper>
    );
  }
  return null;
};
