import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);
    setIsOpen((prev) => !prev);
  };
  // function onOpenZipcode() {
  //   setIsOpen((prev) => !prev);
  // }
  // function onCloseZipcode() {
  //   setIsOpen((prev) => !prev);
  // }
  function onTogleZipcode() {
    setIsOpen((prev) => !prev);
  }
  // 리팩토링 만든코드를 더욱 효율적으로 짧게 만드는 것
  return (
    <>
      <button onClick={onTogleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onTogleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>{myAddress}</div>
    </>
  );
}
