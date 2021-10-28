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
  LinkWrapper,
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
import { Tooltip } from "antd";

export default function BoardsDetailUI(props: any) {
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
            <LinkWrapper>
              <Clip></Clip>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
              >
                <Location></Location>
              </Tooltip>
            </LinkWrapper>
          </RightTitle>
        </BoardsHeader>
        <UnderLine></UnderLine>
        <BodyWrapper>
          <BodyTitle>{props.data && props.data.fetchBoard.title}</BodyTitle>
          <div>
            {/* {props.data?.fetchBoard.images.map((el, index) => {
              <BodyImage
                src={`https://storage.googleapis.com/${el}`}
                key={index}
              ></BodyImage>;
            })} */}
            {props.data?.fetchBoard.images
              ?.filter((el: any) => el !== "")
              .map((el: any) => (
                <BodyImage
                  src={`https://storage.googleapis.com/${el}`}
                  key={el}
                />
              ))}
          </div>
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
