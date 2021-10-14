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
} from "./ProductsComments.styles";

import Comments01 from "../../../commons/comments/01";

export default function ProductsCommentsUI(props) {
  return (
    <CommentsWrapper>
      <>
        <CommentsTitleWrapper>
          <TitleImage></TitleImage>
          <Title>문의하기</Title>
        </CommentsTitleWrapper>

        <Comments01 onSubmit={props.handleSubmit(props.onClickQuestion)} />
      </>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <CommentsDisplayWrapper key={el._id}>
          <CommentsTopWrapper>
            <CommentsAvatar src={"/images/productsavatar.svg"}></CommentsAvatar>
            <ProfileArea>
              <CommentsName>{el.user.name}</CommentsName>
              <CommentsContents>{el.contents}</CommentsContents>
              <CommentDate>date : {el.createdAt.slice(0, 10)}</CommentDate>
            </ProfileArea>
          </CommentsTopWrapper>
        </CommentsDisplayWrapper>
      ))}
    </CommentsWrapper>
  );
}
