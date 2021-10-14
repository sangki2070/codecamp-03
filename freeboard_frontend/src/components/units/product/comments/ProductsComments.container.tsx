import ProductsCommentsUI from "./ProductsComments.present";

import { useMutation, useQuery } from "@apollo/client";
import { schema } from "./productsComments.validation";

import {
  FETCH_USED_ITEM_QUESTIONS,
  CREATE_USED_ITEM_QUESTION,
} from "./ProductsComments.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ProductsCommentsContainer() {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  // const [myContents, setMyContents] = useState()

  // function onChangeContents (){
  //   setMyContents
  // }

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickQuestion = () => async () => {
    await createUseditemQuestion({
      variables: {
        useditemId: String(router.query.ProductsDetailPage),
        // createUseditemQuestionInput:{
        //   contents:
        // }
      },
    });
  };

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.ProductsDetailPage) },
  });

  return (
    <ProductsCommentsUI
      data={data}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickQuestion={onClickQuestion}
    />
  );
}
