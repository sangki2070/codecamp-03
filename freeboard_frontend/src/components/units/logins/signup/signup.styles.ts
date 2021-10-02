import styled from "@emotion/styled";

export const SignupWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-color: rgb(18, 23, 34);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderTitle = styled.div``;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-size: 28px;
  padding-bottom: 40px;
`;

export const SignupInput = styled.input`
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
`;

export const SignupInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  width: 100px;
  height: 24px;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
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

export const SignupBtn = styled.button`
  background: rgb(41, 98, 255);
  border-radius: 16px;
  width: 384px;
  height: 64px;
  color: rgb(255, 255, 255);
  font-size: 16px;

  border: none;
`;

export const SignupRightBack = styled.img`
  width: 1200px;
  height: 1000px;
`;
