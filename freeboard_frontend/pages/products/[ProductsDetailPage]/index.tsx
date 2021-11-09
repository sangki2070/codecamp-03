// import Head from "next/head";
// import { gql, request } from "graphql-request";

import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductsReadContainer from "../../../src/components/units/product/read/ProductsRead.container";

const ProductsReadPage = (props: any) => {
  return (
    // <>
    //   <Head>
    //     <meta property="og:title" content={props.fetchUseditem.name} />
    //     <meta property="og:description" content={props.fetchUseditem.remarks} />
    //     <meta
    //       property="og:image"
    //       content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
    //     />
    //   </Head>

    // </>
    <ProductsReadContainer />
  );
};

// const FETCH_USEDITEM = gql`
//   query fetchUsedItem($useditemId: ID!) {
//     fetchUsedItem(useditemId: $useditemId) {
//       name
//       remarks
//       images
//     }
//   }
// `;
// export const getServerSideProps = async (context: any) => {
//   const result = await request(
//     "https://backend03.codebootcamp.co.kr/graphql12",
//     FETCH_USEDITEM,
//     { useditemId: context.query.useditemId }
//   );

//   return {
//     props: {
//       fetchUseditem: result.fetchuseditem,
//     },
//   };
// };

export default withAuth(ProductsReadPage);
