import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
mutation {
    createBoard(
        writer:"abc"
        title:"첫글"
        contents:"없음"){
        message
        number
    }
  }
` 




export default function GraphqlMutationBoard2Page(){

    const [ createBoard ] = useMutation(CREATE_BOARD)

    async function aaa(){
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
        console.log(result.data.createBoard.message)
    }

    return(
        <button onClick={aaa}>Graphql-API 요청하기!!!</button>
    )

}