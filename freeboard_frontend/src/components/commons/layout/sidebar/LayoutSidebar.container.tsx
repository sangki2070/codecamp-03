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
      picture
    }
  }
`;

const LayoutSidebar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMarketPage, setIsMarketPage] = useState(false);
  const [isPointPage, setIsPointPage] = useState(false);
  const [isProfilePage, setIsProfilePage] = useState(false);
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
    setIsMarketPage(true);
    setIsPointPage(false);
    setIsProfilePage(false);
  }

  function onClickMoveToPoint() {
    router.push("/mypages//point");
    setIsMarketPage(false);
    setIsPointPage(true);
    setIsProfilePage(false);
  }

  function onClickMoveToProfile() {
    router.push("/mypages//profile");
    setIsMarketPage(false);
    setIsPointPage(false);
    setIsProfilePage(true);
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
      isMarketPage={isMarketPage}
      isPointPage={isPointPage}
      isProfilePage={isProfilePage}
    />
  );
};
export default withAuth(LayoutSidebar);
