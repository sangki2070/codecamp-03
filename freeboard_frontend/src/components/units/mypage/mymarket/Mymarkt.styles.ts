import styled from "@emotion/styled";

export const MyMarketPageWrapper = styled.div`
  margin-top: 80px;
  margin-left: 40px;
`;

export const MyProducts = styled.span`
  margin-right: 20px;
  font-size: ${(props) => (props.isMarket === true ? "20px" : "")};
  color: ${(props) => (props.isMarket === true ? "blue" : "")};
  font-weight: ${(props) => (props.isMarket === true ? "bold" : "")};
  cursor: pointer;
`;

export const MyFavorite = styled.span`
  margin-left: 20px;
  font-size: ${(props) => (props.isMarket === false ? "20px" : "")};
  color: ${(props) => (props.isMarket === false ? "blue" : "")};
  font-weight: ${(props) => (props.isMarket === false ? "bold" : "")};
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  margin-top: 34px;
`;

export const SearchArea = styled.input`
  width: 368px;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 5px;
  border: none;
  margin-right: 24px;
  padding-left: 20px;
`;

export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  color: white;
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;
