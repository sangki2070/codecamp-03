import InfiniteScroll from "react-infinite-scroller";

import { useQuery, gql } from "@apollo/client";
import { useRef } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled(InfiniteScroll)`
  width: 1000px;

  color: red;
`;

export const Loader = styled.div`
  height: 1000px;
  height: 500px;
  overflow: auto;
`;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ScrollPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const loader = useRef(null);

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  }

  return (
    <Loader ref={loader}>
      <div>
        <Wrapper
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true || false}
          useWindow={false}
        >
          {data?.fetchBoards.map((el) => (
            <div key={el.id}>
              <span>{el.writer}</span>
              <span>{el.title}</span>
              <span>{el.contents}</span>
            </div>
          ))}
        </Wrapper>
      </div>
    </Loader>
  );
}
