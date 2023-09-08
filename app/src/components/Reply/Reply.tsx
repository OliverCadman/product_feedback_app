import React, { forwardRef } from 'react';
import { ReplyProps } from '../../types/PropTypes/prop.types';
import { getImageURL } from '../../utils/helpers';


const Reply: React.FC<ReplyProps> = (props) => {
    return ( 
        <div className="comment__container reply">
            <div className="comment-reply__wrapper">
                <div className="comment__header flex row-between">
                    <div className="comment__socials flex">
                        <img 
                        src={getImageURL(props?.imgUrl)} 
                        alt={props.name} />
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