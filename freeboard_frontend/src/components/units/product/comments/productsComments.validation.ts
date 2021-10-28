import * as yup from "yup";

export const schema = yup.object().shape({
  myContents: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),
});
