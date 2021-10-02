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

export default function SignupUI() {
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
        ></SignupInput>
        <ErrorMessage>이메일은 필수 입력입니다.</ErrorMessage>
        <Label>이름</Label>

        <SignupInput
          type="text"
          placeholder="이름을 입력해 주세요"
        ></SignupInput>
        <ErrorMessage>이름은 필수 입력입니다.</ErrorMessage>
        <Label>비밀번호</Label>

        <SignupInput
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        ></SignupInput>
        <ErrorMessage>비밀번호는 필수 입력입니다.</ErrorMessage>
        <Label>비밀번호 확인</Label>

        <SignupInput
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        ></SignupInput>
        <ErrorMessage>비밀번호는 필수 입력입니다.</ErrorMessage>
        <SignupBtn>회원가입하기</SignupBtn>
      </SignupInnerWrapper>
      <SignupRightBack src={"/images/a4.png"}></SignupRightBack>
    </SignupWrapper>
  );
}
