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
  Star,
  ScrollWrapper,
  Loader,
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

        <Star onChange={props.onChangeStar} />
      </StarWrapper>

      <CommentBox>
        <WriteArea
          placeholder="개인정보를 공유 및 요청하거나,명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될수 있으며, 이에대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        ></WriteArea>
        <InputArea>
          <TextCount>0/100</TextCount>
          <CommentSumbmit onClick={props.onClickComment}>
            등록하기
          </CommentSumbmit>
        </InputArea>
      </CommentBox>
      <Loader ref={props.loader}>
        <ScrollWrapper
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={false || true}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el) => {
            console.log(el, props.modify);
            return (
              <CommentBoxWrapper key={el._id}>
                {el._id !== props.modify && (
                  <CommentArea>
                    <CommentPhoto src="/images/commentphoto.png"></CommentPhoto>
                    <CommentHeaderWrapper>
                      <CommentHeader>
                        <CommentNameWrapper>
                          <CommentWriter>{el.writer}</CommentWriter>
                          <Star value={el.rating} disabled />
                        </CommentNameWrapper>
                        <CommentButtonWrapper>
                          <CommentModifyBtn
                            src="/images/commentbtn.png"
                            onClick={props.onClickModifyBtn}
                            id={el._id}
                          ></CommentModifyBtn>
                          <CommentDeleteBtn
                            src="/images/commentbtn2.png"
                            onClick={props.onClickCommentDelete}
                            id={el._id}
                          ></CommentDeleteBtn>
                        </CommentButtonWrapper>
                      </CommentHeader>
                      <CommentContents>{el.contents}</CommentContents>
                      <CommentDate>{el.createdAt}</CommentDate>
                    </CommentHeaderWrapper>
                  </CommentArea>
                )}

                {el._id === props.modify && (
                  <>
                    <UnderLine></UnderLine>
                    <BoardsCommentBox
                      id={el._id}
                      setModify={props.setModify}
                    ></BoardsCommentBox>
                  </>
                )}
              </CommentBoxWrapper>
            );
          })}
        </ScrollWrapper>
      </Loader>

      {/* <Loader>
        <div>
          <ScrollWrapper
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true || false}
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el) => (
              <div key={el._id}>
                <span>{el.Writer}</span>
                <span>{el.title}</span>
                <span>{el.contents}</span>
                <span>{el.createdAt}</span>
              </div>
            ))}
          </ScrollWrapper>
        </div>
      </Loader> */}
    </CommentWrapper>
  );
}
