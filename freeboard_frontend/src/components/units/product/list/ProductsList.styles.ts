import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const ScrollArea = styled(InfiniteScroll)`
  /* width: 1240px; */
  height: 960px;
`;

export const Loader = styled.div`
  overflow: auto;
`;

export const BestProductsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProductsListWrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  top: 717px;
  left: 360px;
  background-color: #ffffff;
  margin: 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding-top: 80px;
  padding-bottom: 100px;
  /* padding-left: 102px;
  padding-right: 102px; */
`;

export const ListTitle = styled.div`
  width: 175px;
  height: 42px;
  font-size: 36px;
`;

export const BestProductWrapper = styled.div`
  width: 282px;
  height: 391px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  :hover {
    opacity: 0.6;
    background-color: gray;
  }
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
`;

export const BestProductImage = styled.img`
  width: 242px;
  height: 242px;
`;

export const BestProductTitle = styled.div`
  height: 27px;
  font-size: 18px;
  font-weight: 500;
`;

export const BestProductDate = styled.div`
  height: 18px;
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`;

export const BestProductPrice = styled.div`
  height: 28px;
  font-weight: bold;
  font-size: 18px;
`;

export const BestProductBoddyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  align-items: center;
`;

export const BestProductLikeWrapper = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LikeImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const LikeCount = styled.div``;

export const BestProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ProductNavWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
`;

export const WrordNav = styled.div`
  font-size: 18px;
`;

export const ProductSearch = styled.input`
  width: 400px;
  height: 52px;
  background: #f2f2f2;
  border: none;
  padding: 20px;
`;

export const Calender = styled.div`
  width: 282px;
  height: 52px;
  border: 1px solid #f2f2f2;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const WoreNavWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

export const ProductsItemWrapper = styled.div`
  display: flex;
  height: 160px;
  border-top: 1px solid #bdbdbd;

  :hover {
    opacity: 0.6;
    background-color: gray;
  }
  cursor: pointer;
`;

export const ProductsItemImage = styled.img`
  width: 160px;
  height: 160px;
`;

export const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ItemContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 160px;
  width: 1040px;
  padding-left: 40px;
`;

export const ItemTitle = styled.div``;

export const ItemSubTitle = styled.div``;

export const ItemTag = styled.div``;

export const ItemAvatar = styled.img`
  width: 20px;
  height: 20px;
`;

export const ItemLikeImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const ItemLikeCount = styled.div`
  padding-left: 8px;
`;

export const ItemPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 160px;
`;

export const ItemPriceImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 11px;
`;

export const ItemPrice = styled.div`
  width: 137px;
  height: 36px;
  font-size: 24px;
`;

export const ItemSeller = styled.div`
  width: 60px;
  padding-left: 5px;
`;

export const ItemAvatarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemSellerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemPickWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 1200px;
  height: 1px;
  background-color: #bdbdbd;
  margin-bottom: 28px;
`;

export const WriteButton = styled.button`
  width: 124px;
  height: 52px;
  margin-top: 40px;
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
