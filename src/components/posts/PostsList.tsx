import React, { useCallback, useContext, useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { PostItem } from "./PostItem";
import { FlexColumn } from "../shared/Flex";
import { PostInterface } from "./types";
import { Search } from "../shared/Search";
import { SearchContext } from "../../contexts/SearchContext";

export const PostsList = () => {
  const { value, posts, postsSearchResults } = useContext(SearchContext)!;

  return (
    <FlexColumn width="100vw" alignItems="center">
      <h1>Posts</h1>
      <Search />
      {(value ? postsSearchResults : posts).map((post) => (
        <PostItem post={post} />
      ))}
      {/* {data?.map((post) => (
        <PostItem post={post} />
      ))} */}
    </FlexColumn>
  );
};