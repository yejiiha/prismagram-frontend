import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostIcon, Tv, Tagged } from "./Icons";
import SquarePost from "./SquarePost";

const Wrapper = styled.div``;

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

const PostLink = styled(Link)`
  color: inherit;
`;

export default ({ posts }) => {
  const [tab, setTab] = useState("posts");
  return (
    <Wrapper>
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
            style={tab === "posts" ? { fill: "inherit" } : { fill: "#828282" }}
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
                id={post.id}
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
};
