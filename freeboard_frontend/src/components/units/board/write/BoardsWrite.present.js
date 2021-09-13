import {
  WrapperForm,
  FormTitle,
  AttachmentForm,
  BodyHeader,
  Label,
  BodyHeaderLeft,
  WriteForm1,
  WriteForm2,
  WriteForm3,
  WriteFrom4,
  PasswordForm,
  BodyHeaderRight,
  BodyTitle,
  BodyContent,
  AddressForm,
  AddressButton,
  SearchWrapper,
  YoutubeForm,
  AttachmentBtn,
  Upload,
  AttachmentWrapper,
  RadioForm,
  RadioButton,
  RadionWrapper,
  FooterWrapper,
  FooterBtn1,
  FooterBtn2,
  ErrorMassage,
} from "./BoardsWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <WrapperForm>
      <FormTitle>{props.isEdit ? "게시물 등록" : "게시물 수정"}</FormTitle>

      <BodyHeader>
        <BodyHeaderLeft>
          <Label>작성자</Label>
          <WriteForm1
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchBoard.writer}
          ></WriteForm1>
          <ErrorMassage>{props.nameError}</ErrorMassage>
        </BodyHeaderLeft>
        <BodyHeaderRight>
          <Label>비밀번호</Label>
          <PasswordForm
            type="password"
            placeholder="비밀번호를 적어주세요"
            onChange={props.onChangePassword}
          ></PasswordForm>
          <ErrorMassage>{props.passwordError}</ErrorMassage>
        </BodyHeaderRight>
      </BodyHeader>

      <BodyTitle>
        <Label>제목</Label>
        <WriteForm2
          type="text"
          placeholder="제목을 적어주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></WriteForm2>
        <ErrorMassage>{props.titleError}</ErrorMassage>
      </BodyTitle>

      <BodyContent>
        <Label>내용</Label>
        <WriteForm3
          type="text area"
          placeholder="내용을 입력해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        ></WriteForm3>
        <ErrorMassage>{props.contentsError}</ErrorMassage>
      </BodyContent>

      <AddressForm>
        <Label>주소</Label>
        <SearchWrapper>
          <WriteFrom4 type="text" placeholder="017250"></WriteFrom4>
          <AddressButton>우편번호 검색</AddressButton>
        </SearchWrapper>
        <WriteForm2 type="text"></WriteForm2>
        <WriteForm2 type="text"></WriteForm2>
      </AddressForm>

      <YoutubeForm>
        <Label>유튜브부분</Label>
        <WriteForm2
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutuUrl}
          width={800}
          height={600}
        ></WriteForm2>
      </YoutubeForm>

      <AttachmentForm>
        <Label>사진 첨부</Label>
        <AttachmentWrapper>
          <AttachmentBtn>
            + <Upload>Upload</Upload>
          </AttachmentBtn>
          <AttachmentBtn>
            + <Upload>Upload</Upload>
          </AttachmentBtn>
          <AttachmentBtn>
            + <Upload>Upload</Upload>
          </AttachmentBtn>
        </AttachmentWrapper>
      </AttachmentForm>

      <RadioForm>
        <Label>메인 설정</Label>
        <RadionWrapper>
          <RadioButton
            type="radio"
            checked="checked"
            name="setting"
          ></RadioButton>{" "}
          유튜브
          <RadioButton type="radio" name="setting"></RadioButton> 사진
        </RadionWrapper>
      </RadioForm>

      <FooterWrapper>
        {!props.isEdit && (
          <FooterBtn1 onClick={props.onClickModifyBtn} check={props.check}>
            수정하기
          </FooterBtn1>
        )}
        {props.isEdit && (
          <FooterBtn1 onClick={props.onClickRegister} check={props.check}>
            등록하기
          </FooterBtn1>
        )}
        <FooterBtn2>취소하기</FooterBtn2>
      </FooterWrapper>
    </WrapperForm>
  );
}
