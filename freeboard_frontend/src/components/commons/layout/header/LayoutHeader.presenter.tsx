import {
  LogoutOutlined,
  LoginOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

import {
  Wrapper,
  Logo,
  HeaderWrapper,
  LogoName,
  LoginWrapper,
  Name,
  HeaderPicture,
  HeaderAvatar,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  return (
    <Wrapper>
      <HeaderWrapper onClick={props.onCliekLoGo}>
        <Logo src={"/images/tvlogo1.jpeg"}></Logo>
        <LogoName>TradingZone</LogoName>
      </HeaderWrapper>
      <LoginWrapper>
        {props.data?.fetchUserLoggedIn.name && (
          <Name>{props.data?.fetchUserLoggedIn.name}님</Name>
        )}
        {props.data?.fetchUserLoggedIn.name &&
          props.data?.fetchUserLoggedIn.picture && (
            <HeaderPicture
              src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
            ></HeaderPicture>
          )}
        {props.data?.fetchUserLoggedIn.name &&
          !props.data?.fetchUserLoggedIn.picture && (
            <HeaderAvatar src="/images/avatar1.svg"></HeaderAvatar>
          )}
        {props.data?.fetchUserLoggedIn.name && (
          <LogoutOutlined
            style={{ fontSize: "80px", color: "white", cursor: "pointer" }}
            onClick={props.onClickLogOut}
          />
        )}

        {!props.data?.fetchUserLoggedIn.name && (
          <LoginOutlined
            style={{
              fontSize: "80px",
              color: "white",
              cursor: "pointer",
              marginLeft: "180px",
            }}
          />
        )}
        {!props.data?.fetchUserLoggedIn.name && (
          <SolutionOutlined
            style={{ fontSize: "80px", color: "white", cursor: "pointer" }}
          />
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
