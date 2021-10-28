import SignupUI from "./signup.present";

import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.queries";
import { useState } from "react";

export default function SignupContainer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwrodCheckError, setPasswordCheckError] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  function onChangeEmail(event: any) {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }

  function onChangeName(event: any) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }

  function onChangePassword(event: any) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onchangePasswordCheck(event: any) {
    setPasswordCheck(event.target.value);
    if (event.target.value !== "") {
      setPasswordCheckError("");
    }
  }

  async function onClickUserReigister() {
    const emailRule =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (email === "") {
      setEmailError("이메일을 작성해 주세요");
      return;
    }
    if (!emailRule.test(email)) {
      setEmailError("이메일 형식이 일치하지 않습니다.");
      return;
    }

    if (name === "") {
      setNameError("이름을 작성해 주세요");
      return;
    }

    if (password === "") {
      setPasswordError("비밀번호를 작성해주세요");
      return;
    }

    if (passwordCheck === "") {
      setPasswordCheckError("비밀번호를 작성해주세요");
      return;
    }

    if (password !== passwordCheck) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (
      email !== "" &&
      name !== "" &&
      password !== "" &&
      passwordCheck !== "" &&
      password === passwordCheck
    ) {
      alert("회원가입을 진행합니다.");
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: email,
            password: password,
            name: name,
          },
        },
      });
      console.log(result.data.createUser._id);
      alert("회원가입이 완료되었습니다.");
    } catch (error) {
      // console.log(error);
      alert(error);
    }
  }

  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onchangePasswordCheck={onchangePasswordCheck}
      onClickUserReigister={onClickUserReigister}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      passwrodCheckError={passwrodCheckError}
    />
  );
}
