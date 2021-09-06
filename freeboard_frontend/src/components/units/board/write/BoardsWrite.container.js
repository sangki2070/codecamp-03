
import BoardWriteUI from './BoardsWrite.present'
import { useState } from 'react'
import { useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD} from'./BoardsWrite.queries'


export default function BoardsContainer(){

    const router = useRouter()

    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [title, setTitle]=useState("")
    const [contents, setContents]=useState("")

    const [zipCode, setZipCode]=useState("")
    const [adressSubmit, setAdressSubmit]=useState("")
    const [adressDetail, setAdressDetail]=useState("")
    const [youtubeSubmit, setYoutubeSubmit]=useState("")


    const [nameError, setnameError]=useState("")
    const [passwordError, setpasswordError]=useState("")
    const [contentsError, setcontentsError]=useState("")
    const [titleError, settitleError]=useState("")

    const [check, setCheck]=useState(false)

    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeName(event){
        setName(event.target.value)
        if(name !== "" && password !== "" && title !==""  && contents !== ""){
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
        if(name!== "" && password !== "" && title !==""  && event.target.value !== ""){
            setCheck(true)
            setcontentsError("")
        }else {
            setCheck(false)
        }
            
    }


    function onChangeZipcode(event){
        setZipCode(event.target.value)
    }

    function onChangeAdressSubmit(event){
        setAdressSubmit(event.target.value)
    }
    
    function onChangeAdressDetail(event){
        setAdressDetail(event.target.value)
    }

    function onChangeYoutubeSubmit(event){
        setYoutubeSubmit(event.target.value)
    }

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
                        youtubeUrl:youtubeSubmit,
                        boardAddress:{
                            zipcode:zipCode,
                            address:adressSubmit,
                            addressDetail:adressDetail
                            }
                    }
                    
                }
    
            })
            console.log(result.data.createBoard._id)
            router.push(`/BoardsDetail/${result.data.createBoard._id}`)
        } catch(error){
            console.log(error)
        }

        const result = await createBoard({
            variables: 
            {   
                createBoardInput : {
                    writer:name,
                    password:password,
                    title:title,
                    contents:contents,
                    youtubeUrl:youtubeSubmit,
                    boardAddress:{
                        zipcode:zipCode,
                        address:adressSubmit,
                        addressDetail:adressDetail
                        }
                }
                
            }

        })
        console.log(result.data.createBoard._id)
        router.push(`/BoardsDetail/${result.data.createBoard._id}`)
    }

    return(
        <BoardWriteUI
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeZipcode={onChangeZipcode}
        onChangeAdressSubmit={onChangeAdressSubmit}
        onChangeAdressDetail={onChangeAdressDetail}
        onChangeYoutubeSubmit={onChangeYoutubeSubmit}
        onChangeContents={onChangeContents}
        onClickRegister={onClickRegister}
        nameError={nameError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        check={check}

        />
    )


}