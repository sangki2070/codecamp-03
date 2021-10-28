import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`

    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
        }
    }

`





export default function FetchProductRoutedPage(){

    const router = useRouter()
    console.log(router.query)
    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId : (router.query.bbb)
        }
    })


    return(

        <>
            <div>프로덕트 상세페이지 입니다.</div>
            <div>productId : {router.query.bbb}</div>
            <div>판매자 : {data && data.fetchProduct.seller}</div>
            <div>제목 : {data && data.fetchProduct.name}</div>
            <div>내용 :{data && data.fetchProduct.detail}</div>
            <div>가격 :{data && data.fetchProduct.price}</div>
        </>

    )

}