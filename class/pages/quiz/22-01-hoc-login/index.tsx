import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../_app";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage1() {
  const router = useRouter();

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);

  function onChangeMyEmail(event) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken);
      localStorage.setItem("accessToken", result.data.loginUser.accessToken);
      router.push("/quiz/22-01-hoc-loginsuccess");
    } catch (error) {}
  }

  return (
    <>
      아이디 : <input type="text" onChange={onChangeMyEmail} />
      비밀번호 : <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
