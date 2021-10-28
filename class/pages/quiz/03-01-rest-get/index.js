import axios from 'axios'

export default function RestQuizPage(){

    async function onClickResult (){

        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)

    }

    


    return(
        <>
            <button onClick = {onClickResult}>REST-API 요청하기</button>


        </>
    )


}