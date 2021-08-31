import { useState } from "react" 

import { Wrapper, EmailError, PasswordError } from "../../../styles/02-04-auth-styled";

export default function SignUpPage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)

    }

    function onChangePassword1(event){
        setPassword1(event.target.value)
    }

    function onChangePassword2(event){
        setPassword2(event.target.value)
    }

    function onClickSignup(){
        if(!email.includes("@")){
            setEmailError("이메일에 @가 없습니다.")

        } else {
            setEmail("")
        }

        if(password1 !== password2){
            setPasswordError("비밀번호가 다릅니다.")
        } else {
            setPasswordError("")
        }

    }
    


    return(
        <Wrapper>
            이메일<input type="text" placeholder="이메일을 입력하세요" onChange={onChangeEmail}/>
            <EmailError>{emailError}</EmailError>
            비밀번호<input type="password" placeholder="비밀번호를 입력하세요" onChange={onChangePassword1}/>
            <PasswordError>{passwordError}</PasswordError>
            비밀번호 확인 <input type="password" placeholder="비밀번호를 확인하세요" onChange={onChangePassword2}/>
            <PasswordError>{passwordError}</PasswordError>
            <button onClick={onClickSignup}>가입하기</button>
        </Wrapper>
    )
}