import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #b6cbcc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
`;

export const MarketItem = styled.div`
  color: #0b2243;
  font-weight: bold;
`;

export const Marketprice = styled.span`
  color: darkred;
  font-weight: bold;
  :hover {
    color: white;
  }
  cursor: pointer;
`;

export const MarketWrapper = styled.div`
  width: 230px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

export const MarketSmallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
