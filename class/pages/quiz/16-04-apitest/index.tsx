import axios from "axios";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);
  const [xrp, setXrp] = useState(0);
  const [doge, setDoge] = useState(0);
  const [bnb, setBnb] = useState(0);

  useEffect(() => {
    async function getResponse() {
      const markets = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Cdogecoin%2Cbinancecoin&vs_currencies=krw"
      );
      setBtc(markets.data.bitcoin.krw);
      setEth(markets.data.ethereum.krw);
      setXrp(markets.data.ripple.krw);
      setBnb(markets.data.binancecoin.krw);
      setDoge(markets.data.dogecoin.krw);
    }

    getResponse();
  }, []);

  return (
    <>
      <div>오픈API</div>
      <div>비트코인 : {btc}</div>
      <div>이더리움 : {eth}</div>
      <div>리플 : {xrp}</div>
      <div>도지코인 : {doge}</div>
      <div>바이낸스코인 : {bnb}</div>
    </>
  );
}
