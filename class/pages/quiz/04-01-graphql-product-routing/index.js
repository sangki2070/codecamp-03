import { useMutation, gql } from "@apollo/client"
import { useState } from "react"
import { useRouter } from "next/router"

const CREATE_PRODUCT = gql`
    
    mutation createProduct($seller : String, $createProductInput:CreateProductInput!){
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

export default function CreateProductPage1(){

    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const [sellerName, setSellerName] = useState("")
    const [productName, setProductName] = useState("")
    const [productDetail, setProductDetail] =useState("")
    const [price, setPrice] = useState("")


    function onChangeSeller(event){
        setSellerName(event.target.value)
    }

    function onChangeName(event){
        setProductName(event.target.value)
    }

    function onChangeDetail(event){
        setProductDetail(event.target.value)
    }

    function onChangePrice(event){
        setPrice(event.target.value)
    }

    async function onClickRequest(){

        try {
            const result = await createProduct({
                variables: {
                    seller: sellerName,
                    createProductInput:{
                        name: productName,
                        detail: productDetail,
                        price: Number(price)
                    }
                }
            })
            console.log(result.data.createProduct._id)
            router.push(`/quiz/04-01-graphql-product-routed/${result.data.createProduct._id}`)
        } catch(error){
            console.log(error)
        }
        
        const result = await createProduct({
            variables: {
                seller: sellerName,
                createProductInput:{
                    name: productName,
                    detail: productDetail,
                    price: Number(price)
                }
            }
        })
        console.log(result.data.createProduct._id)
        router.push(`/quiz/04-01-graphql-product-routed/${result.data.createProduct._id}`)
    }



    return(
        <>
            
        판매자 : <input type="text" onChange={onChangeSeller} />
        제목 : <input type="text" onChange={onChangeName}/>
        내용 : <input type="text" onChange={onChangeDetail}/>
        가격 : <input type="text" onChange={onChangePrice}/>
        <button onClick={onClickRequest}>GRAPHQL-API</button>

        </>

    )

}