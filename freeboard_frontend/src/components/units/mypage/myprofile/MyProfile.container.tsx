import { useMutation } from "@apollo/client";
import { useState } from "react";
import MyProfileUI from "./MyProfile.presenter";
import {
  RESET_USER_PASSWORD,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./MyProfile.queries";

export default function MyProfileContainer() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [reName, setReName] = useState("");

  const [file, setFile] = useState(null);

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

  function onChangeFile(file) {
    setFile(file);
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

  async function onClickChangePicture() {
    try {
      const resultPicture = await uploadFile({ variables: { file: file } });
      const myPicture = resultPicture.data?.uploadFile.url;

      await updateUser({
        variables: {
          updateUserInput: {
            picture: myPicture,
          },
        },
      });
      console.log("33123", myPicture);
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
      onChangeFile={onChangeFile}
      onClickChangePicture={onClickChangePicture}
    ></MyProfileUI>
  );
}
