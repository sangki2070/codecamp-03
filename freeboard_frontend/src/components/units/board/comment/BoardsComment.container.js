import BoardCommentBox from "./BoardsComment.present";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardsComment.queries";
// import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardCommentPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardsDetailPage },
  });

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setMywriter] = useState("");
  const [password, setMypassword] = useState("");
  const [contents, setMycontents] = useState("");
  const [modify, setModify] = useState(false);

  function onChangeWriter(event) {
    setMywriter(event.target.value);
  }

  function onChangePassword(event) {
    setMypassword(event.target.value);
  }

  function onChangeContents(event) {
    setMycontents(event.target.value);
  }

  function onClickModifyBtn(event) {
    setModify(true);
  }

  async function onClickComment() {
    // try {

    // } catch (error) {

    // }
    await createBoardComment({
      variables: {
        boardId: router.query.BoardsDetailPage,
        createBoardCommentInput: {
          writer: writer,
          contents: contents,
          password: password,
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
    <BoardCommentBox
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickModifyBtn={onClickModifyBtn}
      data={data}
      modify={modify}
    />
  );
}

//   const comment = createBoardComment({
//     variables: {
//       createBoardCommentInput:{

//         writer : writer,
//         contents: contents,
//         password: password,
//         rating: 1,
//       },
//       boardId:(router.query.BoardsDetailPage)
//     }613b7673abd89b00293ae74a

// }
