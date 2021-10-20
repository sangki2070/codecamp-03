import ProductsReadUI from "./ProductsRead.present";

import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  CREATE_POINT_TRANSACTION_OF_BUING_AND_SELLING,
} from "./ProductsRead.queries";
import { useRouter } from "next/router";

export default function ProductsReadContainer() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUING_AND_SELLING
  );

  async function onClickBuy() {
    createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.ProductsDetailPage,
      },
    });
    alert("구매가 완료되었습니다.");
    router.push(`/products/`);
    console.log("123123");
  }

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
      onClickBuy={onClickBuy}
    />
  );
}
