import BoardCommentBox from "./BoardsComment.present";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardsComment.queries";
// import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function BoardCommentPage() {
  const router = useRouter();
  const loader = useRef(null);

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardsDetailPage },
  });

  // const { fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
  //   variables: { boardId: router.query.BoardsDetailPage },
  // });

  // const { data } = useQuery(FETCH_BOARD_COMMENTS, {
  //   variables: { boardId: router.query.BoardsDetailPage },
  // });

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  }

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setMywriter] = useState("");
  const [password, setMypassword] = useState("");
  const [contents, setMycontents] = useState("");
  const [modify, setModify] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const [myStar, setMyStar] = useState(0);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  // const [value, setValue] = useState(0);

  // const handleChange = (value) => {
  //   setValue(value);
  // };

  function onChangeWriter(event: any) {
    setMywriter(event.target.value);
  }

  function onChangePassword(event: any) {
    setMypassword(String(event.target.value));
  }

  function onChangeContents(event: any) {
    setMycontents(event.target.value);
  }

  function onClickModifyBtn(event: any) {
    setModify(event.target.id);
    console.log(event.target.id);
  }

  async function onClickComment() {
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

  async function onClickCommentDelete(event: any) {
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: deleteId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.BoardsDetailPage },
          },
        ],
      });
      onToggleDelete();
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onChangeStar(value: any) {
    setMyStar(value);
  }

  function onClickOpenDeleteModal(event: any) {
    setIsOpenDeleteModal((prev) => !prev);
    setDeleteId(event.target.id);
  }

  function onChangeDeletePassword(event: any) {
    setMypassword(event.target.value);
  }

  function onToggleDelete() {
    setIsOpenDeleteModal((prev) => !prev);
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
      onLoadMore={onLoadMore}
      loader={loader}
      isOpenDeleteModal={isOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onToggleDelete={onToggleDelete}
      writer={writer}
      contents={contents}

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
