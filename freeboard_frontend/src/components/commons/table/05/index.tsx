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

const Index = styled.span`
  /* margin-left: 70px; */
  width: 10%;
`;

const ProductsName = styled.span`
  /* margin-left: 145px; */
  width: 35%;
`;

const ProductsPrice = styled.span`
  /* margin-left: 153px; */
  width: 20%;
`;

const Date = styled.span`
  /* margin-left: 175px; */
  width: 20%;
`;

const Status = styled.span`
  width: 15%;
  color: #121722;
  font-weight: bold;
`;

export default function Table05(props) {
  return (
    <>
      <TableWrapper>
        <Index>번호</Index>
        <ProductsName>상품명</ProductsName>
        <Status></Status>
        <ProductsPrice>판매가격</ProductsPrice>
        <Date>날짜</Date>
      </TableWrapper>
      {props.data1?.fetchUseditemsISold.map((el, index) => (
        <MapWrapper key={el._id}>
          <Index>{10 - index}</Index>
          <ProductsName>{el.name}</ProductsName>
          {el.buyer?.email ? <Status>판매완료</Status> : <Status></Status>}
          <ProductsPrice>{el.price}</ProductsPrice>
          <Date>{el.createdAt.slice(0, 10)}</Date>
        </MapWrapper>
      ))}
    </>
  );
}
