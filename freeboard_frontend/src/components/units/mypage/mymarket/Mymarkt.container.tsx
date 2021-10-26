import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyMarketUI from "./Mymarkt.present";
import {
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USEDITEMS_I_SOLD,
} from "./Mymarkt.queries";

export default function MyMarketContainer() {
  const [isMarket, setIsMarket] = useState(true);

  const { data: data1 } = useQuery(FETCH_USEDITEMS_I_SOLD);
  const { data: data2 } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: "" },
  });

  function onClickIsMarket() {
    setIsMarket(true);
  }

  function onClickFavorite() {
    setIsMarket(false);
  }

  return (
    <MyMarketUI
      isMarket={isMarket}
      setIsMarket={setIsMarket}
      onClickIsMarket={onClickIsMarket}
      onClickFavorite={onClickFavorite}
      data1={data1}
      data2={data2}
    />
  );
}
