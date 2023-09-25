import React, {useState, useEffect, useRef} from 'react';
import { CommentProps } from '../../types/PropTypes/prop.types';
import { getImageURL } from '../../utils/helpers';
import ReplyList from '../ReplyList/ReplyList';
import { UseAppContext } from '../../context/AppStateContext';
import { useWindowWidth } from '../../hooks/UseWindowWidth';
import { UseAppContext as UseAppState } from '../../context/AppDataContext';
import { IProductRequest } from '../../types/AppData/appdata.types';
import ReplyInput from '../ReplyInput/ReplyInput';

const Comment: React.FC<CommentProps> = (
    {id, imgUrl, name, username, content, replies, lastComment}
) => {

  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>()
  const [lineHeight, setLineHeight] = useState<number>(0);

  const windowWidth = useWindowWidth();
  const {isTabletDevice, setIsTabletDevice} = UseAppContext(); 

  const { state, dispatch } = UseAppState();
  console.log(state)

  const getAndSetLineHeight = (calculatedLineHeight: number | undefined) => {
    if (!calculatedLineHeight) return;
    setLineHeight(calculatedLineHeight);
  }

  useEffect(() => {
    setImageElement(imageRef.current)
  }, [])

  useEffect(() => {
    if (windowWidth && windowWidth > 767) {
        setIsTabletDevice(true);
    } else {
        setIsTabletDevice(false);
    }
  })

   const checkFormValidity = (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (!state.commentInput) {
        dispatch({type: "INVALID_INPUT", payload: "reply"})
      }
      return true;
    }

    const setComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({ type: "SET_COMMENT", payload: {input: e.target.value, inputType: "reply"}});
    }

  return (
    <>
        <article className="comment__container">
            {
                isTabletDevice ? (
                    <div style={{
                        position: "absolute",
                        left: "18px",
                        top: "50px",
                        height: `${lineHeight}px`,
                        background: "#647196",
                        opacity: ".1",
                        width: "1px"
                    }}></div>
                ) : ""
            }
            <div className="comment__header flex row-between">
                <div className="comment__socials flex">
                    <img src={getImageURL(imgUrl)} alt={name} ref={imageRef} />
                    <div className="comment__social-handles">
                        <p>
                            {name}
                        </p>
                        <p>
                            @{username}
                        </p>
                    </div>
                </div>
                <div className="comment-reply-btn__wrapper">
                    <button type="button" className="reply-btn" onClick={() => {
                        if (!state.showReplyInput) {
                            dispatch({type: "TOGGLE_REPLY", payload: true})
                        } else if (state.showReplyInput && state.idOfCommentReceivingReply === id) {
                            dispatch({type: "TOGGLE_REPLY", payload: false})
                        }
                        dispatch({type: "SET_ID_COMMENT_RECEIVING_REPLY", payload: id})
                    }}>
                        Reply
                    </button>
                </div>
            </div>
            <div className="comment__content">
                <p>{content}</p>
            </div>
            { replies && replies.length > 0 ? (
                    <ReplyList 
                    replies={replies} 
                    imageElement={imageElement} 
                    getAndSetLineHeight={getAndSetLineHeight}
                    commentId={id}/>
            ) : ""}
        </article>
        {
            (state.idOfCommentReceivingReply === id) && state.showReplyInput ? (
                <ReplyInput 
                checkFormValidity={checkFormValidity}
                showError={state.showReplyInputError}
                setReply={setComment}
                commentHasReplies={replies && replies.length > 0}
                isCommentReceivingReply={state.idOfCommentReceivingReply === id}
                />
            ) : ""
        }
        { !lastComment ? <hr /> : ""}
    </>
  )
}

export default Comment