import ProductWriteUI from "./ProductWrite.present"
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { useRouter } from "next/router"
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries"

export default function ProductWrite (props) {

    const router = useRouter()

    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

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
            router.push(`/quiz/08-03-products-detail/${result.data.createProduct._id}`)
        } catch(error){
            console.log(error)
        }
    }


    async function onClickEdit(){
        try{
            await updateProduct({
                variables:{
                    productId: router.query.Id,
                    updateProductInput:{
                        name: productName,
                        detail: productDetail,
                        price: Number(price)
                    }
                }
            })
            router.push(`/quiz/08-03-products-detail/${router.query.Id}/`)
        } catch(error){

        }     
    }

    return(
        <ProductWriteUI 
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            onClickRequest={onClickRequest}
            isEdit={props.isEdit}
            onClickEdit={onClickEdit}
        />
    )

}

    

