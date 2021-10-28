import {
  Wrapper,
  MarketItem,
  Marketprice,
  MarketWrapper,
  MarketSmallWrapper,
} from "./LayoutMarket.styles";

export default function LayoutMarketUI(props: any) {
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

// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div id="tradingview_82bec"></div>
//   <div class="tradingview-widget-copyright">TradingView 제공 <a href="https://kr.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL 차트</span></a></div>
//   <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
//   <script type="text/javascript">
//   new TradingView.widget(
//   {
//   "width": 980,
//   "height": 610,
//   "symbol": "NASDAQ:AAPL",
//   "interval": "D",
//   "timezone": "Etc/UTC",
//   "theme": "dark",
//   "style": "1",
//   "locale": "kr",
//   "toolbar_bg": "#f1f3f6",
//   "enable_publishing": false,
//   "allow_symbol_change": true,
//   "container_id": "tradingview_82bec"
// }
//   );
//   </script>
// </div>
// <!-- TradingView Widget END -->

// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright">TradingView 제공 <a href="https://kr.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">크립토커런시 마켓</span></a></div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
//   {
//   "width": 1000,
//   "height": 490,
//   "defaultColumn": "overview",
//   "screener_type": "crypto_mkt",
//   "displayCurrency": "USD",
//   "colorTheme": "dark",
//   "locale": "kr"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->
