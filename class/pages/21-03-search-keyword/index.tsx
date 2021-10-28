import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 50px;
`;

const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;

interface Iprops {
  isMatched: boolean;
}

const MyWord = styled.span`
  color: ${(props: Iprops) => (props.isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const [mySearch, setMySearch] = useState();
  const [myKeyWord, setMyKeyword] = useState();

  function onChangeSearch(event) {
    setMySearch(event.target.value);
  }

  function onClickSearch() {
    refetch({ search: mySearch, page: 1 });
    setMyKeyword(mySearch);
  }

  function onClickPage(event) {
    refetch({ search: myKeyWord, page: Number(event.target.id) });
  }

  return (
    <>
      <div>검색 페이지!!!</div>
      검색어 : <input type="text" onChange={onChangeSearch} />{" "}
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              .replaceAll(myKeyWord, `#$#${myKeyWord}#$#`)
              .split("#$#")
              .map((el) => (
                <MyWord key={uuidv4()} isMatched={myKeyWord === el}>
                  {el}
                </MyWord>
              ))}
          </Column>
          <Column>{el.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
