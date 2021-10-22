import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  PrevImage,
  AvatarImage,
  UploadTitle,
  UploadImageWrapper,
  UploadMainWrapper,
  PrevTitle,
  PrevWrapper,
  PrevPictureWrapper,
} from "./Upload03.styles";

import { PictureOutlined } from "@ant-design/icons";

export default function Upload03UI(props) {
  return (
    <UploadMainWrapper>
      <UploadImageWrapper>
        <UploadButton onClick={props.onClickUpload}>
          <AvatarImage src="/images/avatar1.svg"></AvatarImage>
        </UploadButton>
        <UploadTitle>이미지 업로드</UploadTitle>
      </UploadImageWrapper>
      {props.fileUrl ? (
        <PrevWrapper>
          <UploadImage
            onClick={props.onClickUpload}
            src={
              props.fileUrl ||
              `https://storage.googleapis.com/${props.defaultFileUrl}`
            }
          />
          <PrevTitle>이미지 미리보기</PrevTitle>
        </PrevWrapper>
      ) : (
        <PrevWrapper>
          <PrevPictureWrapper>
            <PictureOutlined
              style={{ fontSize: "200px", color: "#08c" }}
            ></PictureOutlined>
          </PrevPictureWrapper>
          <PrevTitle>이미지 미리보기</PrevTitle>
        </PrevWrapper>
      )}

      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeImage}
      />
    </UploadMainWrapper>
  );
}
