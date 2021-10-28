import BoardsListUI from "./BoardsList.present";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THEBEST,
} from "./BoardsList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import _ from "lodash";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardListContainer() {
  const router = useRouter();
  const [startPage, setStartpage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [myKeyword, setMyKeyword] = useState();
  const [bestBoards, setBestBoards] = useState(["", "", "", ""]);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setCurrentPage(1);
    setMyKeyword(data);
  }, 500);

  function onChangeSearch(event: any) {
    getDebounce(event.target.value);
  }

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBestBoards } = useQuery(FETCH_BOARDS_OF_THEBEST);

  function onchangeBestBoards(event: any) {
    // const newBestBoards = [...dataBestBoards.fetchBoardsOfTheBest];

    setBestBoards(event.target.value);
    console.log(setBestBoards);
  }

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  function onClickPage(event: any) {
    refetch({ page: Number(event.target.id), search: myKeyword });
    setCurrentPage(Number(event.target.id));
  }

  function onClickPrevpage() {
    if (startPage === 1) return;
    setCurrentPage(startPage - 10);
    setStartpage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setCurrentPage(startPage + 10);
    setStartpage((prev) => prev + 10);
  }

  function onClickMovetoList() {
    router.push(`/boards/new/`);
  }

  function onClickMovetoBoard(event: any) {
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
      currentPage={currentPage}
      onChangeSearch={onChangeSearch}
      myKeyword={myKeyword}
      bestBoards={bestBoards}
      onchangeBestBoards={onchangeBestBoards}
      dataBestBoards={dataBestBoards}
    />
  );
}
