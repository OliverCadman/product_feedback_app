import React, { RefObject } from 'react';
import { ReplyListProps } from '../../types/PropTypes/prop.types';
import Reply from '../Reply/Reply';
import { useEffect, useRef, useState } from 'react';

const ReplyList: React.FC<ReplyListProps> = ({replies, imageElement, getAndSetLineHeight, commentId}) => {
   

  return (
    <div className="reply-list__container">
        {
            replies?.map((reply, index) => {
                const {id, replyingTo, user: {name, image, username}, content} = reply;
                return <Reply
                    key={id}
                    name={name}
                    username={username}
                    imgUrl={image}
                    content={content}
                    replyingTo={replyingTo}
                    imageElement={imageElement}
                    isLastReply={index === replies.length - 1}
                    getAndSetLineHeight={getAndSetLineHeight}
                    commentId={commentId}
                />
            })
        }

    </div>
  )
}

export default ReplyList