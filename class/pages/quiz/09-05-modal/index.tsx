import { Modal, Button } from "antd";
import React, { useState } from "react";

export default function ModalPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="게시글 등록이지롱"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>게시글이 등록되었습니다.</h1>
      </Modal>
    </>
  );
}
