import React, { useRef, useEffect } from 'react';
import { ReplyProps } from '../../types/PropTypes/prop.types';
import { getImageURL } from '../../utils/helpers';
import { UseAppContext } from '../../context/AppStateContext';


const Reply: React.FC<ReplyProps> = (props) => {

    const replyImageRef: React.RefObject<HTMLImageElement> = useRef(null);

    useEffect(() => {
        if (props.isLastReply) {
            const imageElRect = props.imageElement?.getBoundingClientRect();
            const replyImageRect = replyImageRef.current?.getBoundingClientRect();

            if (imageElRect && replyImageRect) {
                const imageElBottom = imageElRect?.bottom;
                const replyImageTop = replyImageRect?.top;

                const calculatedLineHeight = (replyImageTop - imageElBottom) + 10;
                props.getAndSetLineHeight(calculatedLineHeight);
            }
        }
    })
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
                            <p>
                                {props.name}
                            </p>
                            <p>
                                @{props.username}
                            </p>
                        </div>
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
    ) 
}
export default Reply