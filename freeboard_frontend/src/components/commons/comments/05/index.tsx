import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

export const WriteWrapper = styled.div`
  width: 1094px;
  height: 117px;
  border: 1px solid #bdbdbd;
  /* margin-top: 40px; */
  display: flex;
  flex-direction: column;
  /* margin-left: 100px; */
`;

export const WriteArea = styled.textarea`
  width: 1094px;
  height: 64px;
  resize: none;
  border: 1px solid #f2f2f2;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 16px;
  color: #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
  }
`;

export const BottomWrapper = styled.div`
  width: 1094px;
  height: 52px;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;

export const BottomWord = styled.div`
  width: 100px;
  height: 24px;
  color: #bdbdbd;
`;

export const BottomBtn = styled.button`
  width: 59px;
  height: 52px;
  background-color: #ffd600;
  color: white;
  font-weight: 500;
  font-size: 12px;
  border: none;
`;

const UPDATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
      contents
      user {
        _id
        name
      }
    }
  }
`;

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      user {
        _id
        name
      }
    }
  }
`;

export default function Comments05(props: any) {
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );
  const [reQuestionAnswer, setReQuestionAnswer] = useState("");

  function onChangeReQuestionModify(event: any) {
    setReQuestionAnswer(event.target.value);
  }

  async function onClickReQuestionModifyUpdate() {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: reQuestionAnswer,
          },
          useditemQuestionAnswerId: props.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.isAnswer },
          },
        ],
      });
      props.setModifyBtn("");
      console.log("lkjlkj");
    } catch (error) {}
  }

  return (
    <>
      <WriteWrapper>
        <WriteArea
          placeholder="답글을 수정해 주요"
          onChange={onChangeReQuestionModify}
        ></WriteArea>
        <BottomWrapper>
          <BottomWord>0/100</BottomWord>
          <BottomBtn onClick={onClickReQuestionModifyUpdate}>
            답글수정
          </BottomBtn>
        </BottomWrapper>
      </WriteWrapper>
    </>
  );
}
