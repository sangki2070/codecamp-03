import {Header, Writer,Title, TitleNumber, Contents} from"./DynamicBoardRead.styles"
// import {useRouter} from"./DynamicBoardRead.queries"




export default function DynamicBoardReadUI(props){

    return(

        <>
            <Header>게시물 상세페이지 입니다.</Header>
            <TitleNumber>게시글 번호: {props.router.query.number}</TitleNumber>
            <Writer>게시글 작성자 : {props.data && props.data.fetchBoard.writer }</Writer>
            <Title>게시글 제목 : {props.data && props.data.fetchBoard.title }</Title>
            <Contents>게시글 내용 :{props.data && props.data.fetchBoard.contents } </Contents>
        </>
    )

}