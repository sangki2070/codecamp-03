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
  ScrollArea,
  Loader,
  BestProductsArea,
  ItemSellerWrapper,
  ItemPickWrapper,
  Line,
  WriteButton,
  ButtonArea,
  PriceArea,
} from "./ProductsList.styles";

export default function ProductsListUI(props) {
  return (
    <ProductsListWrapper>
      <TitleWrapper>
        <ListTitle>베스트 상품</ListTitle>
      </TitleWrapper>

      <BestProductsArea>
        {props.bestData?.fetchUseditemsOfTheBest.map((el) => (
          <BestProductWrapper
            key={el._id}
            // id={el._id}
            onClick={props.onClickMovetoProducts(el._id)}
            // onClick={props.onClickMovetoProducts}
          >
            <BestProductImage src={"/images/noimage3.svg"}></BestProductImage>
            <BestProductTitle>{el.name}</BestProductTitle>
            <BestProductInfoWrapper>
              <BestProductBoddyWrapper>
                <BestProductDate>{el.remarks}</BestProductDate>
                <BestProductPrice>{el.price}</BestProductPrice>
              </BestProductBoddyWrapper>
              <BestProductLikeWrapper>
                <LikeImage src={"/images/productsheart.svg"}></LikeImage>
                <LikeCount>{el.pickedCount}</LikeCount>
              </BestProductLikeWrapper>
            </BestProductInfoWrapper>
          </BestProductWrapper>
        ))}
      </BestProductsArea>

      <ProductNavWrapper>
        <WoreNavWrapper>
          <WrordNav>판매중인 상품</WrordNav>
          <WrordNav>판매된 상품</WrordNav>
        </WoreNavWrapper>
        <ProductSearch placeholder="제품을 검색해 주세요."></ProductSearch>
        <Calender>2020.12.02 ~ 2020.12.02</Calender>
      </ProductNavWrapper>

      <Loader ref={props.loader}>
        <ScrollArea
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={false || true}
          useWindow={false}
        >
          {props.data?.fetchUseditems.map((el) => (
            <ProductsItemWrapper
              key={el._id}
              onClick={props.onClickMovetoProducts(el._id)}
            >
              <ProductsItemImage
                src={"/images/noimage3.svg"}
              ></ProductsItemImage>
              <ItemContentsWrapper>
                <ItemTitleWrapper>
                  <ItemTitle>{el.name}</ItemTitle>
                  <ItemSubTitle>{el.remarks}</ItemSubTitle>
                  <ItemTag>#삼성전자 #갤럭시탭 #갓성비</ItemTag>
                  <ItemAvatarWrapper>
                    <ItemSellerWrapper>
                      <ItemAvatar
                        src={"/images/productsavatar.svg"}
                      ></ItemAvatar>
                      <ItemSeller>{el.seller.name}</ItemSeller>
                    </ItemSellerWrapper>
                    <ItemPickWrapper>
                      <ItemLikeImage
                        src={"/images/productsheart.svg"}
                      ></ItemLikeImage>
                      <ItemLikeCount>{el.pickedCount}</ItemLikeCount>
                    </ItemPickWrapper>
                  </ItemAvatarWrapper>
                </ItemTitleWrapper>
                <ItemPriceWrapper>
                  <ItemPriceImage src={"/images/won.svg"}></ItemPriceImage>
                  <ItemPrice>{el.price} 원</ItemPrice>
                </ItemPriceWrapper>
              </ItemContentsWrapper>
            </ProductsItemWrapper>
          ))}
        </ScrollArea>
      </Loader>
      <ButtonArea>
        <WriteButton onClick={props.onClickProductsWrite()}>
          상품 등록하기
        </WriteButton>
      </ButtonArea>
    </ProductsListWrapper>
  );
}
