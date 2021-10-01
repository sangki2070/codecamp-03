import { useContext } from "react";
import { MyContext } from "../../../../pages/quiz/20-02-context";

export default function ContextUI() {
  const { isEdit } = useContext(MyContext);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
