import BoardWriteUI from "./BoardsWrite.present";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  FETCH_BOARD,
  UPLOAD_FILE,
} from "./BoardsWrite.queries";

export default function BoardsContainer(props: any) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [nameError, setnameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [contentsError, setcontentsError] = useState("");
  const [titleError, settitleError] = useState("");

  const [check, setCheck] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.BoardsDetailPage },
  });

  // const [fileUrls, setFileUrls] = useState(["", "", ""]); 1차 실습

  const [files, setFiles] = useState([null, null, null]); // 2차실습

  // 모달 부분

  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data: any) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);

    console.log(data.zonecode);
    console.log(data.address);
    setIsOpen((prev) => !prev);
  };
  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  }

  function onChangeName(event: any) {
    setName(event.target.value);
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setCheck(true);
      setnameError("");
    } else {
      setCheck(false);
    }
  }

  function onChangePassword(event: any) {
    setPassword(event.target.value);
    if (
      name !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setCheck(true);
      setpasswordError("");
    } else {
      setCheck(false);
    }
  }

  function onChangeTitle(event: any) {
    setTitle(event.target.value);
    if (
      name !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setCheck(true);
      settitleError("");
    } else {
      setCheck(false);
    }
  }

  function onChangeContents(event: any) {
    setContents(event.target.value);
    if (
      name !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setCheck(true);
      setcontentsError("");
    } else {
      setCheck(false);
    }
  }

  function onChangeYoutuUrl(event: any) {
    setYoutubeUrl(event.target.value);
  }

  // function onChangeZipcode(event: any) {
  //   setZipcode(event.target.value);
  // }

  // function onChangeAddress(event: any) {
  //   setAddress(event.target.value);
  // }

  function onChangeAddressDetail(event: any) {
    setAddressDetail(event.target.value);
  }
  async function onClickModifyBtn() {
    const myUpdateboardInput: any = {};
    if (title) myUpdateboardInput.title = title;
    if (contents) myUpdateboardInput.contents = contents;
    if (youtubeUrl) myUpdateboardInput.youtubeUrl = youtubeUrl;
    if (myZipcode || myAddress || addressDetail) {
      myUpdateboardInput.boardAddress = {};
      if (myZipcode) myUpdateboardInput.boardAddress.zipcode = myZipcode;
      if (myAddress) myUpdateboardInput.boardAddress.address = myAddress;
      if (addressDetail)
        myUpdateboardInput.boardAddress.addressDetail = addressDetail;
    }

    // const uploadFiles = files.map((el) =>
    //   el ? uploadFile({ variables: { file: el } }) : null
    // );
    const uploadFiles = files // [File1, File2, null]
      .map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateboardInput.images = nextImages;

    console.log(nextImages);

    if (data?.fetchBoard.images?.length) {
      const prevImages = [...data?.fetchBoard.images];
      myUpdateboardInput.images = prevImages.map((el, index) => nextImages[index] || el); // prettier-ignore
    } else {
      myUpdateboardInput.images = nextImages;
    }

    try {
      await updateBoard({
        variables: {
          updateBoardInput: myUpdateboardInput,
          password: password,
          boardId: router.query.BoardsDetailPage,
        },
      });

      router.push(`/boards/${router.query.BoardsDetailPage}`);
    } catch (err: any) {
      alert(err.message);
    }
  }

  // function onChangeFileUrls(fileUrl, index) {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   console.log(newFileUrls);
  //   setFileUrls(newFileUrls);
  // }

  async function onClickRegister() {
    if (name === "") {
      setnameError("이름을 작성해 주세요");
    }
    if (password === "") {
      setpasswordError("비밀번호를 작성해 주세요");
    }
    if (title === "") {
      settitleError("제목을 작성해 주세요");
    }
    if (contents === "") {
      setcontentsError("내용을 작성해 주세요");
    }

    if (name !== "" && password !== "" && title !== "" && contents !== "") {
      alert("게시물을 등록합니다.");
    }

    try {
      const uploadFiles = files
        // .filter((el) => el)
        .map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el?.data.uploadFile.url || "");

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password: password,
            title: title,
            contents: contents,
            youtubeUrl: youtubeUrl,

            boardAddress: {
              zipcode: myZipcode,
              address: myAddress,
              addressDetail: addressDetail,
            },
            // images: [...fileUrls], 1차 실습
            images: myImages,
          },
        },
      });
      // console.log(result.data.createBoard._id)
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeFiles(file: any, index: any) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      check={check}
      isEdit={props.isEdit}
      onClickModifyBtn={onClickModifyBtn}
      data={data}
      onChangeYoutuUrl={onChangeYoutuUrl}
      myZipcode={myZipcode}
      myAddress={myAddress}
      isOpen={isOpen}
      handleComplete={handleComplete}
      onToggleZipcode={onToggleZipcode}
      // onChangeZipcode={onChangeZipcode}
      // onChangeAddress={onChangeAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFiles={onChangeFiles}
    />
  );
}
