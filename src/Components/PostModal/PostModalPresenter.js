import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import { Link } from "react-router-dom";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "../Icons";

const ModalShow = css`
  top: 30%;
`;

const Wrapper = styled.div`
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
  /* ${({ active }) => (active ? ModalShow : "")} */
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
`;

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
  user-select: none;
  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const PLink = styled(Link)`
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
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
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

const Caption = styled.div`
  margin: 10px 0px;
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
  /* ${({ active }) => (active ? OverlayShow : "")} */
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
  caption,
  postModal,
  closeModal,
}) =>
  postModal ? (
    <Wrapper>
      <Overlay onClick={(e) => closeModal(e)} />
      <Close onClick={(e) => closeModal(e)}>X</Close>
      <Post>
        <Header>
          <Avatar size="sm" url={avatar} />
          <UserColumn>
            <PLink to={`/${username}`}>
              <FatText text={username} />
            </PLink>
            <Location>{location}</Location>
          </UserColumn>
        </Header>
        <Files>
          {files &&
            files.map((file, index) => (
              <File
                key={file.id}
                id={file.id}
                src={file.url}
                showing={index === currentItem}
              />
            ))}
        </Files>
        <Meta>
          <Buttons>
            <Button onClick={toggleLike}>
              {isLiked ? <HeartFull /> : <HeartEmpty />}
            </Button>
            <Button>
              <CommentIcon />
            </Button>
          </Buttons>
          <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
          <Caption>
            <PLink to={`/${username}`}>
              <FatText text={username} />
            </PLink>{" "}
            {caption}
          </Caption>
          {comments && (
            <Comments>
              {comments.map((comment) => (
                <Comment key={comment.id}>
                  <PLink to={`/${comment.user.username}`}>
                    <FatText text={comment.user.username} />
                  </PLink>
                  {comment.text}
                </Comment>
              ))}
              {selfComments.map((comment) => (
                <Comment key={comment.id}>
                  <FatText text={comment.user.username} />
                  {comment.text}
                </Comment>
              ))}
            </Comments>
          )}
          <Timestamp>{createdAt}</Timestamp>
          <Textarea
            placeholder={"Add a comment..."}
            value={newComment.value}
            onChange={newComment.onChange}
            onKeyPress={onKeyPress}
          />
        </Meta>
      </Post>
    </Wrapper>
  ) : (
    <></>
  );

// const PostModalPresenter = ({

//   user: { username, avatar },
//   location,
//   files,
//   isLiked,
//   likeCount,
//   createdAt,
//   newComment,
//   currentItem,
//   toggleLike,
//   onKeyPress,
//   comments,
//   selfComments,
//   caption,
// }) => {
//   const { postModal, closeModal } = props;

//   return postModal ? (
//     <Wrapper>
//       <Overlay onClick={(e) => closeModal(e)} />
//       <Close onClick={(e) => closeModal(e)}>X</Close>
//       <Post>
//         <Header>
//           <Avatar size="sm" url={avatar} />
//           <UserColumn>
//             <PLink to={`/${username}`}>
//               <FatText text={username} />
//             </PLink>
//             <Location>{location}</Location>
//           </UserColumn>
//         </Header>
//         <Files>
//           {files &&
//             files.map((file, index) => (
//               <File
//                 key={file.id}
//                 id={file.id}
//                 src={file.url}
//                 showing={index === currentItem}
//               />
//             ))}
//         </Files>
//         <Meta>
//           <Buttons>
//             <Button onClick={toggleLike}>
//               {isLiked ? <HeartFull /> : <HeartEmpty />}
//             </Button>
//             <Button>
//               <CommentIcon />
//             </Button>
//           </Buttons>
//           <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
//           <Caption>
//             <PLink to={`/${username}`}>
//               <FatText text={username} />
//             </PLink>{" "}
//             {caption}
//           </Caption>
//           {comments && (
//             <Comments>
//               {comments.map((comment) => (
//                 <Comment key={comment.id}>
//                   <PLink to={`/${comment.user.username}`}>
//                     <FatText text={comment.user.username} />
//                   </PLink>
//                   {comment.text}
//                 </Comment>
//               ))}
//               {selfComments.map((comment) => (
//                 <Comment key={comment.id}>
//                   <FatText text={comment.user.username} />
//                   {comment.text}
//                 </Comment>
//               ))}
//             </Comments>
//           )}
//           <Timestamp>{createdAt}</Timestamp>
//           <Textarea
//             placeholder={"Add a comment..."}
//             value={newComment.value}
//             onChange={newComment.onChange}
//             onKeyPress={onKeyPress}
//           />
//         </Meta>
//       </Post>
//     </Wrapper>
//   ) : (
//     <></>
//   );
// };

// PostModalPresenter.propType = {
//   postModal: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func.isRequired,
// };

// export default PostModalPresenter;
