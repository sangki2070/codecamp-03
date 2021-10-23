import styled from "@emotion/styled";
import { Button, Modal } from "antd";

export const ChargeModal = styled(Modal)``;

export const ChargeButton = styled(Button)`
  margin-top: 20px;
  margin-left: 8px;
`;

export const ChargeModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChargeModalIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const SidebarWrapper = styled.div`
  width: 450px;
  height: 100vh;
  border-right: 2px solid #f2f2f2;
`;

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-left: 150px;
`;

export const BodyTitle = styled.div`
  width: 97px;
  height: 36px;
  font-size: 24px;
  margin-left: 10px;
`;

export const BodyAvatar = styled.img`
  margin-top: 40px;
  width: 200px;
  height: 200px;
`;

export const BodyPicture = styled.img`
  margin-top: 40px;
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;

export const BodyProfileName = styled.div`
  margin-top: 30px;
  height: 36px;
  font-size: 24px;
  font-weight: bold;
`;

export const AccountWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const MoneyCharge = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Account = styled.div``;

export const MyMarketWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const MyMarketIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const MyMarketName = styled.div`
  cursor: pointer;
  color: ${(props) => (props.isMarketPage === true ? "blue" : "")};
  font-weight: ${(props) => (props.isMarketPage === true ? "bold" : "")};
`;

export const MyPointWrapper = styled.div`
  display: flex;
  margin-top: 23px;
`;

export const MyPointIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const MyPointName = styled.div`
  cursor: pointer;
  color: ${(props) => (props.isPointPage === true ? "blue" : "")};
  font-weight: ${(props) => (props.isPointPage === true ? "bold" : "")};
`;

export const MyProfileWrapper = styled.div`
  display: flex;

  margin-top: 23px;
`;

export const MyProfileIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const MyProfileName = styled.div`
  cursor: pointer;
  color: ${(props) => (props.isProfilePage === true ? "blue" : "")};
  font-weight: ${(props) => (props.isProfilePage === true ? "bold" : "")};
`;

export const BodyHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
