import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./Myform.validations";
import MyFormUi from "./Myform.presenter";

export default function Myform() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <MyFormUi
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      register={register}
      formState={formState}
    />
  );
}
