import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function PageNationBasicPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  return (
    <>
      <div>페이지 네이션</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el.id}>{el.title}</div>
        ))}
      </div>
      <br />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <Page key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </Page>
      ))}
    </>
  );
}
