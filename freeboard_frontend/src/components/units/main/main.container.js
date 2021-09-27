import MainUI from "./main.present";
import { useRouter } from "next/router";

export default function MainContainer() {
  const router = useRouter();

  function onClickMovePage() {
    router.push("/boards");
  }

  return <MainUI onClickMovePage={onClickMovePage}></MainUI>;
}
