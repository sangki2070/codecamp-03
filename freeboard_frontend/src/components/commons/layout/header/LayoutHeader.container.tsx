import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  // useEffect(() => {
  //   if (userInfo.email) return;

  //   setUserInfo({
  //     name: data?.fetchUserLoggedIn.name,
  //     email: data?.fetchUserLoggedIn.email,
  //   });
  // }, []);

  function onClickLogOut() {
    alert("로그아웃 하시겠습니까?");
    localStorage.clear();
    location.reload();
  }

  function onCliekLoGo() {
    router.push("/products/");
  }

  return (
    <LayoutHeaderUI
      data={data}
      onClickLogOut={onClickLogOut}
      onCliekLoGo={onCliekLoGo}
    />
  );
}
