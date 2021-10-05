import { UserOutlined } from "@ant-design/icons";

import {
  Wrapper,
  Logo,
  HeaderWrapper,
  LogoName,
  Login,
  LoginWrapper,
  SignUp,
  Name,
  MyAvatar,
  MyBadge,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo src={"/images/tvlogo1.jpeg"}></Logo>
        <LogoName>TradingView</LogoName>
      </HeaderWrapper>
      <LoginWrapper>
        {props.data?.fetchUserLoggedIn.name && (
          <Name>{props.data?.fetchUserLoggedIn.name}님</Name>
        )}
        {props.data?.fetchUserLoggedIn.name && (
          <MyBadge count={"new"}>
            <MyAvatar
              shape="square"
              size={64}
              icon={<UserOutlined />}
              style={{
                color: "rgb(18, 23, 34)",
                backgroundColor: "white",
                fontWeight: "bold",
              }}
            ></MyAvatar>
          </MyBadge>
        )}
        {/* <Name>{props.data?.fetchUserLoggedIn.email}</Name> */}
        {!props.data?.fetchUserLoggedIn.name && <Login>LogIn |</Login>}
        {!props.data?.fetchUserLoggedIn.name && <SignUp> SignUp</SignUp>}
      </LoginWrapper>
    </Wrapper>
  );
}
