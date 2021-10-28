import {useRouter} from 'next/router'

export default function StaticRoughingPage(){

    const router = useRouter()

    function onClickMove(){
        router.push('/05-02-static-roughted')

    }


    return(
        <>
            <button onClick={onClickMove}>정적 라우팅 페이지 이동!!!</button>
        </>
    )
}