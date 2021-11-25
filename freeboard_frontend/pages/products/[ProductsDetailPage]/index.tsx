import Head from "next/head";
import { gql, request } from "graphql-request";

import { withAuth } from "../../../src/components/commons/hocs/withAuth";
// import ProductsReadContainer from "../../../src/components/units/product/read/ProductsRead.container";

const ProductsReadPage = (props: any) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <div>asdfasdf</div>
      {/* <ProductsReadContainer /> */}
    </>
  );
};
export default ProductsReadPage;

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  //* 1번째실행
  // 페이지 안에만 적을수 있다.  getServerSideProps는 정해진 이름이라 바꾸면 안된다.
  // 1. graphql 데이터를 요청한다.
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql12",
    FETCH_USEDITEM,
    {
      useditemId: context.query.ProductsDetailPage,
    }
  );
  console.log("123");
  // 2. 요청받은 데이터를 페이지로 넘겨준다.
  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
