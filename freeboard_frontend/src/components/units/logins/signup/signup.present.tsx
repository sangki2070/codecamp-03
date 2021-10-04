import {
  SignupWrapper,
  SignupInput,
  SignupInnerWrapper,
  Label,
  ErrorMessage,
  HeaderTitle,
  HeaderWrapper,
  SignupBtn,
  SignupRightBack,
} from "./signup.styles";

export default function SignupUI(props) {
  return (
    <SignupWrapper>
      <SignupInnerWrapper>
        <HeaderWrapper>
          <HeaderTitle>회원가입</HeaderTitle>
        </HeaderWrapper>
        <Label>이메일</Label>
        <SignupInput
          type="text"
          placeholder="이메일을 입력해 주세요"
          onChange={props.onChangeEmail}
        ></SignupInput>
        <ErrorMessage>{props.emailError}</ErrorMessage>
        <Label>이름</Label>

        <SignupInput
          type="text"
          placeholder="이름을 입력해 주세요"
          onChange={props.onChangeName}
        ></SignupInput>
        <ErrorMessage>{props.nameError}</ErrorMessage>
        <Label>비밀번호</Label>
        <SignupInput
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={props.onChangePassword}
        ></SignupInput>
        <ErrorMessage>{props.passwordError}</ErrorMessage>
        <Label>비밀번호 확인</Label>
        <SignupInput
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={props.onchangePasswordCheck}
        ></SignupInput>
        <ErrorMessage>{props.passwrodCheckError}</ErrorMessage>
        <SignupBtn onClick={props.onClickUserReigister}>회원가입하기</SignupBtn>
      </SignupInnerWrapper>
      <SignupRightBack src={"/images/a4.png"}></SignupRightBack>
    </SignupWrapper>
  );
}
