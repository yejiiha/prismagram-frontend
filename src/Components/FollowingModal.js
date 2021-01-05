import React from "react";
import styled, { css } from "styled-components";
import FatText from "./FatText";
import FollowModalList from "./FollowModalList";

const Show = css`
  top: 30%;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: -550vh;
  left: 35%;
  background-color: #fff;
  width: 400px;
  height: 400px;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
  z-index: 10;
  cursor: auto;
  border-radius: 12px;
  ${Show};
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

const ModalContainer = styled.div``;

export default ({ following, followingModal, setFollowingModal }) => {
  return (
    <>
      <div className={`Modal ${followingModal ? "Show" : ""}`}>
        <FollowersHeader>
          <Column>
            <FollowersTitle>
              <FatText text="Followers" />
            </FollowersTitle>
          </Column>
          <Column>
            <Close onClick={() => setFollowingModal(!followingModal)}>X</Close>
          </Column>
        </FollowersHeader>

        <ModalContainer>
          <ul>
            {following &&
              following.map((f) => (
                <FollowModalList
                  key={f.id}
                  id={f.id}
                  username={f.username}
                  avatar={f.avatar}
                  fullName={f.fullName}
                  isFollowing={f.isFollowing}
                />
              ))}
          </ul>
        </ModalContainer>
      </div>
      <div className={`Overlay ${followingModal ? "Show" : ""}`} />
    </>
  );
};
