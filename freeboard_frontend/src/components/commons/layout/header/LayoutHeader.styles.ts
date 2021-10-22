import styled from "@emotion/styled";
import { Avatar, Badge } from "antd";

export const MyAvatar = styled(Avatar)``;

export const MyBadge = styled(Badge)``;

export const HeaderPicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const HeaderAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Wrapper = styled.div`
  background-color: rgb(18, 23, 34);
  width: 100vw;
  height: 152px;
  /* padding-left: 700px; */
  /* padding-top: 20px; */
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  font-size: 60px;
  /* font-weight: bold; */
  font-family: "live";
  font-style: italic;
  cursor: pointer;
  width: 80px;
  height: 100px;
  /* padding-bottom: 120px; */
`;

export const HeaderWrapper = styled.div`
  /* width: 600px; */
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: center;
  font-size: 18px;
`;

export const LogoName = styled.div`
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-family: Trebuchet MS, roboto, ubuntu, sans-serif;
  font-size: 40px;
`;

export const Login = styled.div`
  font-weight: bold;
  font-family: Trebuchet MS, roboto, ubuntu, sans-serif;
  font-size: 40px;
  color: rgb(255, 255, 255);
`;

export const SignUp = styled.div`
  font-weight: bold;
  font-family: Trebuchet MS, roboto, ubuntu, sans-serif;
  font-size: 40px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
`;

export const LoginWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* justify-content: flex-end; */
  /* width: 600px; */
`;

export const Name = styled.div`
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-family: Trebuchet MS, roboto, ubuntu, sans-serif;
  font-size: 40px;
`;
