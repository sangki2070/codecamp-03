import { useMutation } from "@apollo/client";
import Uploads01UI from "./Uploads01.present";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { useRef } from "react";

export default function Uploads01(props) {
  const fileRef = useRef();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }

    if (file.size > 5 * 1000 * 1000) {
      alert("파일 용량이 너무 큽니다.(제한 : 5mg");
      return;
    }

    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다.");
      return;
    }
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
      console.log(result);
    } catch (error) {}
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
