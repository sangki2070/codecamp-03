import {
  Wrapper,
  TradingChartWrapper,
  TradingChartMiddleWrapper,
} from "./LayoutNav.styles";
import dynamic from "next/dynamic";

// import TradingViewWidget, { Themes } from "react-tradingview-widget";

// @ts-ignore
const TradingViewWidget = dynamic(() => import("react-tradingview-widget"), {
  ssr: false,
});

export default function LayoutNavUI(props: any) {
  return (
    <Wrapper>
      <TradingChartWrapper>
        <TradingChartMiddleWrapper>
          <TradingViewWidget
            symbol="BTCUSD"
            theme="DARK"
            locale="kr"
            allow_symbol_change={true}
            show_popup_button={true}
            container_id="tradingview_6ec8c"
            autosize
          />
        </TradingChartMiddleWrapper>
        <TradingChartMiddleWrapper>
          <TradingViewWidget
            symbol="NASDAQ:TSLA"
            theme="DARK"
            locale="kr"
            allow_symbol_change={true}
            show_popup_button={true}
            container_id="tradingview_6ec8c"
            autosize
          />
        </TradingChartMiddleWrapper>
      </TradingChartWrapper>
    </Wrapper>
  );
}
