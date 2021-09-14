import BoardCommentBox from "./BoardsComment.present";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardsComment.queries";
// import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardCommentPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardsDetailPage },
  });

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setMywriter] = useState("");
  const [password, setMypassword] = useState("");
  const [contents, setMycontents] = useState("");
  const [modify, setModify] = useState("");

  const [myStar, setMyStar] = useState(0);
  // const [value, setValue] = useState(0);

  // const handleChange = (value) => {
  //   setValue(value);
  // };

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
    setModify(event.target.id);
    console.log(event.target.id);
  }

  async function onClickComment() {
    // try {

    // } catch (error) {

    // }
    await createBoardComment({
      variables: {
        boardId: String(router.query.BoardsDetailPage),
        createBoardCommentInput: {
          writer: writer,
          contents: contents,
          password: password,
          rating: myStar,
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

  async function onClickCommentDelete(event) {
    const password = prompt("비밀번호를 입력해 주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.BoardsDetailPage },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function onChangeStar(value) {
    setMyStar(value);
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
      setModify={setModify}
      onClickCommentDelete={onClickCommentDelete}
      onChangeStar={onChangeStar}
      // value={value}
      // handleChange={handleChange}
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
