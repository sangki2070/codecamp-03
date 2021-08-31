import {useState} from 'react'

export default function AuthNumberStatePage(){

    const [auth, setAuth] = useState("000000")

    function aaa(){
        setAuth(String(Math.floor((Math.random() * 100000))).padStart(6,"0"))
    }

    return(
        <div>
            <div>{auth}</div>
            <button onClick={aaa}>인증번호전송</button>
        </div>
    )
}