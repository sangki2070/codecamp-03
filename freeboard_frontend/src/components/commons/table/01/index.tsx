import styled from "@emotion/styled";

const TableWrapper = styled.div`
  width: 960px;
  height: 70px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
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

export const Date = styled.span`
  margin-left: 70px;
`;

export const Contents = styled.span`
  margin-left: 167px;
`;

export const Transaction = styled.span`
  margin-left: 210px;
`;

export const Balance = styled.span`
  margin-left: 185px;
`;

export default function Table01(props) {
  return (
    <>
      <TableWrapper>
        <span>날짜</span>
        <span>내용</span>
        <span>거래 및 충전 내역</span>
        <span>잔액</span>
      </TableWrapper>
      {props.data1?.fetchPointTransactions.map((el) => (
        <MapWrapper key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <Contents>{el.status}</Contents>
          <Transaction>{el.amount}</Transaction>
          <Balance>{el.balance}</Balance>
        </MapWrapper>
      ))}
    </>
  );
}
