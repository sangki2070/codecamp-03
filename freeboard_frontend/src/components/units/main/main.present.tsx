import {
  Wrapper,
  Logo,
  BodyWrapper,
  Title,
  HomeButton,
  HeaderWrapper,
} from "./main.styles";

export default function MainUI(props: any) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo>TradingZone</Logo>
      </HeaderWrapper>
      <BodyWrapper>
        <Title>모든 시장을 추적하세요</Title>
        <HomeButton onClick={props.onClickMovePage}>
          TradingZone Start
        </HomeButton>
      </BodyWrapper>
    </Wrapper>
  );
}
