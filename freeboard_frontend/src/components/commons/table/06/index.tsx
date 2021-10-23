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

const Index = styled.span`
  width: 10%;
`;
const ProductsName = styled.span`
  width: 30%;
`;

const Status = styled.span`
  width: 10%;
  color: #121722;
  font-weight: bold;
`;

const Price = styled.span`
  width: 20%;
`;
const Seller = styled.span`
  width: 10%;
`;
const Date = styled.span`
  width: 20%;
`;

export default function Table06(props) {
  return (
    <>
      <TableWrapper>
        <Index>번호</Index>
        <ProductsName>상품명</ProductsName>
        <Status></Status>
        <Price>판매가격</Price>
        <Seller>판매자</Seller>
        <Date>날짜</Date>
      </TableWrapper>
      {props.data2?.fetchUseditemsIPicked.map((el, index) => (
        <MapWrapper key={el._id}>
          <Index>{10 - index}</Index>
          <ProductsName>{el.name}</ProductsName>
          {el.buyer?.email ? <Status>판매완료</Status> : <Status></Status>}
          <Price>{el.price}</Price>
          <Seller>{el.seller.name}</Seller>
          <Date>{el.createdAt.slice(0, 10)}</Date>
        </MapWrapper>
      ))}
    </>
  );
}
