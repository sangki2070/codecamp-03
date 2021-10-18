import styled from "@emotion/styled";
import { useState } from "react";
import Comments04 from "../../comments/04";
import Comments05 from "../../comments/05";

const CommentsAvatar = styled.img`
  width: 40px;
  height: 40px;
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

export default function Profile01(props) {
  const [ModifyBtn, setModifyBtn] = useState("");

  const onClickModifyBtn = (el) => (event) => {
    setModifyBtn(el._id);
    console.log("werss");
  };

  const onClickReQuestionAnswer = (el) => (event) => {
    props.setReQuestionAnswer(true);
  };

  return (
    <>
      {props.reData?.fetchUseditemQuestionAnswers.map((el) => (
        <ProfileMainWrapper key={el._id}>
          {ModifyBtn !== el._id && (
            <>
              <CommentsAvatar
                src={"/images/productsavatar.svg"}
              ></CommentsAvatar>
              <ProfileArea>
                <CommentsName>{el.user.name}</CommentsName>
                <CommentsContents>{el.contents}</CommentsContents>
                <CommentDate>date : </CommentDate>
              </ProfileArea>
              <RecommentsModifyBtn
                src="/images/commentbtn.png"
                onClick={onClickModifyBtn(el)}
              ></RecommentsModifyBtn>
              <RecommentsBtn
                src="/images/recomments.svg"
                onClick={onClickReQuestionAnswer(el)}
              ></RecommentsBtn>
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
