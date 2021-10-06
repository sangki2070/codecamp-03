import {
  ProductsListWrapper,
  ListTitle,
  BestProductWrapper,
  TitleWrapper,
  BestProductImage,
  BestProductTitle,
  BestProductDate,
  BestProductPrice,
  BestProductBoddyWrapper,
  BestProductLikeWrapper,
  LikeImage,
  LikeCount,
  BestProductInfoWrapper,
  ProductNavWrapper,
  WrordNav,
  ProductSearch,
  Calender,
  WoreNavWrapper,
  ProductsItemWrapper,
  ProductsItemImage,
  ItemContentsWrapper,
  ItemTitle,
  ItemSubTitle,
  ItemTag,
  ItemAvatar,
  ItemLikeImage,
  ItemLikeCount,
  ItemPriceWrapper,
  ItemPriceImage,
  ItemPrice,
  ItemTitleWrapper,
  ItemSeller,
  ItemAvatarWrapper,
} from "./ProductsList.styles";

export default function ProductsListUI() {
  return (
    <ProductsListWrapper>
      <TitleWrapper>
        <ListTitle>베스트 상품</ListTitle>
      </TitleWrapper>
      <BestProductWrapper>
        <BestProductImage></BestProductImage>
        <BestProductTitle>삼성전자 갤럭시 탭A 10.1</BestProductTitle>
        <BestProductInfoWrapper>
          <BestProductBoddyWrapper>
            <BestProductDate>2019LTE 32GB</BestProductDate>
            <BestProductPrice>240,120원</BestProductPrice>
          </BestProductBoddyWrapper>
          <BestProductLikeWrapper>
            <LikeImage></LikeImage>
            <LikeCount>120</LikeCount>
          </BestProductLikeWrapper>
        </BestProductInfoWrapper>
      </BestProductWrapper>

      <ProductNavWrapper>
        <WoreNavWrapper>
          <WrordNav>판매중인 상품</WrordNav>
          <WrordNav>판매된 상품</WrordNav>
        </WoreNavWrapper>
        <ProductSearch placeholder="제품을 검색해 주세요."></ProductSearch>
        <Calender>2020.12.02 ~ 2020.12.02</Calender>
      </ProductNavWrapper>

      <ProductsItemWrapper>
        <ProductsItemImage></ProductsItemImage>

        <ItemContentsWrapper>
          <ItemTitleWrapper>
            <ItemTitle>삼성전자 갤럭시 탭A 10.1</ItemTitle>
            <ItemSubTitle>2019 LTE 32GB</ItemSubTitle>
            <ItemTag>#삼성전자 #갤럭시탭 #갓성비</ItemTag>
            <ItemAvatarWrapper>
              <ItemAvatar></ItemAvatar>
              <ItemSeller>판매자</ItemSeller>
              <ItemLikeImage></ItemLikeImage>
              <ItemLikeCount>20</ItemLikeCount>
            </ItemAvatarWrapper>
          </ItemTitleWrapper>
          <ItemPriceWrapper>
            <ItemPriceImage></ItemPriceImage>
            <ItemPrice>1,684,620원</ItemPrice>
          </ItemPriceWrapper>
        </ItemContentsWrapper>
      </ProductsItemWrapper>
    </ProductsListWrapper>
  );
}
