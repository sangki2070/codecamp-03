import { MyButton, Title } from "./BoardWrite.styles"


export default function BoardWriteUI(props){


    return(
        <>  
            <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
            <Title zzz={true}>컨테이너 프리젠터 패턴!!!</Title>
            작성자: <input type="text" onChange={props.onChangeMyWriter} defaultValue={props.data?.fetchBoard.writer}/><br />
            제목: <input type="text" onChange={props.onChangeMyTitle} defaultValue={props.data?.fetchBoard.title} /><br />
            내용: <input type="text" onChange={props.onChangeMyContents} defaultValue={props.data?.fetchBoard.contents}/><br />
            {!props.isEdit &&<MyButton onClick={props.aaa} qqq={props.qqq}>등록하기</MyButton>}
            {props.isEdit &&<MyButton onClick={props.onClickEdit} qqq={props.qqq}>수정하기</MyButton>}
        </>
    )
}