import React from "react";
import styled, { css } from "styled-components";
import FatText from "../FatText";
import FollowModalList from "./FollowModalList";
import { CloseBtn } from "../Icons";

const ModalShow = css`
  top: 30%;
`;

const FollowersModal = styled.div`
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
  ${({ active }) => (active ? ModalShow : "")}
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
  top: 12px;
  right: 10px;
  background-color: transparent;
  border: 0;
  font-size: 18px;
  border: none;
  outline: none;
  svg {
    fill: #2d2d2d;
  }
`;

const ModalContainer = styled.div``;

const OverlayShow = css`
  display: block;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: none;
  z-index: 5;
  cursor: auto;
  ${({ active }) => (active ? OverlayShow : "")}
`;

export default ({ followers, followersModal, setFollowersModal }) => {
  return (
    <>
      <FollowersModal active={followersModal}>
        <FollowersHeader>
          <Column>
            <FollowersTitle>
              <FatText text="Followers" />
            </FollowersTitle>
          </Column>
          <Column>
            <Close onClick={() => setFollowersModal(!followersModal)}>
              <CloseBtn size={18} />
            </Close>
          </Column>
        </FollowersHeader>

        <ModalContainer>
          <ul>
            {followers &&
              followers.map((f) => (
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
      </FollowersModal>

      <Overlay active={followersModal} />
    </>
  );
};
