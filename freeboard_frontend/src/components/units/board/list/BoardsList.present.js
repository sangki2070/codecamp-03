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
} from "./BoardsList.styles";
import { v4 as uuidv4 } from "uuid";

export default function BoardsListUI(props) {
  return (
    <Wrapper>
      <ListTitle>베스트 게시글</ListTitle>

      <BoxWrapper>
        {props.dataBestBoards?.fetchBoardsOfTheBest.map((el) => (
          <BestBoardsBox key={el._id} onChange={props.onchangeBestBoards}>
            <BoxImage src="/images/box1.png"></BoxImage>
            <BoxTitle>{el.title}</BoxTitle>
            <ProfileWrapper>
              <PhotoWrapper>
                <ProfilePhoto src="/images/avatar.png"></ProfilePhoto>
                <ProfileName>{el.writer}</ProfileName>
              </PhotoWrapper>
              <LikePhoto src="/images/Like2.png"></LikePhoto>
            </ProfileWrapper>
            <LikeWrapper>
              <BoardsDate>{el.createdAt}</BoardsDate>
              <LikeCount>{el.likeCount}</LikeCount>
            </LikeWrapper>
          </BestBoardsBox>
        ))}
        {/* <BestBoardsBox>
          <BoxImage src="/images/box2.png"></BoxImage>
          <BoxTitle>게시물 제목입니다.</BoxTitle>
          <ProfileWrapper>
            <PhotoWrapper>
              <ProfilePhoto src="/images/avatar.png"></ProfilePhoto>
              <ProfileName>노원두</ProfileName>
            </PhotoWrapper>
            <LikePhoto src="/images/Like2.png"></LikePhoto>
          </ProfileWrapper>
          <LikeWrapper>
            <BoardsDate>Date: 2021.02.18</BoardsDate>
            <LikeCount>356</LikeCount>
          </LikeWrapper>
        </BestBoardsBox>

        <BestBoardsBox>
          <BoxImage src="/images/box3.png"></BoxImage>
          <BoxTitle>게시물 제목입니다.</BoxTitle>
          <ProfileWrapper>
            <PhotoWrapper>
              <ProfilePhoto src="/images/avatar.png"></ProfilePhoto>
              <ProfileName>노원두</ProfileName>
            </PhotoWrapper>
            <LikePhoto src="/images/Like2.png"></LikePhoto>
          </ProfileWrapper>
          <LikeWrapper>
            <BoardsDate>Date: 2021.02.18</BoardsDate>
            <LikeCount>356</LikeCount>
          </LikeWrapper>
        </BestBoardsBox>
        <BestBoardsBox>
          <BoxImage src="/images/box4.png"></BoxImage>
          <BoxTitle>게시물 제목입니다.</BoxTitle>
          <ProfileWrapper>
            <PhotoWrapper>
              <ProfilePhoto src="/images/avatar.png"></ProfilePhoto>
              <ProfileName>노원두</ProfileName>
            </PhotoWrapper>
            <LikePhoto src="/images/Like2.png"></LikePhoto>
          </ProfileWrapper>
          <LikeWrapper>
            <BoardsDate>Date: 2021.02.18</BoardsDate>
            <LikeCount>356</LikeCount>
          </LikeWrapper>
        </BestBoardsBox> */}
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
          <TableDate>날찌</TableDate>
        </TableHeader>
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id} id={el._id} onClick={props.onClickMovetoBoard}>
            <Column onClick={props.onClickMovetoBoard}>{index}</Column>
            <Column onClick={props.onClickMovetoBoard}>
              {el.title
                .replaceAll(props.myKeyword, `#$#${props.myKeyword}#$#`)
                .split("#$#")
                .map((el) => (
                  <MyWord key={uuidv4()} isMatched={props.myKeyword === el}>
                    {el}
                  </MyWord>
                ))}
            </Column>
            <Column onClick={props.onClickMovetoBoard}>{el.writer}</Column>
            <Column onClick={props.onClickMovetoBoard}>{el.createdAt}</Column>
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
