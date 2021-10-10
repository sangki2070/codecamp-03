import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductsWrite.validation";
import { useMutation } from "@apollo/client";

import ProductsWriteUI from "./ProductsWrite.present";
import { CREATE_USED_ITEM } from "./ProductsWrite.queries";
import { useRouter } from "next/router";

export default function ProductsWriteContainer(props) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const router = useRouter();

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
      router.push(`${result.data.createUseditem._id}`);
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
      isEdit={props.isEdit}
    />
  );
}
