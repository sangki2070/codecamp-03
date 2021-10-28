import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("refreshToken");
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인후 이용해주세요");
      router.push("/loginauth");
    }
  }, []);
  return <Component {...props} />;
};
