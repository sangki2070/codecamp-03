import {} from "./ProductWrite.styles"


export default function ProductWriteUI(props){

    return(
        <>  
            <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
            판매자 : <input type="text" onChange={props.onChangeSeller} />
            제목 : <input type="text" onChange={props.onChangeName}/>
            내용 : <input type="text" onChange={props.onChangeDetail}/>
            가격 : <input type="text" onChange={props.onChangePrice}/>
            {props.isEdit &&<button onClick={props.onClickEdit}>수정하기</button>}
            {!props.isEdit &&<button onClick={props.onClickRequest}>등록하기</button>}
        </>

    )


}