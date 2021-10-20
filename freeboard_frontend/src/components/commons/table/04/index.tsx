import styled from "@emotion/styled";

const TableWrapper = styled.div`
  width: 960px;
  height: 70px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  font-size: 18px;
  font-weight: bold;
`;

const MapWrapper = styled.div`
  width: 960px;
  height: 70px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  font-size: 14px;
`;

const Date1 = styled.span`
  margin-left: 70px;
`;
const ProductsName1 = styled.span`
  margin-left: 250px;
`;
const Transaction1 = styled.span`
  margin-left: 250px;
`;
const Balance1 = styled.span`
  margin-left: 100px;
`;

// ======================= 나누는 영역 =========================

const Date = styled.span`
  margin-left: 60px;
`;
const ProductsName = styled.span`
  margin-left: 180px;
`;
const Transaction = styled.span`
  margin-left: 180px;
`;
const Balance = styled.span`
  margin-left: 90px;
`;

export default function Table04() {
  return (
    <>
      <TableWrapper>
        <Date1>거래일</Date1>
        <ProductsName1>상품명</ProductsName1>
        <Transaction1>거래내역</Transaction1>
        <Balance1>거래 후 잔액</Balance1>
      </TableWrapper>
      <MapWrapper>
        <Date>2020.09.28</Date>
        <ProductsName>한번밖에 안 쓴 노트북 팝니다.</ProductsName>
        <Transaction>+1,000,000</Transaction>
        <Balance>₩1,222,222</Balance>
      </MapWrapper>
    </>
  );
}
