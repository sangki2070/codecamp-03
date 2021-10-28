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
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function ProductsWriteContainer(props: any) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const router = useRouter();

  const [files, setFiles] = useState([null, null, null]);
  const [addressDetail, setAddressDetail] = useState("");

  const { data: fetchData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.ProductsDetailPage },
  });

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { myLat, myLng, location }: any = useContext(GlobalContext);

  async function onClickSubmit(data: any) {
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
            tags: data.myTags.split(" "),
            useditemAddress: {
              address: location,
              addressDetail: addressDetail,
              lat: myLat,
              lng: myLng,
            },
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

  function onChangeMyEditor(value: any) {
    setValue("myContents", value === "<p><br></P" ? "" : value);
    trigger("myContents");
  }

  function onChangeAddressDetail(event: any) {
    setAddressDetail(event.target.value);
  }

  function onChangeFiles(file: any, index: any) {
    // setValue("myImage", file);
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    // trigger("myImage");
  }

  async function onClickUpdate(data: any) {
    const myUpdateUseditemInput: any = {};
    if (data.myName) myUpdateUseditemInput.name = data.myName;
    if (data.myRemarks) myUpdateUseditemInput.remarks = data.myRemarks;
    if (data.myContents) myUpdateUseditemInput.contents = data.myContents;
    if (Number(data.myPrice))
      myUpdateUseditemInput.price = Number(data.myPrice);
    if (data.myTags) myUpdateUseditemInput.tags = data.myTags;
    if (myLat || myLng || addressDetail || location) {
      myUpdateUseditemInput.useditemAddress = {};
      if (myLat) myUpdateUseditemInput.useditemAddress.lat = myLat;
      if (myLng) myUpdateUseditemInput.useditemAddress.lng = myLng;
      if (location) myUpdateUseditemInput.useditemAddress.address = location;
      if (addressDetail)
        myUpdateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateUseditemInput.images = nextImages;

    if (fetchData?.fetchUseditem.images.length) {
      const prevImages = [...fetchData?.fetchUseditem.images];
      myUpdateUseditemInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      myUpdateUseditemInput.images = nextImages;
    }

    try {
      const updateresult = await updateUseditem({
        variables: {
          updateUseditemInput: myUpdateUseditemInput,
          useditemId: router.query.ProductsDetailPage,
        },
      });
      router.push(`/products/${router.query.ProductsDetailPage}`);
      console.log(updateresult);
      console.log("asda111123", data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!props.isEdit && fetchData?.fetchUseditem) {
      setValue("myName", fetchData?.fetchUseditem.name);
      setValue("myRemarks", fetchData?.fetchUseditem.remarks);
      setValue("myContents", fetchData?.fetchUseditem.contents);
      setValue("myPrice", fetchData?.fetchUseditem.price);
      setValue("myTags", fetchData?.fetchUseditem.tags);
    }
  }, [!props.isEdit, fetchData?.fetchUseditem]);

  return (
    <ProductsWriteUI
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      register={register}
      formStat={formState}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      fetchData={fetchData}
      onChangeMyEditor={onChangeMyEditor}
      // onchangeMyFiles={onchangeMyFiles}
      onChangeFiles={onChangeFiles}
      setValue={setValue}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
}
