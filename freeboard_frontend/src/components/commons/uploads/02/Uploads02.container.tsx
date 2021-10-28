import { useRef, useState } from "react";
import Uploads02UI from "./Uploads02.present";

export default function Uploads02(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState();

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: any) {
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
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data: any) => {
      setFileUrl(data.target?.result);
      props.onChangeFiles(file, props.index);
    };

    console.log("데이터확인2", fileReader);
    console.log("데이터확인3", setFileUrl);
  }

  return (
    <Uploads02UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onchangeMyFiles={props.onchangeMyFiles}
      onChangeFile={onChangeFile}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
