import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { userInfo, setUserInfo, accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (userInfo.email) return;

    setUserInfo({
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
    });
  }, []);

  return <LayoutHeaderUI data={data} userInfo={userInfo} />;
}
