import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      message
      number
    }
  }
`;

export default function GraphqlMutationBoard3Page() {
  const [createBoard] = useMutation(CREATE_BOARD);
  // 04-04-graphql-mutation-board3과 비하면서 학습하기

  const [myInputs, setMyInputs] = useState({
    myWriter: "",
    myTitle: "",
    myContents: "",
  });

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
      // writer:myInputs.writer
      // title: myInputs.title
      // contents; myInputs.contents
      // writer : "철수"
    });
  }

  async function aaa() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.number);
  }

  return (
    <>
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={aaa}>Graphql-API 요청하기!!!</button>
    </>
  );
}
