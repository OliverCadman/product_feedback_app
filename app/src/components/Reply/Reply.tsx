import React, { useRef, useEffect } from "react";
import { ReplyProps } from "../../types/PropTypes/prop.types";
import { getImageURL } from "../../utils/helpers";
import { UseAppContext } from "../../context/AppDataContext";
import CommentInput from "../CommentInput/CommentInput";

const Reply: React.FC<ReplyProps> = (props) => {
  const replyImageRef: React.RefObject<HTMLImageElement> = useRef(null);

  const { state, dispatch } = UseAppContext();

  useEffect(() => {
    if (props.isLastReply) {
      const imageElRect = props.imageElement?.getBoundingClientRect();
      const replyImageRect = replyImageRef.current?.getBoundingClientRect();

      if (imageElRect && replyImageRect) {
        const imageElBottom = imageElRect?.bottom;
        const replyImageBottom = replyImageRect?.bottom;
        const calculatedLineHeight = replyImageBottom - imageElBottom - 30;
        props.getAndSetLineHeight(calculatedLineHeight);
      }
    }
  });
  return (
    <div className="comment__container reply">
      <div className="comment-reply__wrapper">
        <div className="comment__header flex row-between">
          <div className="comment__socials flex">
            <img
              src={getImageURL(props?.imgUrl)}
              alt={props.name}
              ref={replyImageRef}
            />
            <div className="comment__social-handles">
              <p>{props.name}</p>
              <p>@{props.username}</p>
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
                      replyingTo: props.username,
                    },
                  });
                } else if (
                  state.replyToggler.showReply &&
                  state.idOfCommentReceivingReply === props.commentId
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
                  payload: props.commentId,
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
          <p>
            <span className="replying-to__span">@{props.replyingTo} </span>
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Reply;
