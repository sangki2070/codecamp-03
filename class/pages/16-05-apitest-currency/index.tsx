import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [krw, setKrw] = useState("");
  const [jpy, setJpy] = useState("");
  const [hkd, setHkd] = useState("");
  const [twd, setTwd] = useState("");
  const [gbp, setGbp] = useState("");
  const [cad, setCad] = useState("");
  const [aud, setAud] = useState("");
  const [cny, setCny] = useState("");

  useEffect(() => {
    async function getRate() {
      const rates = await axios.get(
        // "https://api.exchangeratesapi.io/latest?base=EUR"
        "http://api.currencylayer.com/live?access_key=1eacfe8be2c26da8b61ed3cc23773ebe& symbols = KRW"
      );
      setKrw(rates.data.quotes.USDKRW);
      setJpy(rates.data.quotes.USDJPY);
      setCny(rates.data.quotes.USDCNY);
      setHkd(rates.data.quotes.USDHKD);
      setTwd(rates.data.quotes.USDTWD);
      setGbp(rates.data.quotes.USDGBP);
      setCad(rates.data.quotes.USDCAD);
      setAud(rates.data.quotes.USDAUD);

      console.log(rates);
    }
    getRate();
  }, []);

  return (
    <>
      <div>오픈API</div>
      <div>USD/KRW : {krw}</div>
      <div>USD/JPY : {jpy}</div>
      <div>USD/CNY: {cny}</div>
      <div>USD/HKD: {hkd}</div>
      <div>USD/TWD: {twd}</div>
      <div>USD/GBP: {gbp}</div>
      <div>USD/CAD: {cad}</div>
      <div>USD/AUD: {aud}</div>
    </>
  );
}
