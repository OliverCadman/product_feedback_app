import React from 'react';
import { CommentProps } from '../../types/PropTypes/prop.types';
import { getImageURL } from '../../utils/helpers';
import ReplyList from '../ReplyList/ReplyList';


const Comment: React.FC<CommentProps> = (
    {id, imgUrl, name, username, content, replies, lastComment}
) => {

  return (
    <>
        <article className="comment__container">
            <div className="comment__header flex row-between">
                <div className="comment__socials flex">
                    <img src={getImageURL(imgUrl)} alt={name} />
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
                    <button type="button" className="reply-btn">
                        Reply
                    </button>
                </div>
            </div>
            <div className="comment__content">
                <p>{content}</p>
            </div>
            { replies && replies.length > 0 ? (
                    <ReplyList replies={replies}/>
            ) : ""}
        </article>

        { !lastComment ? <hr /> : ""}
    </>
  )
}

export default Comment