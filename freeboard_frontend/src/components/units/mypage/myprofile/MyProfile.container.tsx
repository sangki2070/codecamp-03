import { useMutation } from "@apollo/client";
import { useState } from "react";
import MyProfileUI from "./MyProfile.presenter";
import { RESET_USER_PASSWORD } from "./MyProfile.queries";

export default function MyProfileContainer() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangeRePassword(event) {
    setRePassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  async function onClickPasswordReset() {
    if (password === "") {
      setPasswordError("비밀번호를 작성해주세요");
      return;
    }

    if (rePassword === "") {
      setPasswordError("비밀번호를 작성해주세요");
      return;
    }

    if (rePassword !== password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const result = await resetUserPassword({
        variables: {
          password: password,
        },
      });
      console.log(result);
      console.log(123123);
      alert("변경을 진행합니다.");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MyProfileUI
      onClickPasswordReset={onClickPasswordReset}
      onChangeRePassword={onChangeRePassword}
      onChangePassword={onChangePassword}
      passwordError={passwordError}
    ></MyProfileUI>
  );
}
