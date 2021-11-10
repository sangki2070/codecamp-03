import CurrencyRateUI from "./BoardsCurrencyRate.present";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CurrencyRateContainer() {
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
        "https://api.currencylayer.com/live?access_key=1eacfe8be2c26da8b61ed3cc23773ebe& symbols = KRW"
      );
      setKrw(rates.data.quotes.USDKRW.toFixed(2));
      setJpy(rates.data.quotes.USDJPY.toFixed(2));
      setCny(rates.data.quotes.USDCNY.toFixed(2));
      setHkd(rates.data.quotes.USDHKD.toFixed(2));
      setTwd(rates.data.quotes.USDTWD.toFixed(2));
      setGbp(rates.data.quotes.USDGBP.toFixed(2));
      setCad(rates.data.quotes.USDCAD.toFixed(2));
      setAud(rates.data.quotes.USDAUD.toFixed(2));

      console.log(rates);
    }
    getRate();
  }, []);

  return (
    <CurrencyRateUI
      krw={krw}
      jpy={jpy}
      hkd={hkd}
      twd={twd}
      gbp={gbp}
      cad={cad}
      aud={aud}
      cny={cny}
    ></CurrencyRateUI>
  );
}
