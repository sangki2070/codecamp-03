import { useMutation, gql } from "@apollo/client";
import { useRef, useState } from "react";
import { fileValidation } from "../../../src/commons/libraries/validation";

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

export default function ImageUpgradePage() {
  const fileRef = useRef<HTMLInputElement>();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createboard] = useMutation(CREATE_BOARD);

  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState("");

  async function onChangeFile(event) {
    const file = event.target.files[0];
    if (!fileValidation(file)) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      setMyFile(file);
      console.log(myFile);
    };

    // const result = await uploadFile({variables: {file: myFile,},});
    // console.log(result.data.uploadFile.url);
    // setImageUrl(result.data.uploadFile.url);
  }

  function onClickUpload() {
    fileRef.current?.click();
  }

  const [myWriter, setMyWriter] = useState();
  const [myPassword, setMyPassword] = useState();
  const [myTitle, setMyTitle] = useState();
  const [myContents, setMyContents] = useState();

  function onChangeWriter(event) {
    setMyWriter(event.target.value);
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setMyTitle(event.target.value);
  }

  function onChagneContents(event) {
    setMyContents(event.target.value);
  }

  async function onClickSubmit() {
    const start = performance.now();

    const result = await Promise.all([
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);
    const end = performance.now();
    console.log(end - start);

    const urls = result.map((el) => el.data.uploadFile.url);

    createboard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: urls,
        },
      },
    });
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 :
      <input type="text" onChange={onChagneContents} />
      <br />
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      <br />
      <img src={imageUrl} />
      <br />
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "yellow" }}
        onClick={onClickUpload}
      >
        이미지선택
      </div>
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
