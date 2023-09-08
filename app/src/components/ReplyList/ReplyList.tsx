import React, { RefObject } from 'react';
import { ReplyListProps } from '../../types/PropTypes/prop.types';
import Reply from '../Reply/Reply';
import { useEffect, useRef, useState } from 'react';

const ReplyList: React.FC<ReplyListProps> = ({replies}) => {
   

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
                />
            })
        }

    </div>
  )
}

export default ReplyList