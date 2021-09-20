import {
  AppleIcon,
  AppleWrapper,
  GoogleIcon,
  GoogleWrapper,
  Wrapper,
} from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
  return (
    <Wrapper>
      <GoogleWrapper>
        <GoogleIcon src="/images/googleplay.png"></GoogleIcon>
        <div>Google Play</div>
      </GoogleWrapper>
      <AppleWrapper>
        <AppleIcon src="/images/appstore.svg"></AppleIcon>
        <div>App Store</div>
      </AppleWrapper>
    </Wrapper>
  );
}
