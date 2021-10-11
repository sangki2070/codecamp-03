import ProductsListUI from "./ProductsList.present";
import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./ProductsListqueries";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function ProductsListContainer() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const router = useRouter();

  const { data: bestData } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const loader = useRef(null);

  const onClickMovetoProducts = (id) => (event) => {
    router.push(`products/${id}`);
    console.log(id);
  };

  const onClickProductsWrite = () => () => {
    router.push(`products/new`);
  };

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  return (
    <ProductsListUI
      data={data}
      onLoadMore={onLoadMore}
      loader={loader}
      bestData={bestData}
      onClickMovetoProducts={onClickMovetoProducts}
      onClickProductsWrite={onClickProductsWrite}
    />
  );
}
