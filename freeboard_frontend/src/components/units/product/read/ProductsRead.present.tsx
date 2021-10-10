import {
  ProductsReadWrapper,
  HeaderWrapper,
  SellerAvatar,
  HeaderLeft,
  SellerName,
  ProductsDate,
  HeaderRight,
  Upload,
  Location,
  HeaderFlex,
  BodyHeader,
  BodyHeaderLeft,
  BodyDate,
  BodyTitle,
  BodyHeaderRight,
  BodyHeart,
  BodyHeartCount,
  BodyImage,
  BodyImageWrapper,
  BodyWriteArea,
  BodyWriteTag,
  BodyWriteWrapper,
  BodyMapArea,
  ButtonWrapper,
} from "./ProductsRead.styles";

import Lines01 from "../../../commons/lines/01/lines01";
import Buttons01 from "../../../commons/buttons/01";
import Carousel01 from "../../../commons/carousel/01";

export default function ProductsReadUI(props) {
  return (
    <ProductsReadWrapper>
      <HeaderWrapper>
        <SellerAvatar></SellerAvatar>
        <HeaderFlex>
          <HeaderLeft>
            <SellerName>판매자</SellerName>
            <ProductsDate>Date: 2021.02.18</ProductsDate>
          </HeaderLeft>
          <HeaderRight>
            <Upload></Upload>
            <Location></Location>
          </HeaderRight>
        </HeaderFlex>
      </HeaderWrapper>
      <Lines01 />

      <BodyHeader>
        <BodyHeaderLeft>
          <BodyDate>2019 LTE 32GB</BodyDate>
          <BodyTitle>{props.data?.fetchUseditem.name}</BodyTitle>
        </BodyHeaderLeft>
        <BodyHeaderRight>
          <BodyHeart></BodyHeart>
          <BodyHeartCount>20</BodyHeartCount>
        </BodyHeaderRight>
      </BodyHeader>

      <BodyImageWrapper>
        <BodyImage></BodyImage>
        {/* <Carousel01 /> */}
      </BodyImageWrapper>

      <BodyWriteArea>{props.data?.fetchUseditem.contents}</BodyWriteArea>

      <BodyWriteWrapper>
        <BodyWriteTag></BodyWriteTag>
      </BodyWriteWrapper>
      <Lines01 />

      <BodyMapArea></BodyMapArea>
      <Lines01 />

      <ButtonWrapper>
        <Buttons01 name="목록으로" />
        <Buttons01 name="구매하기" />
      </ButtonWrapper>
      <Lines01 />
    </ProductsReadWrapper>
  );
}
