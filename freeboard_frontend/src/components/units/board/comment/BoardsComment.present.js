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
  CommentInput,
  CommentPhoto,
  CommentWriter,
  CommentHeader,
  CommentButtonWrapper,
  CommentModifyBtn,
  CommentDeleteBtn,
  CommentHeaderWrapper,
  CommentContents,
  CommentDate,
  CommentNameWrapper,
  UnderLine,
  CommentBoxWrapper,
} from "./BoardsComment.styles";

import BoardsCommentBox from "../modify/BoardsCommentModify.container";

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

      {props.data?.fetchBoardComments.map((el) => (
        <CommentBoxWrapper key={el._id}>
          <CommentArea modify={props.modify}>
            <CommentPhoto src="/images/commentphoto.png"></CommentPhoto>
            <CommentHeaderWrapper>
              <CommentHeader>
                <CommentNameWrapper>
                  <CommentWriter>{el.writer}</CommentWriter>
                  <CommentStar src="/images/Star.png"></CommentStar>
                  <CommentStar src="/images/Star.png"></CommentStar>
                  <CommentStar src="/images/Star.png"></CommentStar>
                  <CommentStar src="/images/Star.png"></CommentStar>
                  <CommentStar src="/images/Star.png"></CommentStar>
                </CommentNameWrapper>
                <CommentButtonWrapper>
                  <CommentModifyBtn
                    src="/images/commentbtn.png"
                    onClick={props.onClickModifyBtn}
                  ></CommentModifyBtn>
                  <CommentDeleteBtn src="/images/commentbtn2.png"></CommentDeleteBtn>
                </CommentButtonWrapper>
              </CommentHeader>
              <CommentContents>{el.contents}</CommentContents>
              <CommentDate>{el.createdAt}</CommentDate>
            </CommentHeaderWrapper>
          </CommentArea>
          <UnderLine></UnderLine>
          <BoardsCommentBox
            modify={props.modify}
            id={el._id}
          ></BoardsCommentBox>
        </CommentBoxWrapper>
      ))}
    </CommentWrapper>
  );
}
