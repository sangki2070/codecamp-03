import { useState } from "react";
import LayoutSidebarUI from "./LayoutSidebar.presenter";
import { withAuth } from "../../hocs/withAuth";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

const LayoutSidebar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onClickMoveToMarket() {
    // router.push("/mypages/market");
    router.push("/mypages/market");
  }

  function onClickMoveToPoint() {
    router.push("/mypages//point");
  }

  function onClickMoveToProfile() {
    router.push("/mypages//profile");
  }

  return (
    <LayoutSidebarUI
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      data={data}
      onClickMoveToMarket={onClickMoveToMarket}
      onClickMoveToPoint={onClickMoveToPoint}
      onClickMoveToProfile={onClickMoveToProfile}
    />
  );
};
export default withAuth(LayoutSidebar);
