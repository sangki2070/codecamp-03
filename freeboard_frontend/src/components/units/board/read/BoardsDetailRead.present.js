import {Wrapper, BoardsWrapper,
        BoardsHeader,
        LeftTitle,TitleImage,TitleWrapper,TitleDate,TitleName,
        RightTitle,Clip,Location,WordWrapper,LinkWrapper,Triangle,UnderLine,
        BodyWrapper,BodyTitle,BodyImage,BodyContents,BodyVideo,CenterContents,
        BodyFooterLike,BodyLike,BodyDisLike,LikeImage,DislikeImage,LikeWrapper,DisLikeWrapper,
        BtnWrapper, ListBtn, ModyfiyBtn, DeleteBtn,
        CommentWrapper,CommentTitle,CommentStar,CommentImage,CommentTitleWrapper,
        StarWrapper,CommentBox,WriteArea,InputArea,TextCount,CommentSumbmit,
        CommentArea,Row,Column} from "./BoardsDetailRead.styles"

export default function BoardsDetailUI(props){

    return(
        <Wrapper>
            <BoardsWrapper>
                <BoardsHeader>
                    <LeftTitle>
                        <TitleImage></TitleImage>
                        <TitleWrapper>
                            <TitleName>{props.data && props.data.fetchBoard.writer}</TitleName>
                            <TitleDate>Date: 2021.02.18</TitleDate>
                        </TitleWrapper> 
                    </LeftTitle>
                    <RightTitle>
                        <WordWrapper>서울특별시 영등포구 양산로 200 (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</WordWrapper>
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
                        <BodyContents>{props.data && props.data.fetchBoard.contents}</BodyContents>
                        <BodyVideo></BodyVideo>
                        
                    </CenterContents>
                </BodyWrapper>
            <BodyFooterLike>
                <LikeWrapper>
                    <LikeImage></LikeImage>
                    <BodyLike>1920</BodyLike>
                </LikeWrapper>
                <DisLikeWrapper>
                    <DislikeImage></DislikeImage>
                    <BodyDisLike>1920</BodyDisLike>
                </DisLikeWrapper>
            </BodyFooterLike>
                
            </BoardsWrapper>

            <BtnWrapper>
                <ListBtn src="/images/ListBtn.png" onClick={props.onClickMovetoList}></ListBtn>
                <ModyfiyBtn src="/images/ModyfiyBtn.png"  onClick={props.onClickModify} ></ModyfiyBtn>
                <DeleteBtn src="/images/DeleteBtn.png" id={props.data?.fetchBoard._id} onClick={props.onClickDelete} ></DeleteBtn>
            </BtnWrapper>

           
            
            <CommentWrapper>
                <CommentTitleWrapper>
                    <CommentImage src ="/images/comment.png"></CommentImage>
                    <CommentTitle>댓글</CommentTitle>
                </CommentTitleWrapper>
                <StarWrapper>
                    <CommentStar src="/images/Star.png"></CommentStar>
                    <CommentStar src="/images/Star.png"></CommentStar>
                    <CommentStar src="/images/Star.png"></CommentStar>
                    <CommentStar src="/images/Star.png"></CommentStar>
                    <CommentStar src="/images/Star.png"></CommentStar>
                </StarWrapper>
                
                <CommentBox >
                    <WriteArea placeholder="개인정보를 공유 및 요청하거나,명예 훼손, 무단 광고, 불법 정보 유포시 모니터ㅣㅇ 후 삭제될수 있으며, ㅇ에대한 민형사상 책임은 게시자에게 있습니다."></WriteArea>
                    <InputArea>
                        <TextCount>0/100</TextCount>
                        <CommentSumbmit>등록하기</CommentSumbmit>
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

            





        </Wrapper>
    )
}