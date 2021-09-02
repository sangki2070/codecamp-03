import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT =gql`

    mutation createProduct($seller:String, $createProductInput: CreateProductInput!) {
        createProduct(
        seller: $seller, 
        createProductInput:$createProductInput
        ){
            _id
            number
            message
        }
    }
`







export default function GraphqlMutationProductPage(){

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const [sellerName, setSellerName] = useState()
    const [prouductName, setProductName] = useState()
    const [productDetail, setProductDetail] = useState()
    const [productPrice, setProductPrice] = useState()


    function onChangeSellerName(event){
        setSellerName(event.target.value)
    }

    function onChangeProductName(event){
        setProductName(event.target.value)
    }

    function onChangeProductDetail(event){
        setProductDetail(event.target.value)
    }

    function onChangeProductPrice(event){
        setProductPrice(event.target.value)

    }
    

    async function onClickSubmit(){
        const result = await createProduct({
            variables:{
                seller: sellerName,
                createProductInput:{
                    name: prouductName,
                    detail : productDetail,
                    price: Number(productPrice)
                }
            }
        })
        console.log(result.data.createProduct._id)

    }


    return(
        <>
            판매자 : <input type="text" onChange = {onChangeSellerName}/>
            상품명 : <input type="text" onChange = {onChangeProductName}/>
            상품상세: <input type="text" onChange = {onChangeProductDetail}/>
            상품가격: <input type="text" onChange = {onChangeProductPrice}/>
            <button onClick={onClickSubmit}>상품 등록하기!</button>
        </>
    )


}

