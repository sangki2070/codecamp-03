import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import { LikeOutlined } from "@ant-design/icons";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createboard] = useMutation(CREATE_BOARD);

  const [imageUrl, setImageUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>();

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    if (!myFile) {
      alert("파일이 없습니다.");
      return;
    }

    if (myFile.size > 5 * 1000 * 1000) {
      alert("파일 용량이 너무 큽니다.(제한 : 5mg");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });

    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
  }

  function onClicUpload() {
    fileRef.current?.click();
  }

  function onChagneWriter(event) {
    setMyWriter(event.target.value);
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setMyTitle(event.target.value);
  }

  function onChangeContents(event) {
    setMyContents(event.target.value);
  }

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  function onClickSubmit() {
    createboard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    });
  }

  return (
    <>
      작성자: <input type="text" onChange={onChagneWriter} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <br />
      <LikeOutlined onClick={onClicUpload}>이미지 선택</LikeOutlined>
      <br />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <br />
      <button onClick={onClickSubmit}>저장하기</button>
      <br />
    </>
  );
}
