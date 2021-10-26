import {
  CommentsWrapper,
  CommentsTitleWrapper,
  TitleImage,
  Title,
  CommentsDisplayWrapper,
  CommentsAvatar,
  CommentsName,
  CommentsContents,
  ProfileArea,
  CommentDate,
  CommentsTopWrapper,
  ModifyBtn,
  RecommentsBtn,
  CommentsPicture,
  DeleteBtn,
} from "./ProductsComments.styles";

import Comments01 from "../../../commons/comments/01";
import Comments02 from "../../../commons/comments/02";
import Comments03 from "../../../commons/comments/03";
import Profile01 from "../../../commons/profiles/01";

export default function ProductsCommentsUI(props: any) {
  return (
    <CommentsWrapper>
      <CommentsTitleWrapper>
        <TitleImage></TitleImage>
        <Title>문의하기</Title>
      </CommentsTitleWrapper>

      <Comments01
        onChangeQuestionComments={props.onChangeQuestionComments}
        onClickQuestion={props.onClickQuestion}
      ></Comments01>

      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <CommentsDisplayWrapper key={el._id}>
          {props.isActive !== el._id && (
            <CommentsTopWrapper>
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
                <ModifyBtn
                  src="/images/commentbtn.png"
                  onClick={props.onClickQuestionModify(el)}
                ></ModifyBtn>
              )}
              <RecommentsBtn
                src="/images/recomments.svg"
                onClick={props.onClickAnswer(el)}
              ></RecommentsBtn>
              {el.user.email === props.loginData?.fetchUserLoggedIn.email && (
                <DeleteBtn
                  src="/images/deletebtn1.svg"
                  onClick={props.onClickDelete(el)}
                ></DeleteBtn>
              )}
            </CommentsTopWrapper>
          )}

          {props.isAnswer === el._id && (
            <Comments03
              onChangeReQuestion={props.onChangeReQuestion}
              onClickReQuestion={props.onClickReQuestion}
              isReQuestion={props.isReQuestion}
            ></Comments03>
          )}

          {props.isAnswer === el._id && (
            <Profile01
              reData={props.reData}
              onChangeReQuestion={props.onChangeReQuestion}
              onClickReQuestionAnswer={props.onClickReQuestionAnswer}
              isReQuestion={props.isReQuestion}
              reQuestionAnswer={props.reQuestionAnswer}
              setReQuestionAnswer={props.setReQuestionAnswer}
              isAnswer={props.isAnswer}
              loginData={props.loginData}
            ></Profile01>
          )}

          {props.isActive === el._id && (
            <Comments02
              onClickUpdateQuestion={props.onClickUpdateQuestion}
              onChangeQuestionModify={props.onChangeQuestionModify}
            ></Comments02>
          )}
        </CommentsDisplayWrapper>
      ))}
    </CommentsWrapper>
  );
}
