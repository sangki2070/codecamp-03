import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductsWrite.validation";
import { useMutation } from "@apollo/client";

import ProductsWriteUI from "./ProductsWrite.present";
import { CREATE_USED_ITEM } from "./ProductsWrite.queries";

export default function ProductsWriteContainer() {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  async function onClickSubmit(data) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.myName,
            remarks: data.myRemarks,
            contents: data.myContents,
            price: Number(data.myPrice),
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductsWriteUI
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      register={register}
      formStat={formState}
    />
  );
}
