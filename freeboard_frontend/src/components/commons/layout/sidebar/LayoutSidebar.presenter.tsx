import {
  SidebarWrapper,
  SidebarBody,
  BodyTitle,
  BodyAvatar,
  AccountWrapper,
  MoneyCharge,
  Account,
  MyMarketWrapper,
  MyMarketIcon,
  MyMarketName,
  MyPointWrapper,
  MyPointIcon,
  MyPointName,
  MyProfileWrapper,
  MyProfileIcon,
  MyProfileName,
  BodyProfileName,
  BodyHeadWrapper,
  ChargeButton,
  ChargeModal,
  ChargeModalIcon,
  ChargeModalWrapper,
  BodyPicture,
} from "./LayoutSidebar.styles";

import PaymentPage1 from "../../payment";

export default function LayoutSidebarUI(props: any) {
  return (
    <SidebarWrapper>
      <SidebarBody>
        <BodyHeadWrapper>
          <BodyTitle>MYPAGE</BodyTitle>

          {props.data?.fetchUserLoggedIn.picture ? (
            <BodyPicture
              src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
            ></BodyPicture>
          ) : (
            <BodyAvatar src="/images/avatar1.svg"></BodyAvatar>
          )}
          <BodyProfileName>
            {props.data?.fetchUserLoggedIn.name}
          </BodyProfileName>
        </BodyHeadWrapper>
        <div>
          <AccountWrapper>
            <MoneyCharge src="/images/charge1.svg"></MoneyCharge>
            <Account>
              {Number(
                props.data?.fetchUserLoggedIn.userPoint.amount
              ).toLocaleString("ko-KR")}
              원
            </Account>
          </AccountWrapper>

          <ChargeModal
            title="충전마일리지 입력"
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <ChargeModalWrapper>
              <ChargeModalIcon src="/images/chargemodal.svg"></ChargeModalIcon>

              <PaymentPage1
                data={props.data}
                setIsModalVisible={props.setIsModalVisible}
              />
            </ChargeModalWrapper>
          </ChargeModal>
          <ChargeButton type="primary" danger onClick={props.showModal}>
            충전하기
          </ChargeButton>
          <MyMarketWrapper>
            <MyMarketIcon src="/images/market.svg"></MyMarketIcon>
            <MyMarketName
              onClick={props.onClickMoveToMarket}
              isMarketPage={props.isMarketPage}
            >
              내 장터
            </MyMarketName>
          </MyMarketWrapper>
          <MyPointWrapper>
            <MyPointIcon src="/images/point.svg"></MyPointIcon>
            <MyPointName
              onClick={props.onClickMoveToPoint}
              isPointPage={props.isPointPage}
            >
              내 포인트
            </MyPointName>
          </MyPointWrapper>
          <MyProfileWrapper>
            <MyProfileIcon src="/images/avatar.png"></MyProfileIcon>
            <MyProfileName
              onClick={props.onClickMoveToProfile}
              isProfilePage={props.isProfilePage}
            >
              내 프로필
            </MyProfileName>
          </MyProfileWrapper>
        </div>
      </SidebarBody>
    </SidebarWrapper>
  );
}
