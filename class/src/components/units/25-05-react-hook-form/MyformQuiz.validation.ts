import * as yup from "yup";

export const schema = yup.object().shape({
  myWriter: yup
    .string()
    .max(5, "작성자는 5자이내 문자열입니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .max(8, "비밀번호는 최대 8자리 입니다.")
    .required(
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다."
    ),

  myTitle: yup
    .string()
    .max(100, "제목은 최대 100자 입니다.")
    .required("내용은 반드시 입력해주세요"),

  myContents: yup
    .string()
    .max(1000, "내용은 최대 1000자 입니다.")
    .required("내용은 반드시 입력해주세요"),
});
