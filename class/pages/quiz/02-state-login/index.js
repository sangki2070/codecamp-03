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

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[emailError,setEmailerror] = useState("")
    const[passwordError,setPassworderror] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setEmail(event.target.value)
    }

    function onCLickLogin(){
        if(!email.includes("@")){
            setEmailerror("이메일 주소를 다시 확인해주세요")
        }
    
        if(password < 8) {
            setPassworderror("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
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
                    <WriteForm type="text" placeholder="이메일을 입력해주세요" onChange={onChangeEmail}></WriteForm>
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
                <LoginBtn onClick={onCLickLogin}>로그인</LoginBtn>
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