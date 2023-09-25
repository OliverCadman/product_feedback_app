import React from "react";
import { CommentListProps } from "../../types/PropTypes/prop.types";
import Comment from "../Comment/Comment";

const CommentList: React.FC<CommentListProps> = ({ comments, productId }) => {
  return comments?.map((comment, index) => {
    const {
      id,
      user: { name, image, username },
      content,
      replies,
    } = comment;

    return (
      <Comment
        key={id}
        name={name}
        username={username}
        imgUrl={image}
        content={content}
        replies={replies}
        lastComment={index === comments.length - 1}
        id={id}
        productId={productId}
      />
    );
  });
};

export default CommentList;
