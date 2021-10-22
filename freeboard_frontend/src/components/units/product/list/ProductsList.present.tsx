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
  WriteButton,
  ButtonArea,
  MainWrapper,
  BestProductImage1,
  ProductsItemImage1,
  ItemBoxWrapper,
  WrordNav1,
  ItemPicture,
} from "./ProductsList.styles";

import TodayProductsContainer from "../todayproducts/TodayProducts.container";

export default function ProductsListUI(props) {
  return (
    <MainWrapper>
      <ProductsListWrapper>
        <TitleWrapper>
          <ListTitle>베스트 상품</ListTitle>
        </TitleWrapper>

        <BestProductsArea>
          {props.bestData?.fetchUseditemsOfTheBest.map((el) => (
            <BestProductWrapper
              key={el._id}
              // id={el._id}
              onClick={props.onClickMovetoProducts(el)}
              // onClick={props.onClickMovetoProducts}
            >
              {el.images[0] ? (
                <BestProductImage1
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></BestProductImage1>
              ) : (
                <BestProductImage
                  src={"/images/noimage3.svg"}
                ></BestProductImage>
              )}

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
            <WrordNav
              onClick={props.onClickNotSoldItems()}
              isSoldOut={props.isSoldOut}
            >
              판매중인 상품
            </WrordNav>
            <WrordNav1
              onClick={props.onClickSoldItems()}
              isSoldOut={props.isSoldOut}
            >
              판매된 상품
            </WrordNav1>
          </WoreNavWrapper>
          <ProductSearch placeholder="제품을 검색해 주세요."></ProductSearch>
          <Calender>2020.12.02 ~ 2020.12.02</Calender>
        </ProductNavWrapper>

        <Loader>
          <ScrollArea
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={false || true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <ProductsItemWrapper
                key={el._id}
                onClick={props.onClickMovetoProducts(el)}
              >
                {el.images[0] ? (
                  <ProductsItemImage
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></ProductsItemImage>
                ) : (
                  <ProductsItemImage1
                    src={"/images/noimage3.svg"}
                  ></ProductsItemImage1>
                )}
                <ItemContentsWrapper>
                  <ItemBoxWrapper>
                    <ItemTitleWrapper>
                      <ItemTitle>{el.name}</ItemTitle>
                      <ItemSubTitle>{el.remarks}</ItemSubTitle>
                      {el.tags.map((el, index) => (
                        <ItemTag key={index}>#{el}</ItemTag>
                      ))}
                    </ItemTitleWrapper>
                    <ItemAvatarWrapper>
                      <ItemSellerWrapper>
                        {el.seller.picture ? (
                          <ItemPicture
                            src={`https://storage.googleapis.com/${el.seller.picture}`}
                          ></ItemPicture>
                        ) : (
                          <ItemAvatar
                            src={"/images/productsavatar.svg"}
                          ></ItemAvatar>
                        )}
                        <ItemSeller>{el.seller.name}</ItemSeller>
                      </ItemSellerWrapper>
                      <ItemPickWrapper>
                        <ItemLikeImage
                          src={"/images/productsheart.svg"}
                        ></ItemLikeImage>
                        <ItemLikeCount>{el.pickedCount}</ItemLikeCount>
                      </ItemPickWrapper>
                    </ItemAvatarWrapper>
                  </ItemBoxWrapper>
                </ItemContentsWrapper>
                <ItemPriceWrapper>
                  <ItemPriceImage src={"/images/won.svg"}></ItemPriceImage>
                  <ItemPrice>{el.price} 원</ItemPrice>
                </ItemPriceWrapper>
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

      <TodayProductsContainer />
    </MainWrapper>
  );
}
