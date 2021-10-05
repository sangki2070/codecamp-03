import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import LoginUI from "./login.present";
import { LOGIN_USER } from "./login.queries";

import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";

export default function LoginContainer() {
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  function onChangeMyEmail(event) {
    setMyEmail(event.target.value);
  }

  function onchangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    if (myEmail === "") {
      setEmailError("이메일은 필수입력 입니다.");
      return;
    }

    if (myPassword === "") {
      setPasswordError("비밀번호는 필수입력 입니다.");
      return;
    }

    try {
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken);
      localStorage.setItem("accessToken", result.data.loginUser.accessToken);
      router.push("/boards");
    } catch (error) {
      alert("회원가입을 먼저 해주세요");
    }
  }

  return (
    <LoginUI
      onChangeMyEmail={onChangeMyEmail}
      onchangeMyPassword={onchangeMyPassword}
      onClickLogin={onClickLogin}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
}
