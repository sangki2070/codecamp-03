import {useRouter} from "next/router"

export default function DynamicRoutingPage(){

    const router = useRouter()


    function onClickMove1(){
        router.push("/05-04-dynamic-routed/1")
    }

    function onClickMove2(){
        router.push("/05-04-dynamic-routed/2")

    }

    function onClickMove3(){
        router.push("/05-04-dynamic-routed/3")

    }


    return(
        <>
            <button onClickMove1={onClickMove1}>1번 게시물로 이동하기</button>
            <button onClickMove2={onClickMove2}>2번 게시물로 이동하기</button>
            <button onClickMove3={onClickMove3}>3번 게시물로 이동하기</button>
        </>
    )
}