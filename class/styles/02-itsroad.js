import styled from '@emotion/styled/'

export const Wrapper = styled.div`
    width: 640px;
    height: 1200px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 100px;
    background-image: url('/images/pizza.jpg');
    margin: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

// 타이틀 래퍼 부분


export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 350px;

`



export const Logo = styled.div`
    width: 100px;
    height: 100px;
    background-image: url("/images/Road.svg")
    /* padding-bottom: 27px; */

`
export const Title = styled.div`
    width: 218px;
    height: 62px;
    color: #ffffff;
    font-size: 60px;
    /* padding-bottom: 162px; */

`

// 로그인 래퍼 부분

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;


`
export const FormWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const WriteForm = styled.input`
    width: 540px;
    height: 30px;
    color: #ffffff;
    font-size: 24px;
    border:1px solid white; 
    background-color:transparent;
    border:none;

`
export const Delete = styled.div`
    width: 20px;
    height: 20px;
    /* background-color: red; */
    background-image: url('/images/delete.png')

`

export const Underline = styled.div`
    width: 540px;
    height: 1px;
    background-color: grey;

`
export const PasswordForm = styled.input`
    width: 540px;
    height: 30px;
    color: #ffffff;
    color: #ffffff;
    font-size: 24px;
    border:1px solid white; 
    background-color:transparent;
    border:none;
`

// 푸터 래퍼 부분

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* padding-bottom: 83px; */
    height: 350px;
    padding-bottom: 80px;



`


export const LoginBtn = styled.button`
    width: 540px;
    height: 76px;
    background-color: #ff1b6d;
    border-radius: 38px;
    border: none;
    opacity: 0.6;
    color: #ffffff;
    font-size: 26px;
`

export const Search = styled.div`
    width: 400px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    color: #ffffff;
    font-size: 20px;
`
export const Kakao = styled.div`
    width: 540px;
    height: 76px;
    border: solid 2px #fae100;
    border-radius: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fae100;
    font-size: 26px;
`

export const KakaoImage = styled.div`
    width: 32px;
    height: 30px;
    background-image: url('/images/kakao.svg')
    

`

export const KakaoLogin = styled.div`
    width: 228px;
    height: 26px;
    margin-left: 30px;
`

export const ErrorWord = styled.div`
    color: #ff1b6d;
    font-size: 18px;    

`