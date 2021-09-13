import BoardsDetailUI from "./BoardsDetailRead.present";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./BoardsDetailRead.queries";
// import {FETCH_COMMENTS} from "./BoardsDetailRead.queries"
import { useMutation } from "@apollo/client";
import { DELETE_BOARD } from "./BoardsDetailRead.queries";

export default function BoardsDetialContainerPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  // const {data} = useQuery(FETCH_COMMENTS)

  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.BoardsDetailPage,
    },
  });

  async function onClickDelete(event) {
    await deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARD }],
    });
  }

  async function onClickLike(event) {
    await likeBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.BoardsDetailPage },
        },
      ],
    });
    alert("좋아요를 클릭합니다.");
  }

  async function onClickDisLike(event) {
    await dislikeBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.BoardsDetailPage },
        },
      ],
    });
    alert("싫어요를 클릭합니다.");
  }

  function onClickModify() {
    router.push(`/boards/${router.query.BoardsDetailPage}/edit`);
  }

  function onClickMovetoList() {
    router.push(`/boards/`);
  }

  return (
    <BoardsDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickModify={onClickModify}
      onClickMovetoList={onClickMovetoList}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
