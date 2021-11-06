import {
  LoginWrapper,
  LoginInnerWrapper,
  LoginLogo,
  LoginInput,
  ErrorMessage,
  MyCheck,
  CheckWrapper,
  LoginBtn,
  UnderLine,
  SignupWrapper,
  SignupWord,
  LoginHeader,
  LoginWord,
  LoginRightBack,
} from "./login.styles";

export default function LoginUI(props: any) {
  return (
    <LoginWrapper>
      <LoginInnerWrapper>
        <LoginHeader>
          <LoginLogo src={"/images/tvlogo1.jpeg"} />
          <LoginWord>TradingZone</LoginWord>
        </LoginHeader>
        <LoginInput
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeMyEmail}
        ></LoginInput>
        <ErrorMessage>{props.emailError}</ErrorMessage>
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={props.onchangeMyPassword}
        ></LoginInput>
        <ErrorMessage>{props.passwordError}</ErrorMessage>
        <CheckWrapper>
          <MyCheck></MyCheck>
          <div>로그인 상태 유지</div>
        </CheckWrapper>
        <LoginBtn onClick={props.onClickLogin}>로그인하기</LoginBtn>
        <UnderLine></UnderLine>
        <SignupWrapper>
          <SignupWord>이메일 찾기</SignupWord>
          <div>|</div>
          <SignupWord>비밀번호 찾기</SignupWord>
          <div>|</div>
          <SignupWord>회원가입</SignupWord>
        </SignupWrapper>
      </LoginInnerWrapper>
      <LoginRightBack src={"/images/a1.png"} />
    </LoginWrapper>
  );
}
