import { gql, useMutation, useQuery } from "@apollo/client";
import { update } from "lodash";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "612f4257abd89b00293adda7" },
  });

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "612f4257abd89b00293adda7" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "612f4257abd89b00293adda7" },
      //     },
      //   ],

      // 리패치 될때까지 기다려야함
      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "612f4257abd89b00293adda7" },
          data: {
            fetchBoard: {
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 갯수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!</button>
    </>
  );
}
