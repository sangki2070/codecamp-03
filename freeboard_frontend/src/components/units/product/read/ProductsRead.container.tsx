import ProductsReadUI from "./ProductsRead.present";

import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "./ProductsRead.queries";
import { useRouter } from "next/router";

export default function ProductsReadContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.ProductsDetailPage,
    },
  });

  return <ProductsReadUI data={data} />;
}
