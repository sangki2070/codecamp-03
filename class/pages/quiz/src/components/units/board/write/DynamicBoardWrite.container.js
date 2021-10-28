import DynamicBoardWriteUI from './DynamicBoardWrite.presenter'
import { useMutation} from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { CREATE_BOARD } from './DynamicBoardWrite.queries'


export default function DynamicBoardWrite(){

    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const [check, setCheck]=useState(true)

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
        if(event.target.value !=="" && myTitle !== "" && myContents !==""){
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
        if(myWriter !=="" && event.target.value !== "" && myContents !==""){
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
        if(myWriter !=="" && myTitle !== "" && event.target.value !==""){
            setCheck(true)
        } else {
            setCheck(false)
        }
    }




    async function aaa(){

        try {
            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) //옛날 방식
            router.push(`/quiz/05-02-dynamic-board-read/${result.data.createBoard.number}`) // 최신방식 템플릿 리터럴
        } catch(error){
            console.log(error)
        }

        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents }
        })
        console.log(result)
        console.log(result.data.createBoard.number)
        // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) //옛날 방식
        router.push(`/quiz/05-02-dynamic-board-read/${result.data.createBoard.number}`) // 최신방식 템플릿 리터럴
        
    }


    return(
        <DynamicBoardWriteUI
            onChangeMyWriter={onChangeMyWriter}
            onChangeMyTitle={onChangeMyTitle}
            onChangeMyContents={onChangeMyContents}
            aaa={aaa}
            check={check}
            />
    )    
}