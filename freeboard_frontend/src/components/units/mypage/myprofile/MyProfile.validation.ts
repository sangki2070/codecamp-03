import * as yup from "yup";

export const schema = yup.object().shape({
  myPassword: yup.string().required("반드시 입력해야하는 필수 사항 입니다."),
});
