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
  text-align: center;
`;

const MapWrapper = styled.div`
  width: 960px;
  height: 70px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  font-size: 14px;
  text-align: center;
`;

const Date = styled.span`
  width: 25%;
`;
const ProductsName = styled.span`
  width: 25%;
`;
const Transaction = styled.span`
  width: 25%;
`;
const Balance = styled.span`
  width: 25%;
`;

export default function Table04(props) {
  return (
    <>
      <TableWrapper>
        <Date>거래일</Date>
        <ProductsName>상품명</ProductsName>
        <Transaction>거래내역</Transaction>
        <Balance>거래 후 잔액</Balance>
      </TableWrapper>
      {props.data4?.fetchPointTransactionsOfSelling.map((el) => (
        <MapWrapper key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <ProductsName>{el.useditem.name}</ProductsName>
          <Transaction>{el.amount}</Transaction>
          <Balance>{el.balance}</Balance>
        </MapWrapper>
      ))}
    </>
  );
}
