import {
  CommentModifyBox,
  StarWrapper,
  CommentInput,
  CommentStar,
  CommentBox,
  WriteArea,
  InputArea,
  TextCount,
  CommentSumbmit,
} from "./BoardsCommentModify.styles";

export default function BoardsCommentModifyUI(props) {
  return (
    <CommentModifyBox modify={props.modify}>
      <StarWrapper>
        <CommentInput type="text" placeholder="작성자"></CommentInput>
        <CommentInput type="password" placeholder="비밀번호"></CommentInput>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
      </StarWrapper>

      <CommentBox>
        <WriteArea></WriteArea>
        <InputArea>
          <TextCount>0/100</TextCount>
          <CommentSumbmit>수정하기</CommentSumbmit>
        </InputArea>
      </CommentBox>
    </CommentModifyBox>
  );
}
