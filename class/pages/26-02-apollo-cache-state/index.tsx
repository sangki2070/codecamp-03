import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId) => async () => {
    // boardId
    await deleteBoard({
      variables: {
        boardId: boardId,
      },
      // refetchQueries:[fetchBoards] 10개를 다시 리패치해서 효율성 안좋음
      // variables요청이 끝나면 update가 실행됨
      // {data} 응답받는 ID!가 들어옴
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // prev는 기존의 10개
              // 기존의 패치보드 10개에서, 지금 삭제된 id를 제외한 9개를 만들고
              // 그렇게 만들어진 9개의 새로운 패치보드를 리턴하여 덮어씌우기

              const newFetchBoards = prev.filter((el) => {
                return readField("_id", el) !== deletedId;
              });
              return [...newFetchBoards];
              // 기존에 있던 10개를 덮어씌워줘
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "메롱메롱",
          contents: "메롱초등학교",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 추가된 크리에이트보드 결과물과 이전의 10개를 합쳐서 11개를 돌려주기

              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}

      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
