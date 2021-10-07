import {
  ProductWriteWrapper,
  FormTitle,
  WriteTitle,
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

import Input01 from "../../../commons/inputs/01";
import Textarea01 from "../../../commons/textareas/01";

export default function ProductsWriteUI(props) {
  return (
    <ProductWriteWrapper>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <TitleWrapper>
          <FormTitle>상품 등록하기</FormTitle>
        </TitleWrapper>
        <WriteTitle>상품명</WriteTitle>
        <Input01
          type="text"
          name="상품명을 작성해주세요."
          register={props.register("myName")}
        ></Input01>
        <WriteTitle>한줄요약</WriteTitle>
        <Input01
          type="text"
          name="한줄요약을 작성해 주세요."
          register={props.register("myRemarks")}
        ></Input01>
        <WriteTitle>상품설명</WriteTitle>
        <Textarea01
          name="상품을 설명해 주세요."
          register={props.register("myContents")}
        ></Textarea01>
        <WriteTitle>판매가격</WriteTitle>
        <Input01
          type="text"
          name="상품가격을 입력해 주세요."
          register={props.register("myPrice")}
        ></Input01>
        <WriteTitle>태그입력</WriteTitle>
        <Input01 name="#태그 #태그 #태그"></Input01>
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
          <ReigsterButton type="submit">등록하기</ReigsterButton>
        </TitleWrapper>
      </form>
    </ProductWriteWrapper>
  );
}
