import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";
// import { Modal } from "antd";
// import styled from "@emotion/styled";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

// const MyModal = styled(Modal)``;

export default function LoginSuccessPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { userInfo, setUserInfo, accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (userInfo.email) return;
    if (!accessToken) {
      router.push("/quiz/21-01-login");
      alert("로그인을 먼저 해주세요");
    }
    setUserInfo({
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
    });
  }, []);

  return (
    <>
      {/* {!accessToken && <MyModal></MyModal>} */}
      <div>환영합니다.</div>
      <div>
        당신의 이름은{data?.fetchUserLoggedIn.name} 이메일은
        {data?.fetchUserLoggedIn.email} 입니다.
      </div>
    </>
  );
}
