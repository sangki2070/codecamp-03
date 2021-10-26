import {
  Wrapper,
  ListTitle,
  BoxWrapper,
  BestBoardsBox,
  BoxImage,
  BoxTitle,
  ProfileWrapper,
  ProfilePhoto,
  ProfileName,
  BoardsDate,
  LikeWrapper,
  LikePhoto,
  LikeCount,
  PhotoWrapper,
  SearchWrapper,
  SearchArea,
  SearchDate,
  SearchButton,
  TableWrapper,
  Row,
  Column,
  TableHeader,
  TableNumber,
  TableTitle,
  TableWriter,
  TableDate,
  TableLine,
  FooterPage,
  PageNumber,
  BoardSubmit,
  LeftMove,
  Pnumber,
  RightMove,
  MyWord,
  BoxImage1,
} from "./BoardsList.styles";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export default function BoardsListUI(props: any) {
  return (
    <Wrapper>
      <ListTitle>베스트 게시글</ListTitle>

      <BoxWrapper>
        {props.dataBestBoards?.fetchBoardsOfTheBest.map((el: any) => (
          <BestBoardsBox
            key={el._id}
            id={el._id}
            onChange={props.onchangeBestBoards}
            onClick={props.onClickMovetoBoard}
          >
            {el.images[0] ? (
              <BoxImage
                src={`https://storage.googleapis.com/${el.images[0]}`}
              ></BoxImage>
            ) : (
              <BoxImage1 src={"/images/noimage3.svg"}></BoxImage1>
            )}
            <BoxTitle>{el.title}</BoxTitle>
            <ProfileWrapper>
              <PhotoWrapper>
                <ProfilePhoto src="/images/avatar.png"></ProfilePhoto>
                <ProfileName>{el.writer}</ProfileName>
              </PhotoWrapper>
              <LikePhoto src="/images/Like2.png"></LikePhoto>
            </ProfileWrapper>
            <LikeWrapper>
              <BoardsDate>Date : {el.createdAt.substring(0, 10)}</BoardsDate>
              <LikeCount>{el.likeCount}</LikeCount>
            </LikeWrapper>
          </BestBoardsBox>
        ))}
      </BoxWrapper>

      <SearchWrapper>
        <SearchArea
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={props.onChangeSearch}
        >
          {/* <SearchIcon src="/images/SearchIcon.png"></SearchIcon>
                    <SearchContents></SearchContents> */}
        </SearchArea>

        <SearchDate
          type="text"
          placeholder="YYYY.MM.DD - YYYY.MM.DD"
        ></SearchDate>

        <SearchButton>검색하기</SearchButton>
      </SearchWrapper>

      <TableWrapper>
        <TableLine></TableLine>
        <TableHeader>
          <TableNumber>번호</TableNumber>
          <TableTitle>제목</TableTitle>
          <TableWriter>작성자</TableWriter>
          <TableDate>날짜</TableDate>
        </TableHeader>
        {props.data?.fetchBoards.map((el: any, index: any) => (
          <Row key={el._id} id={el._id} onClick={props.onClickMovetoBoard}>
            <Column onClick={props.onClickMovetoBoard}>{index}</Column>
            <Column onClick={props.onClickMovetoBoard}>
              {el.title
                .replaceAll(props.myKeyword, `#$#${props.myKeyword}#$#`)
                .split("#$#")
                .map((el: any) => (
                  <MyWord key={uuidv4()} isMatched={props.myKeyword === el}>
                    {el}
                  </MyWord>
                ))}
            </Column>
            <Column onClick={props.onClickMovetoBoard}>{el.writer}</Column>
            <Column onClick={props.onClickMovetoBoard}>
              {el.createdAt.substring(0, 10)}
            </Column>
          </Row>
        ))}
      </TableWrapper>
      <TableLine></TableLine>

      <FooterPage>
        <PageNumber>
          <LeftMove onClick={props.onClickPrevpage}>&#60;</LeftMove>
          {new Array(10).fill(1).map((_, index) => (
            <Pnumber
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.currentPage}
            >
              {props.startPage + index}
            </Pnumber>
          ))}
          <RightMove onClick={props.onClickNextPage}>&#62;</RightMove>
        </PageNumber>
        <BoardSubmit
          src="/images/BoardSub.png"
          onClick={props.onClickMovetoList}
        ></BoardSubmit>
      </FooterPage>
    </Wrapper>
  );
}
