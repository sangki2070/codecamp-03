import {} from "./ProductRead.styles"

export default function ProductReadUI(props){

    return(
        <>
            <div>프로덕트 상세페이지 입니다.</div>
            <div>productId : {props.router.query.product}</div>
            <div>판매자 : {props.data && props.data.fetchProduct.seller}</div>
            <div>제목 : {props.data && props.data.fetchProduct.name}</div>
            <div>내용 :{props.data && props.data.fetchProduct.detail}</div>
            <div>가격 :{props.data && props.data.fetchProduct.price}</div>
        </>
    )
}