import BoardsCommentModifyUI from "./BoardsCommentModify.present";
import { UPDATE_BOARD_COMMENT } from "./BoardsCommentModify.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../comment/BoardsComment.queries";

export default function BoardsCommentBox(props) {
  const router = useRouter();
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardsDetailPage },
  });

  const [password, setMypassword] = useState("");
  const [contents, setMycontents] = useState("");

  function onChangePassword(event) {
    setMypassword(event.target.value);
  }

  function onChangeContents(event) {
    setMycontents(event.target.value);
  }

  async function onClickCommentUpdate(event) {
    await updateBoardComment({
      variables: {
        boardCommentId: event.target.id,
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
  }

  return (
    <BoardsCommentModifyUI
      onClickCommentUpdate={onClickCommentUpdate}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      data={data}
      el={props.el}
      id={props._id}
    />
  );
}
