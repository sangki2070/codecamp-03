import { useMutation } from "@apollo/client";
import { useState } from "react";
import MyProfileUI from "./MyProfile.presenter";
import { RESET_USER_PASSWORD, UPDATE_USER } from "./MyProfile.queries";

export default function MyProfileContainer() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [reName, setReName] = useState("");

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

  function onChangeName(event) {
    setReName(event.target.value);
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

  async function onClickChangeName() {
    if (reName === "") {
      alert("이름을 입력해 주세요");
      return;
    }

    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: reName,
          },
        },
      });
    } catch (error) {}
  }

  return (
    <MyProfileUI
      onClickPasswordReset={onClickPasswordReset}
      onChangeRePassword={onChangeRePassword}
      onChangePassword={onChangePassword}
      passwordError={passwordError}
      onChangeName={onChangeName}
      onClickChangeName={onClickChangeName}
    ></MyProfileUI>
  );
}
