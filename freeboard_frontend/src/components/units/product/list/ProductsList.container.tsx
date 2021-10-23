import ProductsListUI from "./ProductsList.present";
import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./ProductsListqueries";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

export default function ProductsListContainer() {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const [myKeyWord, setMyKeyWord] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyWord(data);
  }, 500);

  function onChangeSearch(event) {
    getDebounce(event.target.value);
  }

  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: isSoldOut,
      search: myKeyWord,
    },
  });
  const router = useRouter();

  const { data: bestData } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const onClickMovetoProducts = (el) => (event) => {
    router.push(`products/${el._id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      return;
    }

    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);

    if (baskets.length > 3) {
      baskets.shift();
    }

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickProductsWrite = () => () => {
    router.push(`products/new`);
  };

  const onClickSoldItems = () => () => {
    setIsSoldOut(true);
    console.log("123123", isSoldOut);
  };

  const onClickNotSoldItems = () => () => {
    setIsSoldOut(false);
    console.log("44444", isSoldOut);
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
      bestData={bestData}
      onClickMovetoProducts={onClickMovetoProducts}
      onClickProductsWrite={onClickProductsWrite}
      onClickSoldItems={onClickSoldItems}
      onClickNotSoldItems={onClickNotSoldItems}
      isSoldOut={isSoldOut}
      onChangeSearch={onChangeSearch}
      myKeyWord={myKeyWord}
      // basketItems={basketItems}
    />
  );
}
