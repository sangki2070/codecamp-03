import { useQuery } from "@apollo/client";

import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

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

  return <LayoutHeaderUI data={data} onClickLogOut={onClickLogOut} />;
}
