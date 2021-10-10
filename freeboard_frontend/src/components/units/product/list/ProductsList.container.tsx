import ProductsListUI from "./ProductsList.present";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./ProductsListqueries";
import { useRef } from "react";

export default function ProductsListContainer() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const loader = useRef(null);

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

  return <ProductsListUI data={data} onLoadMore={onLoadMore} loader={loader} />;
}
