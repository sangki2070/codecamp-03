import ProductsCommentsUI from "./ProductsComments.present";

import { useQuery } from "@apollo/client";

import { FETCH_USED_ITEM_QUESTIONS } from "./ProductsComments.queries";
import { useRouter } from "next/router";

export default function ProductsCommentsContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.ProductsDetailPage },
  });

  return <ProductsCommentsUI data={data} />;
}
