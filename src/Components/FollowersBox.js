import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import FatText from "./FatText";
import FollowButton from "./FollowButton";

const Container = styled.div``;

const FollowersLists = styled.ul``;

const FollowersList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListColumn = styled.div`
  display: flex;
  &:last-child {
    margin-left: 15px;
    width: 60px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-right: 12px;
  }
`;

const FLink = styled(Link)`
  color: inherit;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const FollowersBox = ({ id, username, avatar, fullName, isFollowing }) => (
  <FollowersLists>
    <FollowersList>
      <List>
        <ListColumn>
          <Column>
            <Avatar url={avatar} size={"sm"} />
          </Column>
          <Column>
            <FLink to={`/${username}`}>
              <FatText text={username} />
            </FLink>

            {fullName}
          </Column>
        </ListColumn>
        <ListColumn>
          <FollowButton isFollowing={isFollowing} />
        </ListColumn>
      </List>
    </FollowersList>
  </FollowersLists>
);

FollowersBox.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export default FollowersBox;
