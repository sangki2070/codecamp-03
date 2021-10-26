import BoardsCommentModifyUI from "./BoardsCommentModify.present";
import {
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardsCommentModify.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

export default function BoardsCommentBox(props: any) {
  const router = useRouter();
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  // const { data } = useQuery(FETCH_BOARD_COMMENTS, {
  //   variables: { boardId: router.query.BoardsDetailPage },
  // });

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardsDetailPage },
  });

  const [password, setMypassword] = useState("");
  const [contents, setMycontents] = useState("");

  function onChangePassword(event: any) {
    setMypassword(event.target.value);
  }

  function onChangeContents(event: any) {
    setMycontents(event.target.value);
  }

  async function onClickCommentUpdate() {
    await updateBoardComment({
      variables: {
        boardCommentId: props.id,
        password: password,
        updateBoardCommentInput: {
          contents: contents,
          rating: 2,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.BoardsDetailPage },
        },
      ],
    });

    props.setModify("");
  }

  return (
    <BoardsCommentModifyUI
      onClickCommentUpdate={onClickCommentUpdate}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      data={data}
      writer={props.writer}
      contents={props.contents}
    />
  );
}
