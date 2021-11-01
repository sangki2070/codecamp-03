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
  MyWord,
} from "./ProductsList.styles";

import TodayProductsContainer from "../todayproducts/TodayProducts.container";

// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export default function ProductsListUI(props: any) {
  return (
    <MainWrapper>
      <ProductsListWrapper>
        <TitleWrapper>
          <ListTitle>베스트 상품</ListTitle>
        </TitleWrapper>

        <BestProductsArea>
          {props.bestData?.fetchUseditemsOfTheBest.map((el: any) => (
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
                  <LikeImage src={"/images/productsheart.svg"}></LikeImage>
                </BestProductBoddyWrapper>
                <BestProductLikeWrapper>
                  <BestProductPrice>
                    {Number(el.price).toLocaleString("ko-KR")} 원
                  </BestProductPrice>
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
          <ProductSearch
            placeholder="제품을 검색해 주세요."
            type="text"
            onChange={props.onChangeSearch}
          ></ProductSearch>
          <Calender>2020.12.02 ~ 2020.12.02</Calender>
        </ProductNavWrapper>

        <Loader>
          <ScrollArea
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={false || true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
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
                      <ItemTitle>
                        {el.name
                          .replaceAll(
                            props.myKeyWord,
                            `#$#${props.myKeyWord}#$#`
                          )
                          .split("#$#")
                          .map((el: any) => (
                            <MyWord
                              key={uuidv4()}
                              isMatched={props.myKeyWord === el}
                            >
                              {el}
                            </MyWord>
                          ))}
                      </ItemTitle>
                      <ItemSubTitle>{el.remarks}</ItemSubTitle>
                      {el.tags.map((el: any, index: any) => (
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
                  <ItemPrice>
                    <ItemPriceImage src={"/images/won.svg"}></ItemPriceImage>
                    {Number(el.price).toLocaleString("ko-KR")} 원
                  </ItemPrice>
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
