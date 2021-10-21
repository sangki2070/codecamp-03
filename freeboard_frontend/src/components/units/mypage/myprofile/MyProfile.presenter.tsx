import {
  MyProfileArea,
  ProfileTitle,
  ProfileSubTitle,
  PasswordInput,
  PasswordWrapper,
  PasswordChangeBtn,
  BtnWrapper,
  ErrorMessage,
} from "./MyProfile.styles";

export default function MyProfileUI(props) {
  return (
    <MyProfileArea>
      <ProfileTitle>비밀번호 변경</ProfileTitle>
      <PasswordWrapper>
        <ProfileSubTitle>현재 비밀번호</ProfileSubTitle>
        <PasswordInput placeholder="현재 비밀번호를 입력해 주세요"></PasswordInput>
      </PasswordWrapper>
      <PasswordWrapper>
        <ProfileSubTitle>새 비밀번호</ProfileSubTitle>
        <PasswordInput
          placeholder="새 비밀번호를 입력해 주세요"
          onChange={props.onChangePassword}
        ></PasswordInput>
      </PasswordWrapper>
      <ErrorMessage>{props.passwordError}</ErrorMessage>
      <PasswordWrapper>
        <ProfileSubTitle>새 비밀번호 확인</ProfileSubTitle>
        <PasswordInput
          placeholder="새 비밀번호를 확인해 주세요"
          onChange={props.onChangeRePassword}
        ></PasswordInput>
      </PasswordWrapper>
      <ErrorMessage>{props.passwordError}</ErrorMessage>
      <BtnWrapper>
        <PasswordChangeBtn onClick={props.onClickPasswordReset}>
          비밀번호 변경
        </PasswordChangeBtn>
      </BtnWrapper>
    </MyProfileArea>
  );
}
