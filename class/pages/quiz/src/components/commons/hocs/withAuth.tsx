import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 한 사람만 입장 가능합니다.");
      router.push("/quiz/22-01-hoc-login");
    }
  }, []);
  return <Component {...props} />;
};
