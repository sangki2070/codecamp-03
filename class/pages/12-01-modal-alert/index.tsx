import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSuccess() {
    try {
      //   alert("게시물 등록에 성공했습니다.");
      Modal.confirm({ content: "게시물 등록에 성공했습니다." });
    } catch (error) {
      //   alert("게시물 등록에 실패했습니다.");
      Modal.confirm({ content: "게시물 등록에 실패했습니다." });
    }
  }

  function onClickFail() {
    try {
      //   alert("게시물 등록에 성공했습니다.");
      throw new Error("강제로 에러 발생시키기");
      //   에러 강제 실행 캐치안으로 들어감
    } catch (error) {
      //   alert("게시물 등록에 실패했습니다.");
      //   alert(error.message);
      Modal.error({ content: error.message });
    }
  }

  return (
    <>
      <button onClick={onClickSuccess}>알림창 (성공했을때)</button>
      <button onClick={onClickFail}>알림창 (실패했을떼)</button>
    </>
  );
}
