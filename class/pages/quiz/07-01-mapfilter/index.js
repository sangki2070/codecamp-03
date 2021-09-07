import {gql,useMutation, useQuery} from '@apollo/client'
import styled from"@emotion/styled"

const FETCH_PRODUCTS = gql`
    query{
    fetchProducts{
        _id
        seller
        name
        detail
        price
        createdAt
    }
    }

`





const Row = styled.div`

    display:flex;
    flex-direction: row;
    border-bottom: 1px solid black;


`
const Column = styled.div`


    width: 20%;

`
const DELETE_PRODUCT = gql `

    mutation deleteProduct($productId:ID){
    deleteProduct(productId:$productId){
        _id
        number
        message
    }
}


`




export default function MapFilterPage(){

    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const {data} = useQuery(FETCH_PRODUCTS)

    async function onClickDelete(event){

        await deleteProduct({
            variables:{productId:(event.target.id)},
            refetchQueries: [{query: FETCH_PRODUCTS}]
        })

        // variables:{{productId: (event.target.id)}},
        // refetchQueries: [{query: FETCH_PRODUCTS}]
    }

    return(
        <div>
            {data?.fetchProducts.map((el, index) => (
                <Row key ={el._id}>            
                        <input type="checkbox" />
                        <Column>{el._id}</Column>
                        <Column>{index}</Column>
                        <Column>{el.seller}</Column>
                        <Column>{el.name}</Column>
                        <Column>{el.detail}</Column>
                        <Column>{el.price}</Column>
                        <Column>{el.createdAt}</Column>
                        <Column><button id={el._id} onClick={onClickDelete} >삭제하기</button></Column>
                </Row> 
            ))}
        </div>
    )   

}
// {data?.fetchProduct.map((el, index) => ()}


// _id: ID
// seller: String
// name: String
// detail: String
// price: Int
// createdAt: Date