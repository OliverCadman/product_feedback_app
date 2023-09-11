import React, {useState, useEffect, useRef} from 'react';
import { CommentProps } from '../../types/PropTypes/prop.types';
import { getImageURL } from '../../utils/helpers';
import ReplyList from '../ReplyList/ReplyList';
import { UseAppContext } from '../../context/AppStateContext';
import { useWindowWidth } from '../../hooks/UseWindowWidth';
import { UseRefContext } from '../../context/RefContext';

const Comment: React.FC<CommentProps> = (
    {id, imgUrl, name, username, content, replies, lastComment}
) => {

  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>()
  const [lineHeight, setLineHeight] = useState<number>(0);

  const windowWidth = useWindowWidth();
  const {isTabletDevice, setIsTabletDevice} = UseAppContext(); 

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
                    <button type="button" className="reply-btn">
                        Reply
                    </button>
                </div>
            </div>
            <div className="comment__content">
                <p>{content}</p>
            </div>
            { replies && replies.length > 0 ? (
                    <ReplyList replies={replies} imageElement={imageElement} getAndSetLineHeight={getAndSetLineHeight}/>
            ) : ""}
        </article>

        { !lastComment ? <hr /> : ""}
    </>
  )
}

export default Comment