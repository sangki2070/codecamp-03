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
    <CommentModifyBox>
      <StarWrapper>
        <CommentInput
          type="text"
          placeholder="작성자"
          defaultValue={props.writer}
        ></CommentInput>
        <CommentInput
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        ></CommentInput>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
        <CommentStar src="/images/Star.png"></CommentStar>
      </StarWrapper>

      <CommentBox>
        <WriteArea
          onChange={props.onChangeContents}
          defaultValue={props.contents}
        ></WriteArea>
        <InputArea>
          <TextCount>0/100</TextCount>
          <CommentSumbmit onClick={props.onClickCommentUpdate}>
            수정하기
          </CommentSumbmit>
        </InputArea>
      </CommentBox>
    </CommentModifyBox>
  );
}
