import React, { useState, useEffect, useRef } from "react";
import { CommentProps } from "../../types/PropTypes/prop.types";
import { getImageURL } from "../../utils/helpers";
import ReplyList from "../ReplyList/ReplyList";
import { UseAppContext } from "../../context/AppStateContext";
import { useWindowWidth } from "../../hooks/UseWindowWidth";
import { UseAppContext as UseAppState } from "../../context/AppDataContext";
import ReplyInput from "../ReplyInput/ReplyInput";
import { checkFormValidity } from "../../data/utils/validation";

import { nanoid } from "nanoid";

const Comment: React.FC<CommentProps> = ({
  id,
  imgUrl,
  name,
  username,
  content,
  replies,
  lastComment,
  productId,
}) => {
  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>();
  const [lineHeight, setLineHeight] = useState<number>(0);

  const windowWidth = useWindowWidth();
  const { isTabletDevice, setIsTabletDevice } = UseAppContext();

  const { state, dispatch } = UseAppState();

  const getAndSetLineHeight = (calculatedLineHeight: number | undefined) => {
    if (!calculatedLineHeight) return;
    setLineHeight(calculatedLineHeight);
  };

  useEffect(() => {
    setImageElement(imageRef.current);
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth > 767) {
      setIsTabletDevice(true);
    } else {
      setIsTabletDevice(false);
    }
  });

  const setReply = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "SET_REPLY",
      payload: { input: e.target.value },
    });
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      !checkFormValidity(state.replyInput, dispatch, {
        type: "INVALID_INPUT",
        payload: "reply",
      })
    )
      return;

    dispatch({
      type: "ADD_REPLY",
      payload: {
        replyId: nanoid(),
        commentId: id,
        content: state.replyInput,
        replyingTo: state.replyToggler.replyingTo,
        user: {
          image: state.data.currentUser.image,
          name: state.data.currentUser.name,
          username: state.data.currentUser.username,
        },
        productId: productId,
      },
    });
  };

  return (
    <>
      <article className="comment__container">
        {isTabletDevice ? (
          <div
            style={{
              position: "absolute",
              left: "18px",
              top: "50px",
              height: `${lineHeight}px`,
              background: "#647196",
              opacity: ".1",
              width: "1px",
            }}
          ></div>
        ) : (
          ""
        )}
        <div className="comment__header flex row-between">
          <div className="comment__socials flex">
            <img src={getImageURL(imgUrl)} alt={name} ref={imageRef} />
            <div className="comment__social-handles">
              <p>{name}</p>
              <p>@{username}</p>
            </div>
          </div>
          <div className="comment-reply-btn__wrapper">
            <button
              type="button"
              className="reply-btn"
              onClick={() => {
                if (!state.replyToggler.showReply) {
                  dispatch({
                    type: "TOGGLE_REPLY",
                    payload: {
                      showReply: true,
                      replyingTo: username,
                    },
                  });
                } else if (
                  state.replyToggler.showReply &&
                  state.idOfCommentReceivingReply === id
                ) {
                  dispatch({
                    type: "TOGGLE_REPLY",
                    payload: {
                      showReply: false,
                      replyingTo: "",
                    },
                  });
                }
                dispatch({
                  type: "SET_ID_COMMENT_RECEIVING_REPLY",
                  payload: id,
                });

                dispatch({
                  type: "INITIALIZE_INPUT",
                  payload: null,
                });
              }}
            >
              Reply
            </button>
          </div>
        </div>
        <div className="comment__content">
          <p>{content}</p>
        </div>
        {replies && replies.length > 0 ? (
          <ReplyList
            replies={replies}
            imageElement={imageElement}
            getAndSetLineHeight={getAndSetLineHeight}
            commentId={id}
          />
        ) : (
          ""
        )}
      </article>
      {state.idOfCommentReceivingReply === id &&
      state.replyToggler.showReply ? (
        <ReplyInput
          handleFormSubmit={handleFormSubmit}
          showError={state.showReplyInputError}
          setReply={setReply}
          commentHasReplies={replies && replies.length > 0}
          textAreaValue={state.replyInput}
        />
      ) : (
        ""
      )}
      {!lastComment ? <hr /> : ""}
    </>
  );
};

export default Comment;
