import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseApolloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);

  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  const { handleSubmit, register } = useForm();
  async function onClickLogin(data) {
    // 로그인 처리하기
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPassword,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }
  // context, 강제로 accessToken 집어넣으려고 작성함
  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다.`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일 : <input type="text" {...register("myEmail")} />
          비밀번호 : <input type="text" {...register("myPassword")} />
          <button>로그인하기</button>
          {/* <button type="button">버튼</button> */}
        </form>
      )}
    </>
  );
}
