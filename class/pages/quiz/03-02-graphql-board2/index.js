import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(
        writer:$writer
        title:$title
        contents:$contents){
        message
        number
    }
  }
` 


// mutation createBoard($writer: String, $title: String, $contents: String){
//     createBoard
//         writer:$writer
//         title:$title
//         contents:$contents{
//             message
//             number
//             _id
//         }
//     )
// }

// `

// `
// mutation createBoard($writer: String, $title: String, $contents: String){
//     createBoard(
//         writer:$writer
//         title:$title
//         contents:$contents){
//         message
//         number
//     }
//   }
// ` 


export default function GraphqlBoardPage2(){

    const [createBoard] = useMutation(CREATE_BOARD)

    const [title,setTitle] = useState("")
    const [writer,setWriter] = useState("")
    const [contents,setContents] =useState("")

    function onChangeTitle(event){
        setTitle(event.target.value)
    }

    function onChangeWriter(event){
        setWriter(event.target.value)
    }

    function onChangeContents(event){
        setContents(event.target.value)
    }

    async function onClickSubmit(){
        const result = await createBoard({
            variables:{
                writer: writer,
                title: title,
                contents : contents
            }
        })

        console.log(result.data.createBoard.number)
        
    }

    return(
        <>
            작성자 :<input type="text" onChange={onChangeTitle}/>
            제목 :<input type="text" onChange={onChangeWriter}/>
            내용 :<input type="text" onChange={onChangeContents}/>
            <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
        </>
    )

}

