import React from "react";
import styled, { css } from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import Avatar from "./Avatar";
import FatText from "./FatText";
import {
  HeartFull,
  HeartEmpty,
  Comment as CommentIcon,
  CloseBtn,
} from "./Icons";

const ModalShow = css`
  top: 20%;
`;

const Modal = styled.div`
  display: flex;
  position: fixed;
  top: -250vh;
  background-color: #fff;
  align-items: center;
  margin: auto;
  max-width: 935px;
  height: 600px;
  width: 100%;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
  z-index: 10;
  cursor: auto;
  ${({ active }) => (active ? ModalShow : "")}
`;

const ModalColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  &:first-child {
    left: 0;
    width: 600px;
    height: 600px;
    background-color: yellowgreen;
  }
  &:last-child {
    left: 0;
    width: 335px;
    height: 600px;
  }
`;

const Header = styled.header`
  height: 72px;
  padding: 16px;
  right: 0;
  width: 335px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 14px;
  display: inline-block;
  flex-shrink: 1;
  min-width: 0;
`;

const CommentsWrapper = styled.div`
  height: 370px;
  border-top: 1px solid ${(props) => props.theme.moreLightGreyColor};
  border-bottom: 1px solid ${(props) => props.theme.moreLightGreyColor};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentLists = styled.ul`
  width: 100%;
  height: 100%;
`;

const CommentList = styled.li`
  padding: 16px;
`;

const Comment = styled.div`
  display: flex;
`;

const CommentColumn = styled(UserColumn)``;

const CommentRow = styled.div``;

const Caption = styled.span`
  margin-left: 10px;
`;

const CommentTimestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin-top: 10px;
`;

const Container = styled.div`
  padding: 15px;
  height: 100px;
  border-bottom: ${(props) => props.theme.moreLightGreyColor} 1px solid;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  padding: 20px 16px;
  &:focus {
    outline: none;
  }
`;

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
  padding-bottom: 12px;
  padding-top: 12px;
  svg {
    fill: #fff;
  }
`;

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

export default ({
  // user: { username, avatar },
  // location,
  // files,
  // isLiked,
  // likeCount,
  // createdAt,
  // newComment,
  // currentItem,
  // toggleLike,
  // onKeyPress,
  // comments,
  // selfComments,
  // caption,
  displayModal,
  setDisplayModal,
}) => {
  return (
    <>
      <Modal active={displayModal}>
        <ModalColumn>files</ModalColumn>
        <ModalColumn>
          <Header>
            <Avatar size="sm" />
            <UserColumn>
              <FatText text="username" />
            </UserColumn>
          </Header>
          <CommentsWrapper>
            <CommentLists>
              <CommentList>
                <Comment>
                  <Avatar size="sm" />
                  <CommentColumn>
                    <CommentRow>
                      <FatText text="username" />
                      <Caption>Lorem ipsum dolor sit amet,</Caption>
                    </CommentRow>
                    <CommentRow>
                      <CommentTimestamp>2020.12.24</CommentTimestamp>
                    </CommentRow>
                  </CommentColumn>
                </Comment>
              </CommentList>
              <CommentList>
                <Comment>
                  <Avatar size="sm" />
                  <CommentColumn>
                    <CommentRow>
                      <FatText text="guest1" />
                      <Caption>Hihi</Caption>
                    </CommentRow>
                    <CommentRow>
                      <CommentTimestamp>2020.12.24</CommentTimestamp>
                    </CommentRow>
                  </CommentColumn>
                </Comment>
              </CommentList>
              <CommentList>
                <Comment>
                  <Avatar size="sm" />
                  <CommentColumn>
                    <CommentRow>
                      <FatText text="guest2" />
                      <Caption>Hihi</Caption>
                    </CommentRow>
                    <CommentRow>
                      <CommentTimestamp>2020.12.24</CommentTimestamp>
                    </CommentRow>
                  </CommentColumn>
                </Comment>
              </CommentList>
              <CommentList>
                <Comment>
                  <Avatar size="sm" />
                  <CommentColumn>
                    <CommentRow>
                      <FatText text="guest3" />
                      <Caption>Hihi</Caption>
                    </CommentRow>
                    <CommentRow>
                      <CommentTimestamp>2020.12.24</CommentTimestamp>
                    </CommentRow>
                  </CommentColumn>
                </Comment>
              </CommentList>
              <CommentList>
                <Comment>
                  <Avatar size="sm" />
                  <CommentColumn>
                    <CommentRow>
                      <FatText text="guest4" />
                      <Caption>Hihi</Caption>
                    </CommentRow>
                    <CommentRow>
                      <CommentTimestamp>2020.12.24</CommentTimestamp>
                    </CommentRow>
                  </CommentColumn>
                </Comment>
              </CommentList>
              <CommentList>
                <Comment>
                  <Avatar size="sm" />
                  <CommentColumn>
                    <CommentRow>
                      <FatText text="guest5" />
                      <Caption>Hihi</Caption>
                    </CommentRow>
                    <CommentRow>
                      <CommentTimestamp>2020.12.24</CommentTimestamp>
                    </CommentRow>
                  </CommentColumn>
                </Comment>
              </CommentList>
            </CommentLists>
          </CommentsWrapper>
          <Container>
            <Buttons>
              {/* <Button onClick={toggleLike}>
                {isLiked ? <HeartFull /> : <HeartEmpty />}
              </Button> */}
              <Button>
                <HeartFull />
              </Button>
              <Button>
                <CommentIcon />
              </Button>
            </Buttons>
            {/* <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} /> */}
            <FatText text={"1 like"} />
            <Timestamp>2020.12.24</Timestamp>
          </Container>
          <Textarea placeholder={"Add a comment..."} />
        </ModalColumn>
      </Modal>

      <Overlay active={displayModal}>
        <Close onClick={() => setDisplayModal(!displayModal)}>
          <CloseBtn />
        </Close>
      </Overlay>
    </>
  );
};
