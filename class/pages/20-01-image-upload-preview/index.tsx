import { useRef, useState } from "react";
import { fileValidation } from "../../src/commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
      _id
    }
  }
`;
export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>();
  function onClickGray() {
    fileRef.current.click();
  }
  function onChangeFile(event) {
    const file = event.target.files[0];
    if (!fileValidation(file)) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // readAsDataURL  스터리지에 없고 내컴퓨터에만 사용되는 임시 url?
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      setMyFile(file);
    };
  }
  async function onClickSubmit() {
    const start = performance.now();
    await Promise.all([
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);

    const end = performance.now();
    console.log(end - start);
  }
  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지 업로드!!!!
      </div>
      <img src={imageUrl} />
      <input type="file" ref={fileRef} onChange={onChangeFile} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
