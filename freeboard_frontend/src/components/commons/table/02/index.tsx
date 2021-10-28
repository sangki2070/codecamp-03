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
  font-size: 14px;
`;

const Date = styled.span`
  /* margin-left: 70px; */
  width: 20%;
`;

const UID = styled.span`
  /* margin-left: 145px; */
  width: 40%;
`;

const ChargeContents = styled.span`
  /* margin-left: 153px; */
  width: 20%;
  color: #ffd600;
`;

const ChargeContents1 = styled.span`
  /* margin-left: 153px; */
  width: 20%;
`;

const Balance = styled.span`
  /* margin-left: 175px; */
  width: 20%;
`;

export default function Table02(props: any) {
  return (
    <>
      <TableWrapper>
        <Date>충전일</Date>
        <UID>결제 ID</UID>
        <ChargeContents1>충전내역</ChargeContents1>
        <Balance>충전 후 잔액</Balance>
      </TableWrapper>
      {props.data2?.fetchPointTransactionsOfLoading.map((el: any) => (
        <MapWrapper key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <UID>{el.impUid}</UID>
          <ChargeContents>+{el.amount}</ChargeContents>
          <Balance>₩{el.balance}</Balance>
        </MapWrapper>
      ))}
    </>
  );
}
