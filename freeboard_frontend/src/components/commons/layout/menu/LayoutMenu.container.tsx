import { useRouter } from "next/router";
import LayoutMenuUI from "./LayoutMenu.present";

export default function LayoutMenuPage() {
  const router = useRouter();

  function onClickMenu(event) {
    router.push(event.target.id);
  }

  function onClickMypage(event) {
    router.push(event.target.id);
  }

  return (
    <LayoutMenuUI
      onClickMenu={onClickMenu}
      onClickMypage={onClickMypage}
    ></LayoutMenuUI>
  );
}
