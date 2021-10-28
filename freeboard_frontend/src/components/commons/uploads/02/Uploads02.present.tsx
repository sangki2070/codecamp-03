import {
  UploadsWrapper,
  UploadImage,
  UploadFileHidden,
  UploadButton,
} from "./Uploads02.styles";

export default function Uploads02UI(props: any) {
  return (
    <UploadsWrapper>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          // onChange={props.onchangeMyFiles}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        ></UploadImage>
      ) : (
        <UploadButton onClick={props.onClickUpload} type="button">
          <> + </>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      ></UploadFileHidden>
    </UploadsWrapper>
  );
}
