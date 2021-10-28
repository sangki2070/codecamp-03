import {Writer, Title, Contents, Submit } from "./DynamicBoardWrite.styles"


export default function DynamicBoardWriteUI(props){

    return(

        <> 
            작성자: <Writer type="text" onChange={props.onChangeMyWriter}/><br />
            제목: <Title type="text" onChange={props.onChangeMyTitle}/><br />
            내용: <Contents type="text" onChange={props.onChangeMyContents}/><br />
            <Submit onClick={props.aaa} check = {props.check} >Graphql-API 요청하기!!!</Submit>
        </>

    )
}
