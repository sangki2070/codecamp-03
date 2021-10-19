import { useQuery, gql } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";
// import { gql } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const { setUserInfo, userInfo } = useContext(GlobalContext);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);

  return (
    <>
      <div>로그인에 성공하셨습니다.</div>
      {data?.fetchUserLoggedIn.name}님환영합니다.
    </>
  );
}
