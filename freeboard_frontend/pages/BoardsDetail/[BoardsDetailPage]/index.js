import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"


const FETCH_BOARD = gql`

    query fetchBoard($boardId : ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents
        }

    }

`


import {Wrapper, BoardsWrapper,
        BoardsHeader,
        LeftTitle,TitleImage,TitleWrapper,TitleDate,TitleName,
        RightTitle,Clip,Location,WordWrapper,LinkWrapper,Triangle,UnderLine,
        BodyWrapper,BodyTitle,BodyImage,BodyContents,BodyVideo,CenterContents,
        BodyFooterLike,BodyLike,BodyDisLike,LikeImage,DislikeImage,LikeWrapper,DisLikeWrapper
        } from "../../../styles/Detail.js"


export default function BoardsDetailPage(){


    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{
        variables: {
            boardId:(router.query.BoardsDetailPage)
        }
    })





    return(

        <Wrapper>
            <BoardsWrapper>
                <BoardsHeader>
                    <LeftTitle>
                        <TitleImage></TitleImage>
                        <TitleWrapper>
                            <TitleName>{data && data.fetchBoard.writer}</TitleName>
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
                    <BodyTitle>{data && data.fetchBoard.title}</BodyTitle>
                    <BodyImage></BodyImage>
                    <CenterContents>
                        <BodyContents>{data && data.fetchBoard.contents}</BodyContents>
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
        </Wrapper>

    )
}