import { useQuery, gql } from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`


export default function ProductDetailPage(){


    const router = useRouter()
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {productId: router.query.Id}
    })

    function onClickMoveToEdit(){
        router.push(`/quiz/08-03-products-detail/${router.query.Id}/edit`)
    }

    return(
        <>
            <div>상품 상세 페이지 입니다!!!</div>
            <div>상품판매자:{ data?.fetchProduct.seller}</div>
            <div>상품명:{ data?.fetchProduct.name}</div>
            <div>상품내용:{ data?.fetchProduct.detail}</div>
            <div>상품가격:{ data?.fetchProduct.price}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
    
}