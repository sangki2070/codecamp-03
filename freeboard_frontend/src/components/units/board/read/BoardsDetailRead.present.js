import {
  Wrapper,
  BoardsWrapper,
  BoardsHeader,
  LeftTitle,
  TitleImage,
  TitleWrapper,
  TitleDate,
  TitleName,
  RightTitle,
  Clip,
  Location,
  WordWrapper,
  LinkWrapper,
  Triangle,
  UnderLine,
  BodyWrapper,
  BodyTitle,
  BodyImage,
  BodyContents,
  BodyVideo,
  CenterContents,
  BodyFooterLike,
  BodyLike,
  BodyDisLike,
  LikeImage,
  DislikeImage,
  LikeWrapper,
  DisLikeWrapper,
  BtnWrapper,
  ListBtn,
  ModyfiyBtn,
  DeleteBtn,
  YoutubeWrapper,
} from "./BoardsDetailRead.styles";

import BoardCommentPage from "../comment/BoardsComment.container";

export default function BoardsDetailUI(props) {
  return (
    <Wrapper>
      <BoardsWrapper>
        <BoardsHeader>
          <LeftTitle>
            <TitleImage></TitleImage>
            <TitleWrapper>
              <TitleName>
                {props.data && props.data.fetchBoard.writer}
              </TitleName>
              <TitleDate>Date: 2021.02.18</TitleDate>
            </TitleWrapper>
          </LeftTitle>
          <RightTitle>
            <WordWrapper>
              서울특별시 영등포구 양산로 200 (영등포동5가, 영등포시장역) 영등포
              타임스퀘어 2층
            </WordWrapper>
            <Triangle></Triangle>
            <LinkWrapper>
              <Clip></Clip>
              <Location></Location>
            </LinkWrapper>
          </RightTitle>
        </BoardsHeader>
        <UnderLine></UnderLine>
        <BodyWrapper>
          <BodyTitle>{props.data && props.data.fetchBoard.title}</BodyTitle>
          <BodyImage></BodyImage>
          <CenterContents>
            <BodyContents>
              {props.data && props.data.fetchBoard.contents}
            </BodyContents>
            <YoutubeWrapper>
              <BodyVideo
                url={props.data?.fetchBoard.youtubeUrl}
                width={486}
                height={240}
              ></BodyVideo>
            </YoutubeWrapper>
          </CenterContents>
        </BodyWrapper>
        <BodyFooterLike>
          <LikeWrapper>
            <LikeImage
              onClick={props.onClickLike}
              id={props.data?.fetchBoard._id}
            ></LikeImage>
            <BodyLike>{props.data?.fetchBoard.likeCount}</BodyLike>
          </LikeWrapper>
          <DisLikeWrapper>
            <DislikeImage
              onClick={props.onClickDisLike}
              id={props.data?.fetchBoard._id}
            ></DislikeImage>
            <BodyDisLike>{props.data?.fetchBoard.dislikeCount}</BodyDisLike>
          </DisLikeWrapper>
        </BodyFooterLike>
      </BoardsWrapper>

      <BtnWrapper>
        <ListBtn
          src="/images/ListBtn.png"
          onClick={props.onClickMovetoList}
        ></ListBtn>
        <ModyfiyBtn
          src="/images/ModyfiyBtn.png"
          onClick={props.onClickModify}
        ></ModyfiyBtn>
        <DeleteBtn
          src="/images/DeleteBtn.png"
          id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        ></DeleteBtn>
      </BtnWrapper>

      <BoardCommentPage></BoardCommentPage>
    </Wrapper>
  );
}
