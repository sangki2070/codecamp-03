import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FrebasePage() {
  async function onClickSubmit() {
    const blog = collection(getFirestore(firebaseApp), "blog");
    await addDoc(blog, {
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.~",
    });
  }

  async function onClickFetch() {
    const blog = collection(getFirestore(firebaseApp), "blog");
    const result = await getDocs(blog);
    const docs = result.docs.map((el) => el.data());

    console.log(docs);
  }

  return (
    <>
      <div>파이어베이스 페이지입니다.</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
