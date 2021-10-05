import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PagiNation() {
  const [startPage, setStartPage] = useState(1);
  //   const [isActive, setIsActive] = useState(false);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      page: startPage,
    },
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
    // setIsActive(event.target.id);
    // if (isActive !== false) {
    //   setIsActive(true);
    // }
  }

  function onClickPrevPage(event) {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage(event) {
    if (startPage > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  const { data: dataBoarsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoarsCount?.fetchBoardsCount / 10);

  return (
    <>
      <div>페이지네이션 연습!!</div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.contents}</span>
          {/* <span>{el.writer}</span> */}
        </div>
      ))}

      <span onClick={onClickPrevPage}>&#60;</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={startPage + index}
          id={String(startPage + index)}
          onClick={onClickPage}
        >
          {startPage + index}
        </span>
      ))}
      <span onClick={onClickNextPage}>&#62;</span>
    </>
  );
}
