import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { GlobalContext } from "../../_app";
const LOGIN_USER = gql`
  #    mutation loginUser($email: String!, $password: String!) {
  #     loginUser(email: $email, password: $password) {
  #       accessToken
  #     }
  #   }
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage1() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  function onChangeMyEmail(event) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    // if (accessToken === null) {
    //   alert("로그인을 먼저 해주세요");
    //   return;
    // }
    // console.log(accessToken);

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
      router.push("/quiz/21-02-login-success");
    } catch (error) {
      alert("회원가입을 먼저 해주세요");
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeMyEmail} />
      비밀번호 : <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
