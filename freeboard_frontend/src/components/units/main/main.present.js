import {
  Wrapper,
  Logo,
  BodyWrapper,
  Title,
  HomeButton,
  HeaderWrapper,
} from "./main.styles";

export default function MainUI(props) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo>TradingAI Fount</Logo>
      </HeaderWrapper>
      <BodyWrapper>
        <Title>모든 시장을 추적하세요</Title>
        <HomeButton onClick={props.onClickMovePage}>
          TradingAI Fount Start!!
        </HomeButton>
      </BodyWrapper>
    </Wrapper>
  );
}
