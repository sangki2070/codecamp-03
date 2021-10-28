import { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  # mutation loginUser($email : String!, $password: String! ){
  #     loginUser(email: $email, password:$password){
  #         accessToken
  #     }
  # }
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  function onChangeEmail(event) {
    setMyEmail(event.target.value);
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  async function onclickLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });

    console.log(result.data?.loginUser.accessToken);
    localStorage.setItem("accessToken", result.data.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
    router.push("/23-02-login-success");
  }

  return (
    <>
      이메일 : <input type=" text" onChange={onChangeEmail} /> <br />
      비밀번호 : <input type="password" onChange={onChangePassword} /> <br />
      <button onClick={onclickLogin}>로그인하기</button>
    </>
  );
}
