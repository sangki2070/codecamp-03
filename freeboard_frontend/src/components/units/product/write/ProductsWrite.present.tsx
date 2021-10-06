import {
  ProductWriteWrapper,
  FormTitle,
  WriteTitle,
  WriteInput,
  WriteEditor,
  MapWrapper,
  MapArea,
  MiddleWrapper,
  AddressWrapper,
  WriteInput2,
  WriteInput3,
  GpsWrapper,
  UploadImage,
  MyRadio,
  ReigsterButton,
  TitleWrapper,
} from "./ProductsWrite.styles";

export default function ProductsWriteUI() {
  return (
    <ProductWriteWrapper>
      <TitleWrapper>
        <FormTitle>상품 등록하기</FormTitle>
      </TitleWrapper>
      <WriteTitle>상품명</WriteTitle>
      <WriteInput placeholder="상품명을 작성해주세요."></WriteInput>
      <WriteTitle>한줄요약</WriteTitle>
      <WriteInput placeholder="한줄요약을 작성해 주세요."></WriteInput>
      <WriteTitle>상품설명</WriteTitle>
      <WriteEditor></WriteEditor>
      <WriteTitle>판매가격</WriteTitle>
      <WriteInput placeholder="상품가격을 입력해 주세요."></WriteInput>
      <WriteTitle>태그입력</WriteTitle>
      <WriteInput placeholder="#태그 #태그 #태그"></WriteInput>
      <MiddleWrapper>
        <MapWrapper>
          <WriteTitle>거래위치</WriteTitle>
          <MapArea></MapArea>
        </MapWrapper>
        <AddressWrapper>
          <WriteTitle>GPS</WriteTitle>
          <GpsWrapper>
            <WriteInput3></WriteInput3>
            <WriteInput3></WriteInput3>
          </GpsWrapper>
          <WriteTitle>주소</WriteTitle>
          <WriteInput2></WriteInput2>
          <WriteInput2></WriteInput2>
        </AddressWrapper>
      </MiddleWrapper>
      <WriteTitle>사진첨부</WriteTitle>
      <UploadImage></UploadImage>
      <WriteTitle>메인 사진 촬영</WriteTitle>
      <MyRadio>사진1</MyRadio>
      <MyRadio>사진2</MyRadio>
      <TitleWrapper>
        <ReigsterButton>등록하기</ReigsterButton>
      </TitleWrapper>
    </ProductWriteWrapper>
  );
}
