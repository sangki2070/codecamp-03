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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  margin: 20px;
`;

export default function EventBubblingPage() {
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  function onClickRow(event) {
    alert("클릭!");
    alert(event.currentTarget.id);
  }

  return (
    <>
      <div>이벤트 버블링</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el.id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
