import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function PageNationNextPagePage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <div>다음 페이지</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el.id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      {new Array(10).fill(1).map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))} */}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
