import {Wrapper,ListTitle,
        BoxWrapper,
        BestBoardsBox, BoxImage, BoxTitle, 
        ProfileWrapper, ProfilePhoto, ProfileName,BoardsDate, 
        LikeWrapper, LikePhoto, LikeCount, PhotoWrapper,
        SearchWrapper,SearchArea,SearchDate,SearchButton,
        TableWrapper,Row,Column,TableHeader,TableNumber,TableTitle,TableWriter,TableDate,
        TableLine,FooterPage,PageNumber,BoardSubmit,LeftMove,Pnumber,RightMove
        } from "./BoardsList.styles"


export default function BoardsListUI(props){
    return(
        <Wrapper>
            <ListTitle>베스트 게시글</ListTitle>

            <BoxWrapper>
                <BestBoardsBox>
                    <BoxImage src="/images/box1.png"></BoxImage>
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
                </BestBoardsBox>
            </BoxWrapper>

            <SearchWrapper>
                <SearchArea type="text" placeholder="제목을 입력해주세요.">
                    {/* <SearchIcon src="/images/SearchIcon.png"></SearchIcon>
                    <SearchContents></SearchContents> */}
                </SearchArea>

                <SearchDate type="text" placeholder="YYYY.MM.DD - YYYY.MM.DD">
                    
                </SearchDate>

                <SearchButton>
                    검색하기
                </SearchButton>
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
                <Row key ={el._id}>            
                        <Column>{index}</Column>
                        <Column>{el.title}</Column>                          
                        <Column>{el.writer}</Column>
                        <Column>{el.createdAt}</Column>
                </Row>
                ))}
            </TableWrapper>
            <TableLine></TableLine>

            <FooterPage>
                <PageNumber>
                    <LeftMove src="/images/LeftMove.png"></LeftMove>
                    <Pnumber src="/images/num1.png"></Pnumber>
                    <Pnumber src="/images/num2.png"></Pnumber>
                    <RightMove src="/images/RightMove.png"></RightMove>
                </PageNumber>
                <BoardSubmit src="/images/BoardSub.png"></BoardSubmit>
            </FooterPage>



        </Wrapper>
    )
}