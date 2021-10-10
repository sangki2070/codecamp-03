import ProductsReadUI from "./ProductsRead.present";

import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductsRead.queries";
import { useRouter } from "next/router";

export default function ProductsReadContainer() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  async function onClickPick() {
    toggleUseditemPick({
      variables: {
        useditemId: router.query.ProductsDetailPage,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.ProductsDetailPage },
        },
      ],
    });
  }

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.ProductsDetailPage,
    },
  });

  async function onClickDelete() {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.ProductsDetailPage,
        },
      });
      router.push(`/products/`);
    } catch (error) {}
  }

  function onClickMoveProducts() {
    router.push(`/products/`);
  }

  function onClickMoveEdit() {
    router.push(`/products/${router.query.ProductsDetailPage}/edit`);
  }

  return (
    <ProductsReadUI
      data={data}
      onClickMoveProducts={onClickMoveProducts}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
    />
  );
}
