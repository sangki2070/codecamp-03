import {
  Wrapper,
  HeaderName,
  Logo,
  HeaderWrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo>📈</Logo>
        <HeaderName>해외투자토론방</HeaderName>
      </HeaderWrapper>
    </Wrapper>
  );
}
