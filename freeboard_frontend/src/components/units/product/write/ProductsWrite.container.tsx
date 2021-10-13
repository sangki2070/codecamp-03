import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductsWrite.validation";
import { useMutation, useQuery } from "@apollo/client";

import ProductsWriteUI from "./ProductsWrite.present";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./ProductsWrite.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductsWriteContainer(props) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const router = useRouter();

  const [files, setFiles] = useState([null, null, null]);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.ProductsDetailPage },
  });

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onClickSubmit(data) {
    // const uploadFiles = files
    //   .map((el) => (el ? uploadFile({ variables: { file: el } }) : null))
    // const results = await Promise.all(uploadFiles)
    // const myImages = result.map((el) => el?.data.uploadFile.url || "")

    try {
      const uploadFiles = files
        // .filter((el) => el)
        .map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el?.data.uploadFile.url || "");

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.myName,
            remarks: data.myRemarks,
            contents: data.myContents,
            price: Number(data.myPrice),
            images: myImages,
          },
        },
      });
      console.log(result);
      console.log("데이터확인", data.myImages);
      router.push(`${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeMyEditor(value) {
    setValue("myContents", value === "<p><br></P" ? "" : value);
    trigger("myContents");
  }

  // function onchangeMyFiles(value) {
  //   setValue("myImage", value);
  //   trigger("myImage");
  // }

  function onChangeFiles(file, index) {
    // setValue("myImage", file);
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    // trigger("myImage");
  }

  async function onClickUpdate(data) {
    const myUpdateUseditemInput = {};
    if (data.myName) myUpdateUseditemInput.name = data.myName;
    if (data.myRemarks) myUpdateUseditemInput.remarks = data.myRemarks;
    if (data.myContents) myUpdateUseditemInput.contents = data.myContents;
    if (Number(data.myPrice))
      myUpdateUseditemInput.price = Number(data.myPrice);

    try {
      const updateresult = await updateUseditem({
        variables: {
          updateUseditemInput: myUpdateUseditemInput,
          useditemId: router.query.ProductsDetailPage,
        },
      });
      router.push(`/products/${router.query.ProductsDetailPage}`);
      console.log(updateresult);
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
      onClickUpdate={onClickUpdate}
      data={data}
      onChangeMyEditor={onChangeMyEditor}
      // onchangeMyFiles={onchangeMyFiles}
      onChangeFiles={onChangeFiles}
    />
  );
}
