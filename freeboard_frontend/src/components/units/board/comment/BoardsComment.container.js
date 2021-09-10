import BoardCommentBox from "./BoardsComment.present";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./BoardsComment.queries";
// import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardCommentPage() {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setMywriter] = useState("");
  const [password, setMypassword] = useState("");
  const [contents, setMycontents] = useState("");

  function onChangeWriter(event) {
    setMywriter(event.target.value);
  }

  function onChangePassword(event) {
    setMypassword(event.target.value);
  }

  function onChangeContents(event) {
    setMycontents(event.target.value);
  }

  async function onClickComment() {
    await createBoardComment({
      variables: {
        CreateBoardCommentInput: {
          writer: writer,
          contents: contents,
          password: password,
          rating: 2,
        },
      },
      boardId: router.query.BoardsDetailPage,
    });
  }

  return (
    <BoardCommentBox
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
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
//     }

// }
