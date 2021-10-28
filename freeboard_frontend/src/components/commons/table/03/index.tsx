import styled from "@emotion/styled";

const TableWrapper = styled.div`
  width: 960px;
  height: 70px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  text-align: center;
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
  text-align: center;
`;

const Date = styled.span`
  width: 20%;
`;
const ProductsName = styled.span`
  width: 30%;
`;
const Transaction = styled.span`
  width: 20%;
  color: #0031e0;
`;
const Transaction1 = styled.span`
  width: 20%;
`;
const Balance = styled.span`
  width: 20%;
`;
const Seller = styled.span`
  width: 10%;
`;

export default function Table03(props: any) {
  return (
    <>
      <TableWrapper>
        <Date>거래일</Date>
        <ProductsName>상품명</ProductsName>
        <Transaction1>거래내역</Transaction1>
        <Balance>거래 후 잔액</Balance>
        <Seller>판매자</Seller>
      </TableWrapper>
      {props.data3?.fetchPointTransactionsOfBuying.map((el: any) => (
        <MapWrapper key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <ProductsName>{el.useditem.name}</ProductsName>
          <Transaction>{el.amount}</Transaction>
          <Balance>{el.balance}</Balance>
          <Seller></Seller>
        </MapWrapper>
      ))}
    </>
  );
}
