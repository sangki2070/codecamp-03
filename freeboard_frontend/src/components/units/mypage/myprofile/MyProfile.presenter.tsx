import {
  MyProfileArea,
  ProfileTitle,
  ProfileSubTitle,
  PasswordInput,
  PasswordWrapper,
  PasswordChangeBtn,
  BtnWrapper,
  ErrorMessage,
  NameChangeWrapper,
  NameTitle,
  NameInput,
  NameWrapper,
  NameChangeBtn,
  ProfilePictureWrapper,
  ProfilePictureTitle,
  ProfilePicture,
  ProfilePictureSubTitle,
} from "./MyProfile.styles";

import Upload03 from "../../../commons/uploads/03/Upload03.container";

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
      <NameChangeWrapper>
        <NameTitle>이름 변경</NameTitle>
        <NameWrapper>
          <ProfileSubTitle>새 이름 변경</ProfileSubTitle>
          <NameInput
            placeholder="새 이름을 입력해 주세요"
            onChange={props.onChangeName}
          ></NameInput>
        </NameWrapper>
        <BtnWrapper>
          <NameChangeBtn onClick={props.onClickChangeName}>
            이름 변경
          </NameChangeBtn>
        </BtnWrapper>
      </NameChangeWrapper>
      <ProfilePictureTitle>프로필사진 변경</ProfilePictureTitle>
      <ProfilePictureWrapper>
        <ProfilePicture>
          <ProfilePictureSubTitle>새 프로필 사진</ProfilePictureSubTitle>
          <Upload03></Upload03>
        </ProfilePicture>
      </ProfilePictureWrapper>
    </MyProfileArea>
  );
}
