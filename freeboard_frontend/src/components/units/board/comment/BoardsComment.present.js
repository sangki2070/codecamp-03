import {
  CommentWrapper,
  CommentTitle,
  CommentStar,
  CommentImage,
  CommentTitleWrapper,
  StarWrapper,
  CommentBox,
  WriteArea,
  InputArea,
  TextCount,
  CommentSumbmit,
  CommentArea,
  Row,
  Column,
  CommentInput,
} from "./BoardsComment.styles";

export default function BoardCommentBox(props) {
  return (
    <CommentWrapper>
      <CommentTitleWrapper>
        <CommentImage src="/images/comment.png"></CommentImage>
        <CommentTitle>댓글</CommentTitle>
      </CommentTitleWrapper>
      <StarWrapper>
        <CommentInput
          type="text"
          placeholder="작성자"
          onChange={props.onChangeWriter}
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
          placeholder="개인정보를 공유 및 요청하거나,명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될수 있으며, ㅇ에대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        ></WriteArea>
        <InputArea>
          <TextCount>0/100</TextCount>
          <CommentSumbmit onClick={props.onClickComment}>
            등록하기
          </CommentSumbmit>
        </InputArea>
      </CommentBox>

      <CommentArea>
        <Row>
          <Column></Column>
          <Column></Column>
          <Column></Column>
        </Row>
      </CommentArea>
    </CommentWrapper>
  );
}
