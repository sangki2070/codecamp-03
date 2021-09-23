import {
  Wrapper,
  MarketItem,
  Marketprice,
  MarketWrapper,
  MarketSmallWrapper,
} from "./LayoutMarket.styles";

export default function LayoutMarketUI(props) {
  return (
    <Wrapper>
      <MarketWrapper>
        <MarketSmallWrapper>
          <MarketItem>비트코인</MarketItem>
          <Marketprice>{props.btc} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>이더리움</MarketItem>
          <Marketprice>{props.eth} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>에이다</MarketItem>
          <Marketprice>{props.ada} 원</Marketprice>
        </MarketSmallWrapper>
      </MarketWrapper>
      <MarketWrapper>
        <MarketSmallWrapper>
          <MarketItem>테더</MarketItem>
          <Marketprice>{props.tet} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>바이낸스</MarketItem>
          <Marketprice>{props.bnb} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>리플</MarketItem>
          <Marketprice>{props.xrp} 원</Marketprice>
        </MarketSmallWrapper>
      </MarketWrapper>
      <MarketWrapper>
        <MarketSmallWrapper>
          <MarketItem>솔라나</MarketItem>
          <Marketprice>{props.sol} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>폴카닷</MarketItem>
          <Marketprice>{props.dot} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>트론</MarketItem>
          <Marketprice>{props.tron} 원</Marketprice>
        </MarketSmallWrapper>
      </MarketWrapper>
      <MarketWrapper>
        <MarketSmallWrapper>
          <MarketItem>도지코인</MarketItem>
          <Marketprice>{props.doge} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>유니스왑</MarketItem>
          <Marketprice>{props.uni} 원</Marketprice>
        </MarketSmallWrapper>
        <MarketSmallWrapper>
          <MarketItem>코스모스</MarketItem>
          <Marketprice>{props.cos} 원</Marketprice>
        </MarketSmallWrapper>
      </MarketWrapper>
    </Wrapper>
  );
}
