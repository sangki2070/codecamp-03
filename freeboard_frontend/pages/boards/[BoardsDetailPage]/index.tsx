import Head from "next/head";
import { request } from "graphql-request";
import { gql } from "@apollo/client";

import BoardsDetialContainerPage from "../../../src/components/units/board/read/BoardsDetailRead.container";

export default function BoardsDetailPage1(props: any) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchBoard.name} />
        <meta property="og:description" content={props.fetchBoard.writer} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchBoard.images[0]}`}
        />
      </Head>
      <BoardsDetialContainerPage></BoardsDetialContainerPage>
    </>
  );
}

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      images
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql12",
    FETCH_BOARD,
    { boardId: context.query.useditemId }
  );
  return {
    props: {
      fetchBoard: result.fetchBoard,
    },
  };
};
