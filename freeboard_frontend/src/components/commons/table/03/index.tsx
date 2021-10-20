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
  font-size: 14px;
`;

const Date1 = styled.span`
  margin-left: 50px;
`;
const ProductsName1 = styled.span`
  margin-left: 250px;
`;
const Transaction1 = styled.span`
  margin-left: 200px;
`;
const Balance1 = styled.span`
  margin-left: 60px;
`;
const Seller1 = styled.span`
  margin-left: 60px;
`;

// ======================= 나누는 영역 =========================

const Date = styled.span`
  margin-left: 50px;
`;
const ProductsName = styled.span`
  margin-left: 170px;
`;
const Transaction = styled.span`
  margin-left: 118px;
`;
const Balance = styled.span`
  margin-left: 57px;
`;
const Seller = styled.span`
  margin-left: 67px;
`;

export default function Table03(props) {
  return (
    <>
      <TableWrapper>
        <Date1>거래일</Date1>
        <ProductsName1>상품명</ProductsName1>
        <Transaction1>거래내역</Transaction1>
        <Balance1>거래 후 잔액</Balance1>
        <Seller1>판매자</Seller1>
      </TableWrapper>
      {props.data3?.fetchPointTransactionsOfBuying.map((el) => (
        <MapWrapper key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <ProductsName>{el.useditem.name}</ProductsName>
          <Transaction>{el.amount}</Transaction>
          <Balance>{el.balance}</Balance>
          <Seller>{el.useditem.seller}</Seller>
        </MapWrapper>
      ))}
    </>
  );
}
