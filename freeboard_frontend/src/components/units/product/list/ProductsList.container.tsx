import ProductsListUI from "./ProductsList.present";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./ProductsListqueries";

export default function ProductsListContainer() {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });

  return <ProductsListUI data={data} />;
}
