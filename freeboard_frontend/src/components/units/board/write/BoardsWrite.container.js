
import BoardWriteUI from './BoardsWrite.present'
import { useState } from 'react'
import { useMutation, useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD} from'./BoardsWrite.queries'



export default function BoardsContainer(props){

    const router = useRouter()


    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [title, setTitle]=useState("")
    const [contents, setContents]=useState("")



    const [nameError, setnameError]=useState("")
    const [passwordError, setpasswordError]=useState("")
    const [contentsError, setcontentsError]=useState("")
    const [titleError, settitleError]=useState("")

    const [check, setCheck]=useState(false)

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)


    const { data } =useQuery(FETCH_BOARD,{
        variables: {boardId:(router.query.BoardsDetailPage)}
     })

    function onChangeName(event){
        setName(event.target.value)
        if(event.target.value !== "" && password !== "" && title !==""  && contents !== ""){
            setCheck(true)
            setnameError("")
        }else {
            setCheck(false)
        }
    }

    function onChangePassword(event){
        setPassword(event.target.value)
        if(name !== "" && event.target.value !== "" && title !==""  && contents !== ""){
            setCheck(true)
            setpasswordError("")
        } else {
            setCheck(false)
        }
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
        if(name !== "" && password !== "" && event.target.value !==""  && contents !== ""){
            setCheck(true)
            settitleError("")
        }else {
            setCheck(false)
        }
    }

    function onChangeContents(event){
        setContents(event.target.value)
        if(name!== "" && password !== "" && title !==""  && event.target.value !== ""){
            setCheck(true)
            setcontentsError("")
        }else {
            setCheck(false)
        }
            
    }

    

    async function onClickModifyBtn(){


        const myVariables = {
            updateBoardInput: {
                title: data.fetchBoard.title,
                contents: data.fetchBoard.contents,
              },
            //
           
            password: password,
            boardId: router.query.BoardsDetailPage
            
        }

        if(title) myVariables.title = title
        if(contents) myVariables.contents = contents
        if(name) myVariables.writer = name

        await updateBoard({variables:myVariables})

        router.push(`/boards/${router.query.BoardsDetailPage}/`)
    } 





        // await updateBoard({
        //     variables: {
        //       updateBoardInput: {
        //         title: name,
        //         contents: contents,
        //       },
        //       password: password,
        //       boardId: router.query.BoardsDetailPage,
        //     },
        //   });

        // default 이전 코드

       

 

    async function onClickRegister(){
        if(name === ""){
            setnameError("이름을 작성해 주세요")
        }
        if(password === ""){
            setpasswordError("비밀번호를 작성해 주세요")
        }
        if(title === ""){
            settitleError("제목을 작성해 주세요")
        }
        if(contents === ""){
            setcontentsError("내용을 작성해 주세요")
        }

        if(name !== "" && password !=="" && title !== "" && contents !== ""){
            alert("게시물을 등록합니다.")
        }

        try{
            const result = await createBoard({
                variables: 
                {   
                    createBoardInput : {
                        writer:name,
                        password:password,
                        title:title,
                        contents:contents,
                    }
                    
                }
    
            })
            // console.log(result.data.createBoard._id)
            router.push(`/boards/${result.data.createBoard._id}`)
        } catch(error){
            console.log(error)
        }


    }

    return(
        <BoardWriteUI
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickRegister={onClickRegister}
        nameError={nameError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        check={check}
        isEdit={props.isEdit}
        onClickModifyBtn={onClickModifyBtn}
        data = {data}
        />
    )


}