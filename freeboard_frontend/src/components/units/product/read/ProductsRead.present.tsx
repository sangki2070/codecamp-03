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
  BodyName,
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
        <SellerAvatar src={"/images/productsavatar.svg"}></SellerAvatar>
        <HeaderFlex>
          <HeaderLeft>
            <SellerName>{props.data?.fetchUseditem.seller.name}</SellerName>
            <ProductsDate>
              Date: {props.data?.fetchUseditem.createdAt.slice(0, 10)}
            </ProductsDate>
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
          <BodyName>2019 LTE 32GB</BodyName>
          <BodyTitle>{props.data?.fetchUseditem.name}</BodyTitle>
        </BodyHeaderLeft>
        <BodyHeaderRight>
          <BodyHeart
            src={"/images/productsheart.svg"}
            onClick={props.onClickPick}
          ></BodyHeart>
          <BodyHeartCount>
            {props.data?.fetchUseditem.pickedCount}
          </BodyHeartCount>
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
        <Buttons01 name="목록으로" onClick={props.onClickMoveProducts} />
        <Buttons01 name="삭제하기" onClick={props.onClickDelete} />
        <Buttons01 name="수정하기" onClick={props.onClickMoveEdit} />
      </ButtonWrapper>
      <Lines01 />
    </ProductsReadWrapper>
  );
}