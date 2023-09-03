import React, { useContext } from 'react'
import { Search } from "../shared/Search";
import { SearchContext } from '../../contexts/SearchContext'
import { CommentsItem } from './CommentsItem';

export const CommentsList = () => {
	const { comments, commentSearchResults, value} = useContext(SearchContext)!;
  return (
	<div>
		<Search />
      {(value ? commentSearchResults : comments).map((comment) => (
        <CommentsItem comments={comment} />
      ))}
	</div>
  )
}
