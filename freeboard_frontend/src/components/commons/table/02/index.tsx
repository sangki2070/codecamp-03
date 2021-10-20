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

  font-size: 14px;
`;

const Date = styled.span`
  margin-left: 70px;
`;

const UID = styled.span`
  margin-left: 145px;
`;

const ChargeContents = styled.span`
  margin-left: 153px;
`;

const Balance = styled.span`
  margin-left: 175px;
`;

export default function Table02(props) {
  return (
    <>
      <TableWrapper>
        <span>충전일</span>
        <span>결제 ID</span>
        <span>충전내역</span>
        <span>충전 후 잔액</span>
      </TableWrapper>
      {props.data2?.fetchPointTransactionsOfLoading.map((el) => (
        <MapWrapper key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <UID>{el.impUid}</UID>
          <ChargeContents>{el.amount}</ChargeContents>
          <Balance>{el.balance}</Balance>
        </MapWrapper>
      ))}
    </>
  );
}
