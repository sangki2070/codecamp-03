import {useState} from 'react'

export default function CountupStatePage(){

    // const [state이름, state저장도구] = useState("초기값")
    const [count, Setcount] = useState(0)

    function aaa(){
        Setcount(count + 1)
    }

    return(

        <div>
            <div>{count}</div>
            <div>{count}</div>
            <div>{count}</div>
            <div>{count}</div>
            <div>{count}</div>
            <div>{count}</div>
            <button onClick={aaa}>카운트증가</button>
        </div>


    )
}