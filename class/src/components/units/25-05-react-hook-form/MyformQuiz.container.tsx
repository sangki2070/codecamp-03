import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./MyformQuiz.validation";
import MyFormQuizUI from "./MyformQuiz.present";

export default function MyFormQuiz() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickSubmit(data) {
    console.log(data);
  }

  return (
    <MyFormQuizUI
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      register={register}
      formState={formState}
    />
  );
}
