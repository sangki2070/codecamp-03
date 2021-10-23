import {
  MyPointArea,
  AllPoint,
  ChargePoint,
  BuyPoint,
  SellPoint,
  MainWrapper,
} from "./MyPoint.styles";

import Table01 from "../../../commons/table/01";
import Table02 from "../../../commons/table/02";
import Table03 from "../../../commons/table/03";
import Table04 from "../../../commons/table/04";

export default function MyPointUI(props) {
  return (
    <MyPointArea>
      <AllPoint
        onClick={props.onClickAllPoint}
        isChange={props.isChange}
        isChanged={props.isChanged}
      >
        전체내역
      </AllPoint>
      <>|</>
      <ChargePoint
        onClick={props.onClickChargePoint}
        isChange={props.isChange}
        isChanged={props.isChanged}
      >
        충전내역
      </ChargePoint>
      <>|</>
      <BuyPoint
        onClick={props.onClickBuyPoint}
        isChange={props.isChange}
        isChanged={props.isChanged}
      >
        구매내역
      </BuyPoint>
      <>|</>
      <SellPoint
        onClick={props.onClickSellPoint}
        isChange={props.isChange}
        isChanged={props.isChanged}
      >
        판매내역
      </SellPoint>

      <MainWrapper>
        {props.isChange && !props.isChanged && (
          <Table01 data1={props.data1}></Table01>
        )}
        {!props.isChange && !props.isChanged && (
          <Table02 data2={props.data2}></Table02>
        )}
        {!props.isChange && props.isChanged && (
          <Table03 data3={props.data3}></Table03>
        )}
        {props.isChange && props.isChanged && (
          <Table04 data4={props.data4}></Table04>
        )}
      </MainWrapper>
    </MyPointArea>
  );
}
