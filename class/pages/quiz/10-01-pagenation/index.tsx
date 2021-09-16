import { gql, useQuery } from "@apollo/client";
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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PageNationBublingPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const [isActive, setIsActive] = useState(true);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
    setIsActive(event.target.id);
    if (isActive !== false) {
      setIsActive(true);
    }
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <div>페이지 네이션</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el.id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>&#60;</span>
      {new Array(10).fill(1).map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))}

      <span onClick={onClickNextPage}>&#62;</span>
    </>
  );
}
