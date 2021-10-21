import styled from "@emotion/styled";

export const MyProfileArea = styled.div`
  margin-top: 80px;
  margin-left: 126px;
`;

export const ProfileTitle = styled.div`
  width: 138px;
  height: 36px;
  font-size: 24px;
`;

export const ProfileSubTitle = styled.div`
  height: 24px;
`;

export const PasswordInput = styled.input`
  width: 690px;
  height: 52px;
  background: #e0e0e0;
  opacity: 0.3;
  border-radius: 5px;
  border: none;
  padding-left: 16px;
  ::placeholder {
    color: gray;
    font-weight: bold;
  }
`;

export const PasswordWrapper = styled.div`
  margin-top: 40px;
  width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordChangeBtn = styled.button`
  width: 180px;
  height: 52px;
  background-color: #bdbdbd;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  border-radius: 5px;
  border: none;
`;

export const BtnWrapper = styled.div`
  margin-top: 40px;
  width: 850px;
  display: flex;
  justify-content: flex-end;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 15px;
  margin-left: 170px;
`;
