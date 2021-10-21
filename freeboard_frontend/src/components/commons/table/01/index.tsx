import styled from "@emotion/styled";

const TableWrapper = styled.div`
  width: 960px;
  height: 70px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
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
  text-align: center;
  /* justify-content: space-around; */
  font-size: 14px;
`;

export const Date = styled.span`
  /* margin-left: 70px; */
  width: 25%;
`;

export const Contents1 = styled.span`
  /* margin-left: 167px; */
  width: 25%;
  color: #ffd600;
`;

export const Contents = styled.span`
  width: 25%;
  color: #0031e0;
`;

export const Contents3 = styled.span`
  width: 25%;
`;

export const Transaction1 = styled.span`
  /* margin-left: 210px; */
  width: 25%;
  color: #ffd600;
`;

export const Transaction = styled.span`
  /* margin-left: 210px; */
  width: 25%;
  color: #0031e0;
`;

export const Transaction3 = styled.span`
  /* margin-left: 210px; */
  width: 25%;
`;

export const Balance = styled.span`
  /* margin-left: 185px; */
  width: 25%;
`;

export default function Table01(props) {
  return (
    <>
      <TableWrapper>
        <Date>날짜</Date>
        <Contents3>내용</Contents3>
        <Transaction3>거래 및 충전 내역</Transaction3>
        <Balance>잔액</Balance>
      </TableWrapper>
      {props.data1?.fetchPointTransactions.map((el) => (
        <MapWrapper key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          {el.amount < 0 ? (
            <>
              <Contents>{el.status}</Contents>
              <Transaction>{el.amount}</Transaction>
            </>
          ) : (
            <>
              <Contents1>{el.status}</Contents1>
              <Transaction1>{el.amount}</Transaction1>
            </>
          )}
          <Balance>₩{el.balance}</Balance>
        </MapWrapper>
      ))}
    </>
  );
}
