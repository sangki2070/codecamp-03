import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <> + </>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
