import styled from "@emotion/styled";
import { useState } from "react";
import Comments04 from "../../comments/04";
import Comments05 from "../../comments/05";
import { gql, useMutation } from "@apollo/client";

const DELET_USEDITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
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
        picture
        email
      }
      createdAt
    }
  }
`;

const CommentsAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

const CommentsPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: 5px;
`;

const ProfileArea = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const CommentsName = styled.div`
  width: 45px;
  height: 24px;
  font-size: 16px;
`;

const CommentsContents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

const CommentDate = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

const ProfileMainWrapper = styled.div`
  width: 1094px;
  height: 117px;
  margin-left: 100px;
  display: flex;
  /* flex-direction: column; */
  margin-top: 30px;
`;

const RecommentsBtn = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const RecommentsModifyBtn = styled.img`
  width: 18px;
  height: 18px;
`;

const DeleteBtn = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const Arrow = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 17px;
  margin-right: 10px;
`;

export default function Profile01(props: any) {
  const [ModifyBtn, setModifyBtn] = useState("");
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELET_USEDITEM_QUESTION_ANSWER
  );

  const onClickModifyBtn = (el: any) => (event: any) => {
    setModifyBtn(el._id);
    console.log("werss");
  };

  const onClickReQuestionAnswer = (el: any) => (event: any) => {
    props.setReQuestionAnswer(true);
  };

  const onClickRequestionDelete = (el: any) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.isAnswer },
          },
        ],
      });
      console.log("3333", el._id);
      alert("댓글을 삭제합니다.");
    } catch (error) {}
  };

  return (
    <>
      {props.reData?.fetchUseditemQuestionAnswers.map((el: any) => (
        <ProfileMainWrapper key={el._id}>
          <Arrow src="/images/arrow1.svg" />
          {ModifyBtn !== el._id && (
            <>
              {el.user.picture ? (
                <CommentsPicture
                  src={`https://storage.googleapis.com/${el.user.picture}`}
                ></CommentsPicture>
              ) : (
                <CommentsAvatar
                  src={"/images/productsavatar.svg"}
                ></CommentsAvatar>
              )}
              <ProfileArea>
                <CommentsName>{el.user.name}</CommentsName>
                <CommentsContents>{el.contents}</CommentsContents>
                <CommentDate>date : {el.createdAt.slice(0, 10)}</CommentDate>
              </ProfileArea>
              {el.user.email === props.loginData?.fetchUserLoggedIn.email && (
                <RecommentsModifyBtn
                  src="/images/commentbtn.png"
                  onClick={onClickModifyBtn(el)}
                ></RecommentsModifyBtn>
              )}
              <RecommentsBtn
                src="/images/recomments.svg"
                onClick={onClickReQuestionAnswer(el)}
              ></RecommentsBtn>
              {el.user.email === props.loginData?.fetchUserLoggedIn.email && (
                <DeleteBtn
                  src="/images/deletebtn1.svg"
                  onClick={onClickRequestionDelete(el)}
                ></DeleteBtn>
              )}
            </>
          )}
          {ModifyBtn === el._id && (
            <Comments05
              id={el._id}
              isAnswer={props.isAnswer}
              setModifyBtn={setModifyBtn}
            ></Comments05>
          )}
        </ProfileMainWrapper>
      ))}

      {props.reQuestionAnswer && (
        <Comments04
          onChangeReQuestion={props.onChangeReQuestion}
          onClickReQuestionAnswer={props.onClickReQuestionAnswer}
          isReQuestion={props.isReQuestion}
        ></Comments04>
      )}
    </>
  );
}
