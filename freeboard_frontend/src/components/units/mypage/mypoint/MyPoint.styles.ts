import styled from "@emotion/styled";

export const MyPointArea = styled.div`
  margin-top: 80px;
  margin-left: 40px;
`;

export const AllPoint = styled.span<{ isChange: boolean; isChanged: boolean }>`
  margin-right: 12px;
  color: ${(props) => (props.isChange && !props.isChanged ? "blue" : "")};
  font-weight: ${(props) => (props.isChange && !props.isChanged ? "bold" : "")};
  font-size: ${(props) => (props.isChange && !props.isChanged ? "20px" : "")};
  cursor: pointer;
`;

export const ChargePoint = styled.span<{
  isChange: boolean;
  isChanged: boolean;
}>`
  margin-right: 12px;
  margin-left: 12px;
  color: ${(props) => (!props.isChange && !props.isChanged ? "blue" : "")};
  font-weight: ${(props) =>
    !props.isChange && !props.isChanged ? "bold" : ""};
  font-size: ${(props) => (!props.isChange && !props.isChanged ? "20px" : "")};
  cursor: pointer;
`;

export const BuyPoint = styled.span<{ isChange: boolean; isChanged: boolean }>`
  margin-right: 12px;
  margin-left: 12px;
  color: ${(props) => (!props.isChange && props.isChanged ? "blue" : "")};
  font-weight: ${(props) => (!props.isChange && props.isChanged ? "bold" : "")};
  font-size: ${(props) => (!props.isChange && props.isChanged ? "20px" : "")};
  cursor: pointer;
`;

export const SellPoint = styled.span<{ isChange: boolean; isChanged: boolean }>`
  margin-left: 12px;
  color: ${(props) => (props.isChange && props.isChanged ? "blue" : "")};
  font-weight: ${(props) => (props.isChange && props.isChanged ? "bold" : "")};
  font-size: ${(props) => (props.isChange && props.isChanged ? "20px" : "")};
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  margin-top: 34px;
`;
