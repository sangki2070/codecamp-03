import axios from "axios";
import LayoutMarketUI from "./LayoutMarket.present";
import { useEffect, useState } from "react";

export default function LayoutMarketPage() {
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);
  const [xrp, setXrp] = useState(0);
  const [doge, setDoge] = useState(0);
  const [bnb, setBnb] = useState(0);
  const [uni, setUni] = useState(0);
  const [sol, setSol] = useState(0);
  const [tron, setTron] = useState(0);
  const [dot, setDot] = useState(0);
  const [tet, setTet] = useState(0);
  const [cos, setCos] = useState(0);
  const [ada, setAda] = useState(0);

  useEffect(() => {
    async function getResponse() {
      const markets = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Ctether%2Cbinancecoin%2Csolana%2Cpolkadot%2Ctron%2Cdogecoin%2Ccosmos%2Cuniswap%2Cripple&vs_currencies=krw"
      );

      setBtc(markets.data.bitcoin.krw);
      setEth(markets.data.ethereum.krw);
      setXrp(markets.data.ripple.krw);
      setBnb(markets.data.binancecoin.krw);
      setDoge(markets.data.dogecoin.krw);
      setUni(markets.data.uniswap.krw);
      setSol(markets.data.solana.krw);
      setTron(markets.data.tron.krw);
      setDot(markets.data.polkadot.krw);
      setTet(markets.data.tether.krw);
      setCos(markets.data.cosmos.krw);
      setAda(markets.data.cardano.krw);
    }
    getResponse();
  }, []);
  return (
    <LayoutMarketUI
      btc={btc}
      eth={eth}
      xrp={xrp}
      doge={doge}
      bnb={bnb}
      uni={uni}
      sol={sol}
      tron={tron}
      dot={dot}
      tet={tet}
      cos={cos}
      ada={ada}
    />
  );
}
