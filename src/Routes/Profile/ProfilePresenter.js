import React, { useState } from "react";
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
import FollowersBox from "../../Components/FollowersBox";
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

const FollowersHeader = styled.div`
  display: flex;
  height: 43px;
  border-bottom: 1px solid ${(props) => props.theme.lightGreyColor};
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    width: 100%;
  }
`;

const FollowersTitle = styled.h3``;

const Close = styled.button`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 10px;
  background-color: transparent;
  border: 0;
  font-size: 18px;
  border: none;
  outline: none;
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
  margin-top: -1px;
  padding: 20px 0;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 60px;
  }
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
  grid-gap: 20px;
`;

const Text = styled.div``;

export default ({ loading, data, logOut }) => {
  const [tab, setTab] = useState("posts");
  const [modal, setModal] = useState(false);

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
              <Count onClick={() => setModal(!modal)}>
                <FatText text={String(followersCount)} /> followers
                <div className={`Modal ${modal ? "Show" : ""}`}>
                  <FollowersHeader>
                    <Column>
                      <FollowersTitle>
                        <FatText text="Followers" />
                      </FollowersTitle>
                    </Column>
                    <Column>
                      <Close onClick={() => setModal(!modal)}>X</Close>
                    </Column>
                  </FollowersHeader>

                  <div className="HelpText">
                    <ul>
                      <div>
                        {followers &&
                          followers.map((f) => (
                            <FollowersBox
                              key={f.id}
                              id={f.id}
                              username={f.username}
                              avatar={f.avatar}
                              fullName={f.fullName}
                              isFollowing={f.isFollowing}
                            />
                          ))}
                      </div>
                    </ul>
                  </div>
                </div>
                <div
                  className={`Overlay ${modal ? "Show" : ""}`}
                  onClick={() => setModal(!modal)}
                />
              </Count>
              <Count>
                <FatText text={String(followingCount)} /> following
              </Count>
            </Counts>
            <FullName text={fullName} />
            <Bio>{bio}</Bio>
          </HeaderColumn>
        </Header>
        <Menus
          style={
            tab === "posts"
              ? { color: "inherit" }
              : tab === "channel"
              ? { color: "inherit" }
              : tab === "tagged"
              ? { color: "inherit" }
              : { color: "#828282" }
          }
        >
          <MenuColumn
            onClick={() => setTab("posts")}
            style={
              tab === "posts"
                ? { color: "inherit", borderTop: "1px solid black" }
                : { color: "#828282" }
            }
          >
            <PostIcon
              size={12}
              style={
                tab === "posts" ? { color: "inherit" } : { color: "#828282" }
              }
            />
            Posts
          </MenuColumn>
          <MenuColumn
            onClick={() => setTab("channel")}
            style={
              tab === "channel"
                ? { color: "inherit", borderTop: "1px solid black" }
                : { color: "#828282" }
            }
          >
            <Tv
              size={12}
              style={
                tab === "posts" ? { color: "inherit" } : { color: "#828282" }
              }
            />
            IGTV
          </MenuColumn>
          <MenuColumn
            onClick={() => setTab("tagged")}
            style={
              tab === "tagged"
                ? { color: "inherit", borderTop: "1px solid black" }
                : { color: "#828282" }
            }
          >
            <Tagged
              size={12}
              style={
                tab === "posts" ? { fill: "inherit" } : { fill: "#828282" }
              }
            />
            Tagged
          </MenuColumn>
        </Menus>
        {tab === "posts" && (
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
        )}
        {tab === "channel" && <Text>IGTV</Text>}
        {tab === "tagged" && <Text>Tagged</Text>}
      </Wrapper>
    );
  }
  return null;
};
