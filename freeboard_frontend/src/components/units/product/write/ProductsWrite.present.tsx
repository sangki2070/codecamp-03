import {
  ProductWriteWrapper,
  FormTitle,
  WriteTitle,
  MapWrapper,
  MiddleWrapper,
  UploadImage,
  MyRadio,
  ReigsterButton,
  TitleWrapper,
  Gps,
  MapAdTitle,
} from "./ProductsWrite.styles";

import Input01 from "../../../commons/inputs/01";
import Input02 from "../../../commons/inputs/02";
import ReactQuil01 from "../../../commons/webeditor/reactQuil";

import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
import MapArea from "../../../commons/map/01";

export default function ProductsWriteUI(props: any) {
  return (
    <ProductWriteWrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickSubmit)
            : props.handleSubmit(props.onClickUpdate)
        }
      >
        {/* <form onSubmit={props.handleSubmit(props.onClickSubmit)}> */}
        <TitleWrapper>
          <FormTitle>{props.isEdit ? "게시물 등록" : "게시물 수정"}</FormTitle>
        </TitleWrapper>
        <WriteTitle>상품명</WriteTitle>
        <Input01
          type="text"
          name="상품명을 작성해주세요."
          register={props.register("myName")}
          defaultValue={props.fetchData?.fetchUseditem.name}
        ></Input01>
        <WriteTitle>한줄요약</WriteTitle>
        <Input01
          type="text"
          name="한줄요약을 작성해 주세요."
          register={props.register("myRemarks")}
          defaultValue={props.fetchData?.fetchUseditem.remarks}
        ></Input01>
        <WriteTitle>상품설명</WriteTitle>

        <ReactQuil01
          name="상품을 설명해 주세요."
          onChange={props.onChangeMyEditor}
          defaultValue={props.fetchData?.fetchUseditem.contents}
          isEdit={props.isEdit}
        ></ReactQuil01>
        <WriteTitle>판매가격</WriteTitle>
        <Input01
          type="text"
          name="상품가격을 입력해 주세요."
          register={props.register("myPrice")}
          defaultValue={props.fetchData?.fetchUseditem.price}
        ></Input01>
        <WriteTitle>태그입력</WriteTitle>
        <Input02
          type="text"
          name="#태그 #태그 #태그"
          register={props.register("myTags")}
          defaultValue={props.fetchData?.fetchUseditem.tags}
          // fetchData={props.fetchData}
        ></Input02>
        <MiddleWrapper>
          <MapWrapper>
            <MapAdTitle>
              <WriteTitle>거래위치</WriteTitle>
              <Gps>GPS</Gps>
            </MapAdTitle>
            <MapArea
              onChangeAddressDetail={props.onChangeAddressDetail}
            ></MapArea>
          </MapWrapper>
        </MiddleWrapper>
        <WriteTitle>사진첨부</WriteTitle>
        <UploadImage>
          {new Array(3).fill(1).map((el, index) => (
            <Uploads02
              onChangeFiles={props.onChangeFiles}
              defaultFileUrl={props.fetchData?.fetchUseditem.images?.[index]}
              key={`${el}_${index}`}
              index={index}
              type="submit"
            />
          ))}
        </UploadImage>
        <WriteTitle>메인 사진 촬영</WriteTitle>
        <MyRadio>사진1</MyRadio>
        <MyRadio>사진2</MyRadio>
        <TitleWrapper>
          {!props.isEdit && (
            <ReigsterButton type="submit">수정하기</ReigsterButton>
          )}
          {props.isEdit && (
            <ReigsterButton type="submit">등록하기</ReigsterButton>
          )}
        </TitleWrapper>
      </form>
    </ProductWriteWrapper>
  );
}
