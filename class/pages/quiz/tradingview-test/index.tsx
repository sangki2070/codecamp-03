import styled from "@emotion/styled";
import { useEffect } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const TradingChartWrapper = styled.div`
  padding: 15px;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  height: 50vh;
`;

export default function CoinChart() {
  // useEffect(() => {
  //   const tradingWrapper = document.getElementById("tradingview_f4336")
  // })

  return (
    <>
      <div id="tradingview_f4336"></div>
      <TradingChartWrapper>
        <TradingViewWidget
          symbol="KLAYKRW"
          theme={Themes.DARK}
          locale="kr"
          allow_symbol_change={false}
          show_popup_button={false}
          width="200px"
          autosize
        />
      </TradingChartWrapper>
    </>
  );
}

// "width": 980,
// "height": 610,

//  symbol="KLAYKRW"
//           theme={Themes.DARK}
//           locale="kr"
//           allow_symbol_change={false}
//           show_popup_button={false}
//           autosize
