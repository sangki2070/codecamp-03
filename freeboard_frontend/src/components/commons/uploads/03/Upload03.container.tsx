import { useRef, useState } from "react";
import Upload03UI from "./Upload03.present";

export default function Upload03(props) {
  const fileRef = useRef();
  const [fileUrl, setFileUrl] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeImage(event) {
    const file = event?.target.files?.[0];

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
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result);
      //   props.onChangeFiles(file, props.index);
      props.onChangeFile(file);
    };
  }

  return (
    <Upload03UI
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      onChangeImage={onChangeImage}
      fileUrl={fileUrl}

      //   defaultFileUrl={props.defaultFileUrl}
    ></Upload03UI>
  );
}
