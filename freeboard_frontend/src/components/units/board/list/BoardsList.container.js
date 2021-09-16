import BoardsListUI from "./BoardsList.present";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardsList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardListContainer() {
  const router = useRouter();
  const [startPage, setStartpage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevpage() {
    if (startPage === 1) return;
    setStartpage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartpage((prev) => prev + 10);
  }

  function onClickMovetoList() {
    router.push(`/boards/new/`);
  }

  function onClickMovetoBoard(event) {
    router.push(`boards/${event.currentTarget.id}`);
  }

  return (
    <BoardsListUI
      data={data}
      onClickMovetoList={onClickMovetoList}
      onClickMovetoBoard={onClickMovetoBoard}
      onClickPage={onClickPage}
      onClickPrevpage={onClickPrevpage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
