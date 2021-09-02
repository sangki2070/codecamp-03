import { useMutation, gql } from "@apollo/client"


const CREATE_BOARD = gql`
    mutation{
        createBoard(
        writer:"철민"
        title:"문법이 어려워"
        contents:"어려워어려워"
        ){
        number
        message
        }
    }
`


export default function GraphqlBoardPage1(){

    
    const [createBoard] = useMutation(CREATE_BOARD)
    
    async function BoardSubmit(){
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)
        console.log(result.data.createBoard.number)

    }


    return(

        <>
            <button onClick={BoardSubmit}>Graphql-API 요청하기</button>
        </>
    )
}