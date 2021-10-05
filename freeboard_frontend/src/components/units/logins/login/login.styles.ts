import styled from "@emotion/styled";
import { Checkbox } from "antd";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-color: rgb(18, 23, 34);
  display: flex;
  justify-content: space-around;
  align-items: center;

  /* background-image: url("images/loginback.webp"); */
`;
export const LoginInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginLogo = styled.img`
  width: 80px;
  height: 80px;

  /* padding-bottom: 80px; */
  /* background-image: url("/images/tvlogo1.jpeg"); */
`;
export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoginWord = styled.div`
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-family: Trebuchet MS, roboto, ubuntu, sans-serif;
  font-size: 30px;
  padding-left: 20px;
`;
export const ErrorMessage = styled.div`
  width: 210px;
  height: 20px;
  /* font-family: Noto Sans CJK KR; */
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #ff0000;
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const LoginInput = styled.input`
  width: 384px;
  height: 64px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);

  padding-left: 16px;
  ::placeholder {
    color: rgb(255, 255, 255);
  }
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
`;

export const MyCheck = styled(Checkbox)`
  margin-right: 15px;
`;

export const CheckWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 40px;
  color: rgb(255, 255, 255);
`;

export const LoginBtn = styled.button`
  background: rgb(41, 98, 255);
  border-radius: 16px;
  width: 384px;
  height: 64px;
  color: rgb(255, 255, 255);
  font-size: 16px;

  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const UnderLine = styled.div`
  width: 384px;
  height: 1px;
  border-bottom: 1px solid rgb(255, 255, 255);
  padding-top: 40px;
`;

export const SignupWrapper = styled.div`
  display: flex;
  width: 384px;
  justify-content: space-around;
  padding-top: 29px;
  color: rgb(255, 255, 255);
`;

export const SignupWord = styled.div``;

export const LoginRightBack = styled.img`
  width: 1000px;
  height: 1000px;
`;
