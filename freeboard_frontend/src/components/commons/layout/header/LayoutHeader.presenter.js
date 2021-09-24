import {
  Wrapper,
  Logo,
  HeaderWrapper,
  LogoName,
  Login,
  LoginWrapper,
  SignUp,
  InnerWrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <InnerWrapper>
        <HeaderWrapper>
          <Logo src="/images/pig.svg"></Logo>
          <LogoName>Fount</LogoName>
        </HeaderWrapper>
        <LoginWrapper>
          <Login>LogIn |</Login>
          <SignUp> SignUp</SignUp>
        </LoginWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
