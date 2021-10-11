import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인후 이용해주세요");
      router.push("/loginauth");
    }
  }, []);
  return <Component {...props} />;
};