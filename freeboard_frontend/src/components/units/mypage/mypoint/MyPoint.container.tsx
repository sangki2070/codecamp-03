import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyPointUI from "./MyPoint.presenter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
} from "./MyPoint.queries";

export default function MyPointContainer() {
  const [isChange, setIsChange] = useState(true);
  const [isChanged, setIsChanged] = useState(true);

  const { data: data1 } = useQuery(FETCH_POINT_TRANSACTIONS);

  const { data: data2 } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const { data: data3 } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  function onClickAllPoint() {
    setIsChange(true);
    setIsChanged(false);
  }

  function onClickChargePoint() {
    setIsChange(false);
    setIsChanged(false);
  }

  function onClickBuyPoint() {
    setIsChange(false);
    setIsChanged(true);
  }

  function onClickSellPoint() {
    setIsChange(true);
    setIsChanged(true);
  }

  return (
    <MyPointUI
      isChange={isChange}
      isChanged={isChanged}
      onClickAllPoint={onClickAllPoint}
      onClickChargePoint={onClickChargePoint}
      onClickBuyPoint={onClickBuyPoint}
      onClickSellPoint={onClickSellPoint}
      data1={data1}
      data2={data2}
      data3={data3}
    />
  );
}
