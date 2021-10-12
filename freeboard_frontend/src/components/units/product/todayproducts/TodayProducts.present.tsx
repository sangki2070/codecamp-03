import {
  TodayProductsWrapper,
  TodayWrapper,
  TodayTitle,
  TodayProductsArea,
  PickArea,
  PickImage,
  PickCount,
  TodayImage,
  TodayImageWrapper,
  TodayProductsName,
  TodayProductsRemarks,
  TodayProductsPrice,
  TodayProductsTag,
  TodayWordWrapper,
} from "./TodayProducts.styles";

export default function TodayProductsUI() {
  return (
    <TodayProductsWrapper>
      <TodayWrapper>
        <TodayTitle>오늘의 상품</TodayTitle>
        <TodayProductsArea>
          <PickArea>
            <PickImage src={"/images/productsheart.svg"}></PickImage>
            <PickCount>20</PickCount>
          </PickArea>
          <TodayImageWrapper>
            <TodayImage src={"/images/noimage3.svg"}></TodayImage>
          </TodayImageWrapper>
          <TodayWordWrapper>
            <TodayProductsName>삼성전자 갤럭시탭A 10.1</TodayProductsName>
            <TodayProductsRemarks>2019 LTE 32GB</TodayProductsRemarks>
            <TodayProductsPrice>240,120원</TodayProductsPrice>
            <TodayProductsTag>#삼성전자 #갤럭시탭 #갓성비</TodayProductsTag>
          </TodayWordWrapper>
        </TodayProductsArea>
      </TodayWrapper>
    </TodayProductsWrapper>
  );
}
