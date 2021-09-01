import { useState } from 'react'

// import { useState } from 'react'
import {Wrapper,
        Logo,
        Title,
        WriteForm,
        Underline,
        PasswordForm,
        Search,
        Kakao,
        LoginBtn,
        LoginWrapper,
        TitleWrapper,
        FooterWrapper,
        FormWrapper,
        Delete,
        KakaoImage,
        KakaoLogin,
        ErrorWord} from '../../../styles/02-itsroad'


export default function ItsRoadPage(){

    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeemail(event){
        setEmail(event.target.value)

    }

    function onChangePassword(event){
        setPassWord(event.target.value)

    }

    function onClickLogin(){

        if(!email.includes("@") || email === ""){
            setEmailError("@가 없습니다.")
        }

        if(password === "" || password < 8 && password > 16){
            setPasswordError("비밀번호는 8자리 ~ 16자리 사이로 입력해 주세요")
        }

    }



    return(

        <Wrapper>
            <TitleWrapper>
                <Logo></Logo>
                <Title>잇츠로드</Title>
            </TitleWrapper>
            <LoginWrapper>
                <FormWrapper>
                    <WriteForm type="text" placeholder="이메일을 입력해주세요" onChange={onChangeemail}></WriteForm>
                    <Delete></Delete>
                </FormWrapper>
                <Underline></Underline>
                <ErrorWord>{emailError}</ErrorWord>
                <FormWrapper>
                    <PasswordForm type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangePassword}></PasswordForm>
                    <Delete></Delete>
                </FormWrapper>
                <Underline></Underline>
                <ErrorWord>{passwordError}</ErrorWord>
            </LoginWrapper>

            <FooterWrapper>
                <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
                <Search>
                    <div>이메일 찾기</div>
                    |
                    <div>비밀번호 찾기</div>
                    |
                    <div>회원가입</div>
                </Search>
                <Kakao>
                    <KakaoImage></KakaoImage>
                    <KakaoLogin>카카오톡으로 로그인</KakaoLogin>
                </Kakao>
            </FooterWrapper>
            

            


        </Wrapper>

    )

}