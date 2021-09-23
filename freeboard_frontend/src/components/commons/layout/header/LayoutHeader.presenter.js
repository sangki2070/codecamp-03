import {
  Wrapper,
  Logo,
  HeaderWrapper,
  LogoName,
  Login,
  LoginWrapper,
  SignUp,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo src="/images/pig.svg"></Logo>
        <LogoName>Fount</LogoName>
      </HeaderWrapper>
      <LoginWrapper>
        <Login>LogIn |</Login>
        <SignUp> SignUp</SignUp>
      </LoginWrapper>
    </Wrapper>
  );
}
