

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
        Delete} from '../../../styles/02-itsroad'


export default function ItsRoadPage(){

    return(

        <Wrapper>
            <TitleWrapper>
                <Logo>로고</Logo>
                <Title>잇츠로드</Title>
            </TitleWrapper>
            <LoginWrapper>
                <FormWrapper>
                    <WriteForm type="text" placeholder="이메일을 입력해주세요" ></WriteForm>
                    <Delete></Delete>
                </FormWrapper>
                <Underline></Underline>
                <FormWrapper>
                    <PasswordForm type="password" placeholder="비밀번호를 입력해주세요"></PasswordForm>
                    <Delete></Delete>
                </FormWrapper>
                <Underline></Underline>
            </LoginWrapper>

            <FooterWrapper>
                <LoginBtn>로그인 버튼 부분</LoginBtn>
                <Search>찾기 부분</Search>
                <Kakao>카카오톡 부분</Kakao>
            </FooterWrapper>
            

            


        </Wrapper>

    )

}