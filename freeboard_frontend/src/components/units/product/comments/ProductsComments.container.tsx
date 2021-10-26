import ProductsCommentsUI from "./ProductsComments.present";

import { useMutation, useQuery } from "@apollo/client";

import {
  FETCH_USED_ITEM_QUESTIONS,
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USEDITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
} from "./ProductsComments.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductsCommentsContainer() {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const [isActive, setIsActive] = useState("");
  const [question, setQuestion] = useState("");
  const [isAnswer, setIsAnswer] = useState("");
  const [updateQuestion, setUpdateQuestion] = useState("");
  const [reQuestion, setReQuestion] = useState("");
  const [isReQuestion, setIsReQuestion] = useState(true);
  const [reQuestionAnswer, setReQuestionAnswer] = useState(false);
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.ProductsDetailPage) },
  });
  const { data: reData } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: isAnswer },
  });

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  function onChangeQuestionComments(event: any) {
    setQuestion(event.target.value);
  }

  function onChangeQuestionModify(event: any) {
    setUpdateQuestion(event.target.value);
  }

  function onChangeReQuestion(event: any) {
    setReQuestion(event.target.value);
    console.log("aasdf");
  }

  const onClickDelete = (el: any) => async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.ProductsDetailPage },
          },
        ],
      });
      alert("댓글을 삭제합니다.");
    } catch (error: any) {
      console.log(error);
    }
  };

  async function onClickQuestion() {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: question,
          },
          useditemId: router.query.ProductsDetailPage,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.ProductsDetailPage },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }

  const onClickQuestionModify = (el: any) => (event: any) => {
    setIsActive(el._id);
    console.log("2번", isActive);
    // setIsActive("");
  };

  const onClickAnswer = (el: any) => (event: any) => {
    setIsAnswer(el._id);
    console.log("ss");
    setIsReQuestion(true);
  };

  async function onClickUpdateQuestion() {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: updateQuestion,
          },
          useditemQuestionId: isActive,
        },
      });
      console.log("aaa");
    } catch (error) {}

    setIsActive("");
  }

  async function onClickReQuestion() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: reQuestion,
          },
          useditemQuestionId: isAnswer,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: isAnswer },
          },
        ],
      });
      console.log(isAnswer);
      setIsReQuestion(false);
    } catch (error) {}
  }

  async function onClickReQuestionAnswer() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: reQuestion,
          },
          useditemQuestionId: isAnswer,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: isAnswer },
          },
        ],
      });
      console.log(isAnswer);
      setReQuestionAnswer(false);
    } catch (error) {}
  }

  return (
    <ProductsCommentsUI
      data={data}
      onClickQuestion={onClickQuestion}
      onChangeQuestionComments={onChangeQuestionComments}
      onClickQuestionModify={onClickQuestionModify}
      isActive={isActive}
      onClickUpdateQuestion={onClickUpdateQuestion}
      onChangeQuestionModify={onChangeQuestionModify}
      onClickAnswer={onClickAnswer}
      isAnswer={isAnswer}
      onChangeReQuestion={onChangeReQuestion}
      onClickReQuestion={onClickReQuestion}
      reData={reData}
      setIsReQuestion={setIsReQuestion}
      isReQuestion={isReQuestion}
      setReQuestionAnswer={setReQuestionAnswer}
      reQuestionAnswer={reQuestionAnswer}
      onClickReQuestionAnswer={onClickReQuestionAnswer}
      onClickDelete={onClickDelete}
      loginData={loginData}
    />
  );
}
