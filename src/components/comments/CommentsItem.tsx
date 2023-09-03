import { CommentInterface } from "./types";
import React, { FC } from 'react'

interface PropsInterface {
	comments: CommentInterface;
}

export const CommentsItem: FC<PropsInterface> = ({comments}) => {
	const {postId, id, name, email, body} = comments;
  return (
	<div></div>
  );
};
